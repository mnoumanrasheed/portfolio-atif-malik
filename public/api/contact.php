<?php
declare(strict_types=1);

/**
 * Contact endpoint for PHP hosting.
 *
 * Deploy this file as public_html/api/contact.php. Store the real configuration
 * in a file above public_html, for example: ~/atif-mail-config.php.
 */

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');
header('X-Frame-Options: DENY');
header('Referrer-Policy: no-referrer');
header('X-Robots-Tag: noindex, nofollow');

function respond(int $status, array $body): void {
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_SLASHES);
    exit;
}

function clean(string $value, int $limit): string {
    $slice = function_exists('mb_substr') ? mb_substr($value, 0, $limit) : substr($value, 0, $limit);
    return trim($slice);
}

function html(string $value): string {
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function clientIp(): string {
    // Do not trust X-Forwarded-For unless a trusted reverse proxy is configured.
    return (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
}

function enforceRateLimit(string $ip, int $limit, int $windowSeconds): void {
    $directory = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'atif-contact-rate-limit';
    if (!is_dir($directory) && !mkdir($directory, 0700, true) && !is_dir($directory)) {
        error_log('Contact endpoint rate-limit storage is unavailable.');
        respond(503, ['ok' => false, 'message' => 'The contact form is temporarily unavailable. Please try again shortly.']);
    }

    $file = $directory . DIRECTORY_SEPARATOR . hash('sha256', $ip) . '.json';
    $handle = fopen($file, 'c+');
    if ($handle === false || !flock($handle, LOCK_EX)) {
        if (is_resource($handle)) fclose($handle);
        respond(503, ['ok' => false, 'message' => 'The contact form is temporarily unavailable. Please try again shortly.']);
    }

    $now = time();
    $stored = stream_get_contents($handle);
    $timestamps = json_decode(is_string($stored) ? $stored : '[]', true);
    $timestamps = is_array($timestamps) ? $timestamps : [];
    $timestamps = array_values(array_filter($timestamps, static function ($timestamp) use ($now, $windowSeconds) {
        return is_int($timestamp) && $timestamp > $now - $windowSeconds;
    }));

    if (count($timestamps) >= $limit) {
        flock($handle, LOCK_UN);
        fclose($handle);
        header('Retry-After: ' . max(1, $windowSeconds - ($now - min($timestamps))));
        respond(429, ['ok' => false, 'message' => 'Too many enquiries were submitted from this connection. Please try again later.']);
    }

    $timestamps[] = $now;
    rewind($handle);
    ftruncate($handle, 0);
    fwrite($handle, json_encode($timestamps));
    fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'message' => 'Method not allowed.']);
}

if (stripos((string) ($_SERVER['CONTENT_TYPE'] ?? ''), 'application/json') !== 0) {
    respond(415, ['ok' => false, 'message' => 'Unsupported request format.']);
}

$config = [];
$configPath = dirname(__DIR__, 2) . '/atif-mail-config.php';
if (is_file($configPath)) {
    $loadedConfig = require $configPath;
    if (is_array($loadedConfig)) {
        $config = $loadedConfig;
    }
}

function setting(array $config, string $key): string {
    $value = $config[$key] ?? getenv($key) ?: '';
    return is_string($value) ? trim($value) : '';
}

$resendKey = setting($config, 'RESEND_API_KEY');
$recaptchaSecret = setting($config, 'RECAPTCHA_SECRET_KEY');
$recipient = setting($config, 'ENQUIRY_RECIPIENT') ?: 'atif.imran@gmail.com';
$from = setting($config, 'ENQUIRY_FROM');
$allowedHostname = setting($config, 'RECAPTCHA_HOSTNAME');
$allowedOrigin = rtrim(setting($config, 'ALLOWED_ORIGIN'), '/');
$rateLimitMax = max(1, min(20, (int) (setting($config, 'CONTACT_RATE_LIMIT_MAX') ?: '5')));
$rateLimitWindow = max(60, min(86400, (int) (setting($config, 'CONTACT_RATE_LIMIT_WINDOW') ?: '900')));

if (!$resendKey || !$recaptchaSecret || !$recipient || !$from || !$allowedHostname || !$allowedOrigin) {
    error_log('Contact endpoint is missing required configuration.');
    respond(503, ['ok' => false, 'message' => 'The contact form is being configured. Please try again shortly.']);
}

$origin = rtrim((string) ($_SERVER['HTTP_ORIGIN'] ?? ''), '/');
if ($origin && !hash_equals($allowedOrigin, $origin)) {
    respond(403, ['ok' => false, 'message' => 'This request origin is not permitted.']);
}

$contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength < 1 || $contentLength > 20000) {
    respond(413, ['ok' => false, 'message' => 'Request is too large.']);
}

enforceRateLimit(clientIp(), $rateLimitMax, $rateLimitWindow);

