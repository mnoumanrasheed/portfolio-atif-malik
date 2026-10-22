# Atif I. Malik - Executive Portfolio

A production-ready executive personal website for **Atif I. Malik** (CEO, M3 Hive | Founding CEO, Director & Shareholder, 360 Technologies - legal/public review pending before publication).

Designed with a **"Quiet Authority" executive editorial direction**: 85-90% white and light surfaces, restrained deep teal accenting, purposeful typographic hierarchy, and generous composed whitespace - avoiding generic AI template cliches, cyber dashboards, dark mode screens, and fake metrics.

---

## Design System & Creative Direction

- **Palette:** Predominantly White (`#FFFFFF`), Soft Off-White (`#F7F9F8` / `#F2F6F5`), Deep Ink Text (`#17272D`), Muted Body Copy (`#4F5D63`), Hairline Separators (`#DFE7E8`), and a Disciplined Deep Teal Accent (`#377A8A`). Restrained single contrast footer band (`#193039`).
- **Typography:** Modern, approachable executive typography combining `Manrope` for authoritative display headings and `Inter` for body readability.
- **Materiality & Structure:** Open editorial layouts, photographic/vector framing, and purposeful rhythm. Card usage reduced over 50% in favor of spacious editorial rows, fine dividing rules, and horizontal timeline structures.
- **Interactions & Controls:** Restrained pill buttons, clear keyboard focus rings (`focus-visible`), route-aware sticky navigation, and accessible mobile drawer.
- **Editorial Integrity:** Grounded strictly in documented facts. Primary focus on M3 Hive and its three proprietary product initiatives: **NourDoc**, **LeadHive AI**, and **Smart Animal** (in that exact order). 360 Technologies is preserved as a separate historical corporate portfolio with dedicated governance disclosures.

---

## Technical Stack

- **Base Framework:** React 18 + Vite + TypeScript (Strict mode)
- **Styling:** Tailwind CSS 3 + Design Tokens (`tokens.css`, `typography.css`, `global.css`)
- **Choreography & Motion:** GSAP 3.12 + ScrollTrigger (`gsap.context()` cleanup & `prefers-reduced-motion` compliance)
- **Micro-interactions:** Framer Motion 11
- **Routing:** React Router DOM 6 (Deep-linking, scroll restoration, 404 handling)
- **Icons:** Lucide React

---

## Route Architecture (All Routes Fully Functional)

1. `/` - **Executive Overview** (Hero with photo-ready editorial frame, Leadership Perspective, 3 Product Showcases with workflow schematics, 4-step Delivery Timeline, Selected M3 Hive Work teasers, 360 Technologies Historical Foundation, Audience Collaboration Pathways, and Closing CTA)
2. `/about` - **Executive Profile & Leadership** (Full biography, editorial pull quote, 4 leadership principles, photo-ready frame, corporate governance safeguards)
3. `/expertise` - **Expertise & Capabilities** (Applied AI, product engineering, data pipelines, cloud integration, IoT sensing, research workflows)
4. `/ventures` - **M3 Hive Company & Ventures Overview** (Corporate overview, capability practice areas, priority products, partnership structures)
5. `/products/nourdoc` - **NourDoc** (Clinical Documentation AI: ambient audio capture, SOAP note draft generation, mandatory clinician verification, EHR export)
6. `/products/leadhive-ai` - **LeadHive AI** (Lead Engagement & Qualification: multi-channel ingestion, qualification questions, sales hand-off)
7. `/products/smart-animal` - **Smart Animal** (Livestock IoT & Telemetry: sensor collar metrics, rumination monitoring, timely operational alerts)
8. `/work` - **Selected Work** (Documented M3 Hive corporate case studies with interactive domain filters and expandable solution details)
9. `/360-technologies` - **360 Technologies Historical Archive** (Distinct corporate legacy, 6 practice divisions, 9 institutional projects, published text client directory)
10. `/collaboration` - **Collaboration & Strategic Pathways** (Audience-aligned engagement routes for clinicians, enterprises, partners, and investors)
11. `/insights` - **Selected References & Sources** (Verified institutional links, official portals, editorial transparency policy)
12. `/contact` - **Communications & Inquiries** (Verified direct channels + accessible inquiry brief preparation utility with one-click clipboard copy)
13. `/*` - **Route Not Found** (Clean 404 page with direct return links)

---

## Build & Quality Verification

```bash
# Start local development server
npm run dev

# Full TypeScript check and production bundle
npm run build

# Preview production build locally
npm run preview
```

## Contact Form Delivery

The PHP contact endpoint sends all project enquiries to `atif.imran@gmail.com` by default. On the production PHP host, add `atif-mail-config.php` one directory above `public_html` with the Resend and reCAPTCHA secrets; `ENQUIRY_RECIPIENT` is optional unless a different recipient is required.

For cPanel, use PHP 8.1+ with the cURL extension enabled, then place the built `dist/` contents in `public_html`, ensuring `api/contact.php` remains at `public_html/api/contact.php`. The bundled `.htaccess` disables directory listings; merge it with any existing cPanel `.htaccess` rather than overwriting existing site rules. Create `~/atif-mail-config.php` (outside `public_html`) with restrictive permissions, for example:

```php
<?php
return [
  'RESEND_API_KEY' => 're_...',
  'RECAPTCHA_SECRET_KEY' => '...',
  'RECAPTCHA_HOSTNAME' => 'yourdomain.com',
  'ALLOWED_ORIGIN' => 'https://yourdomain.com',
  'ENQUIRY_FROM' => 'M3 Hive Enquiries <enquiries@yourdomain.com>',
  // Optional: defaults are 5 submissions per IP every 15 minutes.
  'CONTACT_RATE_LIMIT_MAX' => '5',
  'CONTACT_RATE_LIMIT_WINDOW' => '900',
];
```

Never upload that configuration file, Resend key, or reCAPTCHA secret to `public_html`, Git, or a frontend `.env` file. The Vite `VITE_RECAPTCHA_SITE_KEY` is the only key allowed in the browser bundle, because it is public by design.

Before running the production build, create a local `.env.production` from `.env.example` and set `VITE_RECAPTCHA_SITE_KEY` to the public key registered for `yourdomain.com`; then run `npm run build` and upload the resulting `dist/` contents. This key is embedded at build time, so setting it only in cPanel after the upload will not enable the form.