$rawBody = file_get_contents('php://input');
$rawLength = is_string($rawBody) ? strlen($rawBody) : 0;
if ($rawLength < 1 || $rawLength > 20000) {
    respond(413, ['ok' => false, 'message' => 'Request is too large.']);
}
$payload = json_decode($rawBody ?: '', true);
if (!is_array($payload)) {
    respond(400, ['ok' => false, 'message' => 'Invalid request.']);
}

if (!empty($payload['website'])) {
    respond(400, ['ok' => false, 'message' => 'Unable to submit this enquiry.']);
}

$name = clean((string) ($payload['name'] ?? ''), 120);
$organisation = clean((string) ($payload['organisation'] ?? ''), 160);
$email = clean((string) ($payload['email'] ?? ''), 254);
$enquiryType = clean((string) ($payload['enquiryType'] ?? ''), 100);
$description = clean((string) ($payload['description'] ?? ''), 5000);
$preferredNextStep = clean((string) ($payload['preferredNextStep'] ?? ''), 100);
$token = clean((string) ($payload['recaptchaToken'] ?? ''), 5000);

$descriptionLength = function_exists('mb_strlen') ? mb_strlen($description) : strlen($description);
$enquiryTypes = [
    'Product Adoption',
    'Research and Validation',
    'Distribution and Market Access',
    'Technology Integration',
    'Investment and Strategic Capital',
    'Custom Product Engineering',
];
$nextSteps = [
    'Introductory Call',
    'Workflow Review',
    'Pilot / Feasibility Scoping Session',
    'Technical Architecture Review',
    'Written Correspondence',
];

if (!$name || !$organisation || !filter_var($email, FILTER_VALIDATE_EMAIL) || !in_array($enquiryType, $enquiryTypes, true) || $descriptionLength < 15 || !in_array($preferredNextStep, $nextSteps, true) || !$token) {
    respond(422, ['ok' => false, 'message' => 'Please complete all required fields and try again.']);
}

$verifyRequest = curl_init('https://www.google.com/recaptcha/api/siteverify');
if ($verifyRequest === false) {
    error_log('Contact endpoint could not initialize reCAPTCHA verification.');
    respond(503, ['ok' => false, 'message' => 'Security verification is unavailable. Please try again shortly.']);
}
curl_setopt_array($verifyRequest, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => http_build_query([
        'secret' => $recaptchaSecret,
        'response' => $token,
        'remoteip' => clientIp(),
    ]),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 10,
]);
$verifyResponse = curl_exec($verifyRequest);
$verifyStatus = curl_getinfo($verifyRequest, CURLINFO_RESPONSE_CODE);
curl_close($verifyRequest);
$verification = json_decode(is_string($verifyResponse) ? $verifyResponse : '', true);

if ($verifyStatus !== 200 || !is_array($verification) || empty($verification['success']) || ($verification['action'] ?? '') !== 'contact_enquiry' || (float) ($verification['score'] ?? 0) < 0.5 || !hash_equals($allowedHostname, (string) ($verification['hostname'] ?? ''))) {
    respond(400, ['ok' => false, 'message' => 'Security verification failed. Please refresh the page and try again.']);
}

$subject = 'New M3 Hive project enquiry — ' . $enquiryType;
$emailHtml = '<h2>New project enquiry</h2>'
    . '<p><strong>Name:</strong> ' . html($name) . '</p>'
    . '<p><strong>Organisation:</strong> ' . html($organisation) . '</p>'
    . '<p><strong>Email:</strong> ' . html($email) . '</p>'
    . '<p><strong>Enquiry type:</strong> ' . html($enquiryType) . '</p>'
    . '<p><strong>Preferred next step:</strong> ' . html($preferredNextStep) . '</p>'
    . '<p><strong>Challenge description:</strong><br>' . nl2br(html($description)) . '</p>';

$resendRequest = curl_init('https://api.resend.com/emails');
if ($resendRequest === false) {
    error_log('Contact endpoint could not initialize email delivery.');
    respond(503, ['ok' => false, 'message' => 'Email delivery is unavailable. Please try again shortly.']);
}
curl_setopt_array($resendRequest, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode([
        'from' => $from,
        'to' => [$recipient],
        'reply_to' => $email,
        'subject' => $subject,
        'html' => $emailHtml,
    ], JSON_UNESCAPED_SLASHES),
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $resendKey,
        'Content-Type: application/json',
    ],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 15,
]);
$resendResponse = curl_exec($resendRequest);
$resendStatus = curl_getinfo($resendRequest, CURLINFO_RESPONSE_CODE);
curl_close($resendRequest);

if ($resendStatus < 200 || $resendStatus >= 300) {
    error_log('Resend contact email failed: HTTP ' . $resendStatus . ' ' . substr((string) $resendResponse, 0, 500));
    respond(502, ['ok' => false, 'message' => 'We could not send your enquiry. Please try again shortly.']);
}

respond(200, ['ok' => true, 'message' => 'Your project enquiry has been sent.']);
