# BUILD DIRECTIVE — ATIF I. MALIK | PREMIUM EXECUTIVE PORTFOLIO

> **Mode:** Execute the implementation, not merely a plan or mockup.  
> **Target:** A fully responsive, genuinely premium, production-ready executive portfolio website.  
> **Non-negotiable stack:** **React + Vite + TypeScript + GSAP + Framer Motion**.  
> **Single source of editorial truth:** The **13-page revised executive portfolio document** reproduced in full in **Appendix A** below. If the original `.docx` is present, read it too; if it is absent, Appendix A is sufficient.  
> **Critical constraint:** **DO NOT INVENT OR HALLUCINATE ANY PERSONAL FACT, COMPANY FACT, METRIC, DATE, CLIENT RELATIONSHIP, OUTCOME, CERTIFICATION, AFFILIATION, PROJECT STATUS, QUOTE OR CONTACT DETAIL.**

## 0 — YOUR JOB

You are a senior creative developer, editorial UI/UX designer, and frontend engineer delivering a sophisticated portfolio for **Atif I. Malik**, presented exactly as the authoritative document does:

- **Chief Executive Officer, M3 Hive**.
- **Co-Founder, Director & Shareholder, 360 Technologies** (a **separate** company's historical portfolio; legally sensitive affiliation wording requires final approval).
- Positioning: **Technology Leadership | Applied AI | Product & Business Transformation**.
- The **main story must be Atif as a technology leader**, the problems he helps address and the practical ways a relevant visitor can engage—not a generic software-agency landing page.
- **M3 Hive and its three priority products are the centre of the experience**, in this order: **NourDoc → LeadHive AI → Smart Animal**.
- **360 Technologies receives its own distinctly attributed legacy page**, not a falsely combined company identity.

**Execute autonomously.** Inspect the current repository first. If one exists, preserve useful setup and compatible assets instead of deleting them. Then implement, run, test, fix, and report. Do not stop after writing a plan, do not claim you ran commands you did not run, and do not request decisions when a safe, source-constrained default is possible. If a blocker is real (e.g., no approved portrait or no form backend), implement a high-quality honest alternative and document the blocker.

## 1 — CONTENT GOVERNANCE (HIGHEST PRIORITY)

The attached/source content is FINAL for purposes of website copy. Its language and editorial guardrails outrank any generic marketing suggestion.

1. Treat **Appendix A** as the comprehensive source. Extract *publication-ready passages* into typed content data. Use the editorial/guardrail sections as implementation instructions **only**, never display them as marketing copy.
2. Use the explicitly written hero, short bio, long bio, company overview, product positioning lines, challenges, value propositions, audiences, collaboration options and CTA labels. Light grammar formatting for layout is okay; **changing facts, exaggerating, inventing achievements or changing attribution is forbidden**.
3. **Do not manufacture:** number of years' experience, education, employment timelines, certifications, awards, team size, revenue, funding, traffic, customer totals, savings, performance lifts, success rates, patent counts, verified deployments, regulatory/clinical/veterinary outcomes, partners, quotes/testimonials, news articles, or a 360 Technologies executive/control role not established by source.
4. The revised source **does not give verifiable certifications, career dates, portrait files, or personal project-by-project responsibility**. **Omit sections that would require invented facts.** If a bio page needs visual richness, use typography, verified affiliations, an approach/values diagram and sourced copy—not fake milestones.
5. Use the precise distinctions:
   - `M3 Hive product` for NourDoc, LeadHive AI and Smart Animal.
   - `M3 Hive company project` for M3 Hive's other documented work.
   - `360 Technologies company portfolio — historical` for the separate organisation's published projects/clients.
   - `Atif I. Malik — role confirmed` only for explicit personally verified contributions; otherwise **do not use**.
6. **360 Technologies:** show Atif's source-supplied title accurately but **never imply sole ownership, current executive management/control or direct personal delivery of every referenced contract**. Mark historical company records as historical; avoid framing older clients as live endorsements. Include a final review item for counsel to approve legal/corporate wording.
7. **Product maturity:** where the source says *supports / described workflow / may include / aims to / product direction / pilot opportunity*, retain that degree of certainty. Never silently upgrade concepts, integrations, clinical coding, sensors, regulatory claims or predictions into verified live deployments.
8. **No confidential material**: do not display, describe or hint at shareholder litigation, internal governance disputes or confidential legal details. Do not fabricate a CEO quotation or endorse a client with implied permission.
9. No personal phone/email/address unless included and explicitly approved in this revised source. It is **not** included: do not invent a contact form recipient.
10. **Do not augment these business facts from external sources or earlier conversation.** Existing references in Appendix A may be linked as cited external reading; avoid web scraping to enrich factual assertions. The original document is the sole authority for website content.
11. No fake social feeds, “Insights” posts, case-study screenshots, client testimonials, investor logos, personal portrait, awards, badge logos, or client logos. If unavailable, use high-quality editorial layout and real explanatory diagrams; a real profile page can be excellent without fabricated evidence.
12. Maintain a separate developer-only `content-review.md` noting any omitted/unapproved fields and source-sensitive wording. **Never expose internal review checklist or sensitive editorial notes on the public site.**

### Mandatory implementation of sourcing

- Create a single content source, e.g. `src/content/portfolio.ts` (and optionally data files), with typed records, `attribution`, `evidence`, `status`, `needsApproval` and `sourceSection` fields where helpful.
- Every visible factual statement must trace back to a heading or specific passage in **Appendix A**; run an editorial audit before finalizing.
- Preserve all seven *M3 Hive selected additional work* examples and the **360 Technologies** practice/project lists in their correct sections, but use progressive disclosure to keep the website elegant.
- Put full, explanatory product details on dedicated pages—not 1-line generic cards only. Product pages should present **problem → product approach → potential value → intended stakeholders → collaboration opportunities → honest CTA**.
- The website must clearly help **investors, strategic collaborators, enterprise/public-sector clients, healthcare organisations, sales teams and livestock stakeholders** choose a next step. Do not promise investment returns or fundraising status.

## 2 — DELIVERABLE / TECHNICAL STACK

Use **React + Vite + TypeScript** as the base, with:

- **GSAP** and `ScrollTrigger` for carefully scoped, meaningful scroll choreography, hero intro and visual storytelling; call `gsap.registerPlugin(ScrollTrigger)` and clean up with GSAP context (`gsap.context()` or equivalent) within React effects.
- **Framer Motion** (`framer-motion`) for subtle component enter/exit, route transitions, hover/tap micro-interactions and state-driven disclosures.
- **React Router** (`react-router-dom`) for working deep links and route navigation.
- **Lucide React** for small consistent UI icons, if useful.
- Prefer well-structured **CSS / CSS Modules or Tailwind CSS** (choose one consistent approach). Set design tokens (font, spacing, radii, colors, shadows, motion durations) centrally. No unnecessary UI-library dependence; custom editorial composition is key.
- Strict TypeScript typing, clean imports and no `any` escapes for content schema.
- Only minimal additional dependencies when needed. Set up reproducible package scripts and a clear README.

**Animation ownership:** Do not let GSAP and Framer Motion independently animate the same CSS properties of the same DOM element. Assign ownership by component or nested wrapper. Use GSAP for scroll-based outer-section motion, Framer Motion for inner card/interface interaction. All motion must gracefully deactivate under `prefers-reduced-motion`. Avoid scroll-jacking, excessive parallax, frequent pinning and continuous CPU-heavy animation. Never compromise performance or readability for effects.

**If the repo is already built with Vite/React:** adapt it; do not needlessly rewrite dependencies, data or routing. If empty: initialize a clean Vite React-TS project.

## 3 — ART DIRECTION: PREMIUM, EXECUTIVE, DISTINCTIVE

Create an **editorial technology-leader aesthetic**, not a generic agency template. The viewer should understand who Atif is, his current product focus, relevant evidence and how to get in touch within seconds.

**Visual language**

- Theme: restrained, modern, selective and evidence-led; **generous whitespace**, a sophisticated typographic scale, clean alignment and deliberate negative space.
- Source-inspired accents: **deep teal `#377A8A`**, **soft cyan `#51AAC0`**, white and dark-neutral text. You may add supporting design-only neutrals (e.g., ink, warm white, slate). Avoid neon gradients, “AI brain” wallpaper and decorative noise.
- Use **Inter** or similarly legible contemporary sans-serif. Distinguish large headline typography from small editorial labels and body. Aim for polished rhythm, not oversized random typography.
- Mobile-first; accessible contrast; readable text lengths, purposeful section dividers and premium card proportion.
- **No stock portrait masquerading as Atif.** If no approved portrait exists in repo/assets, use a beautifully designed **typographic/monogram-led identity panel**, not a generic person image.
- No stock client logo walls. Include real official product imagery **only when already supplied/approved**; otherwise draw elegant schematic graphics from the sourced workflow, clearly recognizable as **illustration**, not proof of deployed interfaces.
- Visuals must communicate **NourDoc: clinical conversation → draft notes → clinician review**, **LeadHive AI: enquiry → qualification → hand-off**, **Smart Animal: collar/sensing → information → alerts/insights**. Carefully avoid stating unverified behavior as finished production capability.
- Product art direction can vary subtly by domain within the same consistent personal brand system; keep the three primary products visually more prominent than everything else.

**Do not build** a conventional hero plus repetitive identical grids for 10 sections. Distinct composition should include curated editorial storytelling, one thoughtfully executed sticky product exploration (with robust mobile alternative), asymmetric case-study layouts, concise inline line-work diagrams, appropriate section labels and smooth navigation.

## 4 — INFORMATION ARCHITECTURE (ALL REAL ROUTES)

Build this exact route architecture. All routes must load by direct URL and be accessible from logical links; add a polished 404 page:

```text
/
/about
/m3-hive
/products/nourdoc
/products/leadhive-ai
/products/smart-animal
/work
/360-technologies
/collaboration
/insights
/contact
```

### `/` — Home: flagship experience

In this **exact narrative priority**:

1. **Hero**: clear identity + source-supplied title/role + primary positioning + two working CTAs. Suggested split/overlap composition: left-side editorial narrative; right-side abstract workflow/connection diagram or verified photo if available. Display Atif's name clearly. Consider tasteful rotating *non-factual* terms only if they don't change copy meaning.
2. **Problem-first statement**: headline from source, **“Technology should solve a real problem.”** Explain focus around useful products and coherent engineering delivery.
3. **Three signature products**, prominently in order **NourDoc → LeadHive AI → Smart Animal**. Each needs a distinct relevant explanatory visual, source-backed one-line value, domain label and link to full product story.
4. **How work takes shape**: discovery → prototype/pilot → implementation → iteration; include clear note that scope and validation depend on engagement. Build a concise bespoke timeline; not a fake “our proven 4-step framework” achievement.
5. **Selected work**: curated M3 Hive case-study previews such as Intelligent Comparison, Drug Target Profiler, sequencing and analytics. These are corporate case studies, not personally led achievements.
6. **360 Technologies legacy**: shorter, visually distinct block with company-level historical context, proper role attribution and link to full separate page.
7. **Collaboration pathways**: routes for product adoption, research, integration, distribution, investment conversation and custom product engineering.
8. **Insights/external references**: links only to verified references in source, or a curated “Further reading” panel if there are no approved posts.
9. **Concluding CTA** based on the document: “Let’s start with the problem you need to solve.” Route to a functional contact pathway.

### `/about` — Personal executive story

- The **source's long biography** in appropriately edited paragraphs; don't shorten it into bland credentials.
- Problem-led leadership approach using explicitly supported observations (fragmented data, repetitive work, poor hand-off, practical AI, domain expertise).
- Distinguish current M3 Hive leadership from 360 Technologies company association.
- Avoid an unsupported timeline, qualifications/certifications table, statistics or “founder of x projects” claims.
- Show an authentic CTA to discuss product/business collaboration.

### `/m3-hive` — Current company / execution capability

- Use exact **M3 Hive publish-ready overview** from source.
- Six source-supplied capability areas: AI and intelligent workflows; digital product engineering; data engineering and market intelligence; cloud and enterprise integration; IoT and connected systems; research-oriented software.
- Source-described delivery and engagement models; never imply terms/agreed commercials beyond what is written.
- Three main product entry points; links to selected company work and `https://m3hive.com/`.

### `/products/nourdoc`, `/products/leadhive-ai`, `/products/smart-animal`

Give each a **fully considered bespoke page**, not three copies with changed text. Include:

- Editorial hero with exact product name, category and **positioning line from source**.
- Problem/challenge; source-supplied solution description; value points presented with appropriate status language; stakeholder/audience list; collaboration opportunities; CTA and valid destination.
- Product-specific, clearly illustrative visual sequences; no fake UI screenshots or unverified case metrics.
- Preserve each product's explicit **publication guardrail** in implementation decisions, not necessarily as a public warning card.
- Link back to related M3 Hive capability and collaboration/contact page.
- **NourDoc**: provide `https://nourdoc.m3hive.com/` as the known external official product link; do not fabricate a demo booking calendar.
- **LeadHive AI**: no verified official URL in Appendix A. Internal product page and `/contact` are valid; never invent a product domain.
- **Smart Animal**: no confirmed public pilot booking form; direct visitors to appropriate contact route.

### `/work` — Evidence-backed project portfolio

- Clean filterable/segmented view *only if useful*: M3 Hive company projects, research-oriented software, analytics, prototypes/explorations. A filter must actually work.
- Include **all seven** documented additional company work themes from Appendix A: Intelligent Comparison, Drug Target Profiler, RNA & DNA sequencing analytics, Decoding Behavior, Mazdoori, @Your Door, Regenerative Art.
- Appropriate concise challenge/approach descriptions; source-backed details revealed by accessible expand/collapse or internal sections.
- Mazdoori and @Your Door must not be misrepresented as currently operational. Regenerative Art is experimental. Do not invent publicly accessible apps, client endorsements or outcomes.
- Each card explicitly labels **“M3 Hive company project.”**

### `/360-technologies` — A distinct HISTORICAL company portfolio

- Use exact association title from source, **Co-Founder, Director & Shareholder**, subject to documented legal wording approval. Distinguish Atif's affiliation from the organisation's own body of work.
- Use the source's 360 Technologies company overview and historical positioning.
- Display **all six** listed business/practice areas accurately: 360 Solutions, 360 Logics, 360 BPO, Inductin, EDI, Outpost. Outpost has no described details; do not invent any.
- Cover the documented **historical** project references: Pakistan Post, Pakistan Navy, NADRA/public records, Provincial Boards of Revenue, Sindh education/RSU, IOM, Overseas Pakistanis Foundation, UNDP/parliamentary development, professional training.
- For the published client directory, show company-reported names in **editorial text, not a false customer logo showcase**. Preserve the distinction between client, partner, beneficiary, dataset source and endorsement.
- Heading or section labeling: **“360 Technologies — Company Portfolio & Legacy”** and/or **“Selected references from the published historical company portfolio.”** Do not imply current customer status.
- Include a working link to the source-provided company directory: `https://www.360technologies.net/index.php/360-clients`.
- Do **not** present 360 Technologies as an M3 Hive subsidiary or portray a direct M3 Hive-to-360 lineage unless explicitly established by source.

### `/collaboration` — Audience-led partnership routes

- Implement all six pathways listed in Appendix A: product adoption, research and validation, distribution and market access, technology integration, investment and strategic capital, custom product engineering.
- Explain *who the path suits*, *what they may contribute*, and *a suggested first step*, without promising acceptance, funding or deal terms.
- Use source CTA: “Let’s start with the problem you need to solve.”
- Visitors should be able to select a pathway and navigate to a matching contact enquiry intent **without sending anything to a nonexistent server**.

### `/insights` — Verified references only

- If no approved actual articles/posts are supplied, render a composed **“Selected references & further reading”** page with valid listed external source links (LinkedIn public profile, company page, M3 Hive case studies, official NourDoc page, 360 Technologies company references) and helpful page context.
- **Do not invent article titles, timestamps, event appearances, published papers, comments, quotes, press mentions or an activity feed.** Do not generate a synthetic date-sorted feed.

### `/contact` — Honest, working visitor hand-off

- Elegant contact section with a short statement based on source CTA copy.
- Use only **verified external destinations**: `https://www.linkedin.com/in/aimalik/`, `https://m3hive.com/`, `https://nourdoc.m3hive.com/` where relevant. Label links accurately, e.g. “Connect on LinkedIn,” “Visit M3 Hive,” “Explore NourDoc.”
- Do not promise that a “Book Demo” URL leads to a booking form if it does not.
- A local inquiry-intent selector is allowed, but **DO NOT claim a message was sent** unless a real backend/contact endpoint is supplied. If no backend exists, omit fake submission entirely; show verified external handoff and/or a `mailto` link **only if an approved recipient email is actually provided in source/assets**.
- If query string e.g. `?interest=research` is used, it should preselect the appropriate pathway and remain accessible.

## 5 — INTERACTION & MOTION REQUIREMENTS

- High-end initial hero entrance using GSAP: concise stagger of eyebrow, title, body, CTA and abstract figure. Run **once**, with cleanup; no 5-second blocking loader.
- Scroll-triggered section reveals with understated translation, opacity and mask; avoid triggering large layout shifts.
- Framer Motion for route transitions, nav menu, tabs, accordions, card hover, spotlight changes, small visual state diagrams. CTA focus/hover should respond clearly to keyboard/mouse.
- Scroll progress or section progress indicator if subtle and accurate. Sticky navbar with active route; mobile menu must open, close on selection/Escape and lock scroll responsibly.
- All internal links scroll to top on route changes and deep links should have correct focus semantics.
- All animations honor `prefers-reduced-motion`, are resilient to resize, and never obscure information when JavaScript scroll callbacks are delayed.
- No unneeded Three.js/giant 3D scene unless already in project and proven lightweight; the premium feel should primarily come from composition, color, typography and craft.

## 6 — RESPONSIVE, ACCESSIBILITY, SEO & PERFORMANCE

- Test widths **320, 375, 390, 430, 768, 1024, 1440, 1920px**: no horizontal overflow, clipped headlines, impossible scrolling or mobile overlap.
- Use semantic landmarks, one `h1` per page, orderly headings, keyboard-operable interactions, accessible named links/buttons, visible focus, AA contrast targets, descriptive `alt` for approved images and `aria-hidden` for decorative art.
- Avoid hydration warnings and console errors; destroy ScrollTriggers/observers on unmount. Disable intense effects on touch / low-power contexts as needed.
- Lazy-load route chunks and below-the-fold imagery; optimize pictures; minimize layout shifts; use `loading="lazy"`, explicit image dimensions and `decoding="async"` where suitable.
- Use semantic per-route title and description, open graph tags with **no invented claims**, simple `robots.txt`, `sitemap.xml` for the known routes, and clean favicons. Structured data only for supported person/organization relationships; don't add birthdate, alma mater or awards.
- Ensure accessibility with both pointer and keyboard, no inaccessible hover-only content, working browser back/forward, robust direct URL loading on target hosting. If deploying to SPA hosting, include appropriate fallback/rewrite instructions.
- The project must remain **static-frontend deployable**: no fake server required. Put any later contact backend behind explicit documented configuration.

## 7 — PROJECT STRUCTURE (ADAPT TO EXISTING REPO)

Suggested organization (not a rigid requirement):

```text
src/
  app/                  # router, layouts, providers, SEO, scroll restoration
  components/
    layout/             # header, mobile navigation, footer
    ui/                 # buttons, typography, accessible disclosures, cards
    motion/             # GSAP and Framer Motion wrappers
    diagrams/           # source-faithful product explanatory visuals
  content/
    portfolio.ts        # typed, source-locked copy and attribution metadata
    sources.ts          # approved URLs, internal sections, evidence references
  pages/
    Home.tsx
    About.tsx
    M3Hive.tsx
    Products/
      NourDoc.tsx
      LeadHiveAI.tsx
      SmartAnimal.tsx
    Work.tsx
    Technologies360.tsx
    Collaboration.tsx
    Insights.tsx
    Contact.tsx
    NotFound.tsx
  styles/
    tokens.css
    global.css
    typography.css
  hooks/
  assets/               # only approved/real assets or generated SVG diagrams
public/
README.md
content-review.md        # developer-only; not served in public build
```

The source appendix is **not** to be shipped as a public web page or exposed as a source file fetched by the deployed site. Extract only approved display text and safe source URLs into build data; keep editorial notes in your repo's private review document.

## 8 — QUALITY BAR / ACCEPTANCE CRITERIA

The implementation is **not finished** until each of these is true:

- [ ] React + Vite + TypeScript + GSAP + Framer Motion actually installed, integrated and used appropriately.
- [ ] All **11 specified pages** plus polished 404 exist and are reachable via direct URL and internal navigation.
- [ ] Clear, premium executive identity; **not** a recycled generic company-site template.
- [ ] Three priority M3 Hive products visibly dominate homepage and have full source-faithful standalone pages.
- [ ] All seven additional M3 Hive work items represented with correct company attribution.
- [ ] 360 Technologies page contains history, practices, institutional project references and cautious, separate company attribution.
- [ ] No made-up personal achievements, certifications, dates, contact details, photos, quotes, metrics, customers, products or claimed statuses.
- [ ] No fictional testimonials, fabricated award badges, unlicensed logos or unsupported case-study screenshots.
- [ ] Every CTA leads to a working internal section/page or an approved external link; no pretend submission or dead UI.
- [ ] Accurate product maturity language, honest client relationships and no implied clinical/veterinary/regulatory certification.
- [ ] Mobile menu, route transitions, accordions and any filters/interactive diagrams fully function.
- [ ] WCAG-oriented semantics, keyboard navigation, reduced-motion behavior and sensible SEO.
- [ ] Source audit against Appendix A complete; internal `content-review.md` includes remaining editorial/asset/contact/legal approval flags.
- [ ] `npm run build` passes. Run available typecheck/lint/tests; fix errors and relevant warnings. If scripts are missing, add sensible scripts and run them.
- [ ] Preview locally and check representative desktop/mobile layouts (screenshots or browser if available); fix clipping, overflow and motion issues.
- [ ] No invented success claims in the final handoff report. State precisely what you tested.

## 9 — EXECUTION ORDER

1. **Inspect** repository, package files and assets. Identify reusable code/approved visuals. Check the authoritative content below.
2. **Plan briefly in your internal working notes**: route map, content objects, design system, image treatment and animation split (GSAP vs Framer Motion).
3. **Build fully**: Vite app/router/types/content/styles/components/diagrams/pages. Do not return a design-only answer.
4. **Quality-assure** content attribution, routing, CTA destinations, responsive styling, accessibility and reduced motion.
5. **Run commands**: install dependencies as required; build and test. Fix errors.
6. **Handoff** with a concise summary of implementation, major files and routes, exact commands run and results, and any remaining asset/legal/backend confirmations. Do not report verified deployments, performance scores or tests you did not actually perform.

### FINAL INSTRUCTION

**Proceed to implement the complete premium portfolio now.** Preserve the source's detailed information, the distinctions between personal and company achievements, the three central product stories and the standalone historical 360 Technologies context. Elevate the presentation—not the underlying factual claims. If a design depends on missing evidence, make a better design choice rather than inventing it.

---

# APPENDIX A — AUTHORITATIVE REVISED EXECUTIVE CONTENT (REFERENCE MATERIAL; NOT A PUBLIC PAGE)

**Source:** `Atif_I_Malik_Revised_Executive_Portfolio_Website_Content.docx` supplied by the client.  
**Purpose:** This is the sole factual and editorial corpus. Use its expressly “publish-ready” sections on the public website; respect all internal limitations and publication guardrails. Do **not** reproduce editorial instructions, legal checklist items or this appendix verbatim as site-facing content.  
**Completeness:** The paragraphs and tables below are extracted from the supplied `.docx` in their original order. Reflow into actual web layouts while retaining their factual content, names, caution levels and category distinctions.

ATIF I. MALIK

Technology Leadership  |  Applied AI  |  Product & Business Transformation

Chief Executive Officer, M3 Hive  
Co-Founder, Director & Shareholder, 360 Technologies

REVISED EXECUTIVE PORTFOLIO WEBSITE CONTENT  
Positioning, publish-ready copy, company case studies and developer handoff


## Purpose and positioning
This revision shifts the portfolio from a catalogue of technologies and company projects to an executive-led story: the business challenges Atif I. Malik works to solve, the products and teams through which those challenges can be addressed, and the practical ways investors, collaborators and clients can engage with M3 Hive or explore 360 Technologies’ documented legacy.


> Core positioning  
> Atif I. Malik connects business problems with product thinking, applied AI and technology delivery. Through M3 Hive, he is focused on building practical AI-led products and engineering solutions—especially NourDoc, LeadHive AI and Smart Animal—while his association with 360 Technologies adds a separate company history of enterprise, public-sector and technology-services work.


### Editorial principles
- Lead with the audience’s challenge and the value proposition—not a long inventory of technologies.
- Keep M3 Hive and its current product priorities at the centre of the site.
- Present NourDoc, LeadHive AI and Smart Animal as the three principal product stories.
- Describe 360 Technologies as a separate company in which Atif I. Malik is Co-Founder, Director and Shareholder. Attribute clients, projects and achievements to the company unless a specific personal contribution is confirmed.
- Do not publish shareholder litigation, internal governance disputes or confidential legal details on the public website. Keep public wording factual and role-focused; have counsel review any language that could imply current control, operational responsibility or authority to speak for 360 Technologies.
- Do not invent customer outcomes, deployment metrics, certifications, investor commitments, clinical efficacy or project dates. Label company-reported capability clearly where independent evidence is not available.

## 1. Executive identity and homepage copy

### Hero section

> ATIF I. MALIK  
> Technology Leadership \| Applied AI \| Product & Business Transformation  
>   
> I work with organisations to turn complex operational challenges into practical digital products, AI-enabled workflows and scalable technology solutions.  
>   
> Chief Executive Officer, M3 Hive \| Co-Founder, Director & Shareholder, 360 Technologies  
>   
> Primary CTA: Discuss a Project  
> Secondary CTA: Explore Selected Work


### Short biography
Atif I. Malik is a technology entrepreneur and business leader focused on product development, applied artificial intelligence, data-driven platforms and digital transformation. As CEO of M3 Hive, he works with teams and partners to shape practical technology solutions around real business and operational needs. M3 Hive’s current product focus includes NourDoc, an AI-enabled clinical documentation platform; LeadHive AI, a lead engagement and qualification engine; and Smart Animal, an IoT-based livestock health monitoring and predictive insight platform. Atif is also a Co-Founder, Director and Shareholder of 360 Technologies, a separate technology-services company whose published portfolio includes enterprise systems, public-sector digitisation, data services and professional capability development.


### Long biography — About page
Atif I. Malik’s work sits at the intersection of business needs, product strategy and technology execution. His approach starts with the problem to be solved: where work is repetitive, information is fragmented, customer engagement is inconsistent, or decisions depend on data that is difficult to access and interpret. From there, he helps connect domain expertise, user needs, product design, engineering and applied AI into a coherent delivery path.  
  
At M3 Hive, Atif leads a technology company whose capabilities span digital product engineering, intelligent automation, data and AI, cloud platforms, customer experience and connected systems. Its current product priorities reflect three distinct opportunities: reducing documentation friction in healthcare through NourDoc; improving lead engagement and qualification through LeadHive AI; and using connected sensing and analytics to support livestock monitoring through Smart Animal. M3 Hive also has experience described in its corporate materials across market intelligence, bioinformatics, retail analytics and digital platforms.  
  
Atif is a Co-Founder, Director and Shareholder of 360 Technologies. The company’s published historical portfolio includes work in public-sector information systems, postal workflows, digitisation, enterprise data and business intelligence, outsourcing and professional training. Those achievements and client references belong to 360 Technologies as an organisation and are presented here as company history, not as a claim that Atif personally delivered every listed assignment.  
  
The portfolio is intended to help investors understand the product opportunity, help collaborators identify where their expertise or networks can contribute, and help prospective clients map their challenges to a suitable product, proof of concept or engineering engagement.


## 2. Audience-led value proposition

| Audience | Likely challenge | What the portfolio should communicate | Suggested CTA |
| --- | --- | --- | --- |
| Investors | A promising idea needs a clear market problem, product direction, differentiation and a credible path to adoption. | M3 Hive is developing focused AI products with identifiable use cases, while remaining capable of delivering custom technology. | Explore Product Opportunities |
| Strategic collaborators | Domain knowledge, distribution, research, implementation or market access may be needed to move a product forward. | Collaboration can be structured around pilots, research, channel partnerships, integrations or co-creation—with scope and responsibilities agreed clearly. | Explore Collaboration |
| Enterprise and public-sector clients | Legacy workflows, disconnected data, manual processes or complex service delivery create cost and visibility challenges. | M3 Hive can scope product engineering, automation, data/AI and integration work around the organisation’s operating context. | Discuss a Business Challenge |
| Healthcare organisations | Clinical documentation consumes time and clinical information needs to become structured and usable. | NourDoc is focused on AI-assisted clinical documentation and downstream-ready clinical information workflows. | Book a NourDoc Demo |
| Sales and growth teams | Leads arrive from multiple channels, but follow-up, qualification and hand-off can be inconsistent. | LeadHive AI is positioned around lead engagement, qualification and a more organised journey from enquiry to sales conversation. | Explore LeadHive AI |
| Livestock and agriculture stakeholders | Animal health and behaviour changes may be difficult to observe continuously across a herd. | Smart Animal combines IoT-based monitoring and data-led alerts to support more timely herd-management decisions. | Discuss a Smart Animal Pilot |


### Suggested section headline

> Technology should solve a real problem.  
> Whether the challenge is clinical documentation, lead conversion, livestock monitoring or a complex enterprise workflow, the starting point is the same: understand the operating reality, define the outcome, and build the right digital solution.


## 3. M3 Hive — company overview and capabilities

### Publish-ready overview
M3 Hive is a technology development company focused on translating business needs into digital products, intelligent workflows and applied AI solutions. Its company portfolio spans product engineering, customer experience, intelligent automation, data engineering and analytics, cloud platforms, connected systems and digital design. M3 Hive works across product-led initiatives and custom engagements, with the aim of aligning technical choices to the problem, users and operating environment.


### Capability areas
- AI and intelligent workflows: Generative AI, conversational experiences, retrieval-augmented generation, document processing and workflow automation.
- Digital product engineering: Discovery, product definition, UX/UI, software architecture, web/mobile development and iterative delivery.
- Data engineering and market intelligence: Data acquisition, pipelines, data quality, analytics, dashboards and decision-support platforms.
- Cloud and enterprise integration: Cloud-native systems, API integration, data platforms and deployment approaches aligned to client needs.
- IoT and connected systems: Sensor-connected products, edge technologies, data capture and monitoring interfaces.
- Research-oriented software: Bioinformatics workflows, scientific data processing and interactive visualisation.

### Engagement models
Depending on the problem and stage of maturity, a project may begin with discovery and feasibility, proceed through a proof of concept or pilot, or move directly into a defined engineering engagement. Potential structures include fixed-scope delivery, time-and-materials, embedded specialist teams, integration projects and strategic product collaboration. Scope, ownership, data access, success measures and commercial terms should be agreed before delivery begins.


## 4. M3 Hive product portfolio — priority stories

### NourDoc | HealthTech AI
Positioning line: Let AI handle the documentation. Let clinicians focus on care.

NourDoc is an AI-enabled clinical documentation platform designed to transform clinical conversations and notes into structured healthcare documentation. Its described workflow includes conversation capture, transcription, draft SOAP notes and support for clinical information workflows. The product direction also includes coding support and integration-oriented workflows for healthcare providers and organisations.


#### The challenge
Clinicians and healthcare teams must capture detailed encounter information while maintaining attention on the patient. Manual or fragmented documentation can add administrative friction, and unstructured information may be difficult to reuse across downstream workflows.


#### The value proposition
- Support the creation of structured draft clinical notes from clinical conversations and notes.
- Help reduce repetitive documentation effort while keeping clinicians responsible for review and finalisation.
- Support workflows that may include ICD-10 and CPT coding assistance, batch processing and integration with EHR/EMR or HIMS environments, subject to product configuration and validation.
- Explore cloud-native deployment, with on-premises configuration considered where requirements justify it.

#### Who may benefit
Clinicians, clinics, hospitals, telemedicine providers, medical coding and billing organisations, and healthcare technology partners.


#### Collaboration opportunities
Clinical pilots, hospital adoption, research and evaluation, EHR/EMR integration, channel distribution, medical coding and billing workflows, and market-specific implementation partnerships.

CTA: Book a Demo | Explore a Clinical Pilot | Discuss Integration

Publication guardrail: Do not claim clinical efficacy, guaranteed time savings, regulatory approval, HIPAA compliance or a specific deployment scale without current supporting evidence.


### LeadHive AI | Lead Engagement & Qualification Engine
Positioning line: Turn incoming interest into better-qualified sales conversations.

LeadHive AI is positioned as an AI-enabled lead engagement and qualification engine for organisations that need to respond to enquiries, understand prospect intent and organise follow-up across digital channels. The product story should focus on helping teams move from a raw enquiry to a more useful qualification and hand-off process—not simply on deploying a chatbot.


#### The challenge
Marketing and sales teams can receive leads through websites, social channels and messaging platforms, yet responses may be delayed, qualification questions may be inconsistent and valuable enquiries may be lost between initial contact and sales follow-up.


#### The value proposition
- Engage prospects with structured, conversational interactions.
- Ask qualification questions and organise responses against the business’s lead criteria.
- Help route qualified enquiries to the right team or next step.
- Support channel-oriented workflows and integration planning according to each organisation’s systems and policies.
- Create a clearer hand-off from first contact to human sales or service teams.

#### Who may benefit
Sales-led businesses, service providers, education and immigration consultancies, real estate teams and other organisations managing digital enquiries.


#### Collaboration opportunities
Channel partnerships, CRM integration, industry-specific qualification playbooks, pilot deployments and lead-generation agency partnerships.

CTA: Explore LeadHive AI | Design a Lead Qualification Workflow

Publication guardrail: Confirm the currently supported channels, integrations, analytics and automation capabilities before listing them as live features.


### Smart Animal | AgriTech AI & IoT
Positioning line: Connected livestock monitoring for more informed herd management.

Smart Animal is an IoT-based livestock monitoring and predictive-insight platform described in M3 Hive materials as combining collars and digital interfaces to help monitor animal activity and herd information. The documented solution elements include heat detection, rumination and eating-pattern indicators, individual alerts, group-level digestion alerts and mobile herd-management features.


#### The challenge
Livestock managers need timely visibility into animal behaviour and herd conditions. Periodic observation alone may not capture every change early enough to support an informed response, particularly across larger herds or dispersed operations.


#### The value proposition
- Collect sensor-based activity and behaviour indicators through connected monitoring.
- Present alerts and herd information through digital interfaces.
- Support more timely attention to potential changes in animal behaviour and routine.
- Create a foundation for analytics and predictive insights as data quality, models and validation mature.

#### Who may benefit
Livestock farms, dairy operations, animal-health professionals, agricultural researchers, integrators and distribution partners.


#### Collaboration opportunities
Farm pilots, veterinary and research collaboration, sensor/device integration, field validation and agriculture-sector distribution.

CTA: Discuss a Smart Animal Pilot | Explore AgriTech Collaboration

Publication guardrail: Describe predictive capabilities proportionately; do not claim proven veterinary outcomes or quantified herd improvements without evidence.


## 5. M3 Hive selected additional work
Use this section to show technical range after the three priority products. Each card should be labelled “M3 Hive company project” unless a different attribution is documented.


| Project / area | Challenge and value proposition | Suggested presentation |
| --- | --- | --- |
| Intelligent Comparison / market intelligence | Enterprise company and market data can be difficult to collect, standardise and compare. M3 Hive materials describe data engineering and pipelines supporting company discovery, benchmarking and market analysis. | Feature as a data-intensive platform case study. Do not present dataset size as M3 Hive’s client count or a personally led result. |
| Drug Target Profiler | Research teams need ways to explore compound–target relationships across complex scientific datasets. The described web application supports interactive network analysis and filtering. | Research software and visual analytics card. |
| RNA & DNA sequencing analytics | Genomic datasets require reproducible processing and analysis workflows. M3 Hive materials describe preprocessing, alignment, quantification, differential expression and variant-analysis tooling. | Bioinformatics capability card; omit unsupported disease-related statistics. |
| Decoding Behavior / retail analytics | Fragmented retail data and customer feedback can make demand and sentiment difficult to interpret. The described work combines data integration, NLP and dashboards. | Retail analytics card; distinguish dataset sources from clients. |
| Mazdoori / digital marketplace | The described concept connects customers with local skilled workers through service categories, locations and booking flows. | Include only after confirming current product status. |
| @Your Door / commerce workflows | The described ordering experience includes customer ordering, merchant management and delivery-related workflows. | Include only after confirming current operating and integration status. |
| Regenerative Art / data storytelling | An experimental initiative combining data visualisation, digital art and interactive storytelling. | Place under experimentation or selected explorations, not as a verified commercial rollout. |


## 6. 360 Technologies — company history and public portfolio
Atif I. Malik is a Co-Founder, Director and Shareholder of 360 Technologies. This section is intentionally presented as a separate company profile and historical portfolio. Client names, project descriptions and achievements below are attributed to 360 Technologies’ published company materials; they should not imply that every project was personally sold, managed or delivered by Atif.


### Company overview — publish-ready copy
360 Technologies is an IT services organisation whose published historical portfolio spans software development, enterprise data and business intelligence, digitisation, outsourcing, security consulting and professional capability development. Its project listings include public-sector information systems, postal and operational workflows, land-record digitisation, education data solutions and enterprise technology services. The portfolio reflects a history of technology work across government, enterprise and institutional environments.


### Published practice areas

| Practice / business line | Company-described activities |
| --- | --- |
| 360 Solutions | Web, software and mobile applications; design; maintenance and support; historical information-security consulting. |
| 360 Logics | Data warehousing, business intelligence, master-data management, data mining, big data and location/real-time analytics. |
| 360 BPO | Back-office services, contact-centre operations, digitisation and managed outsourcing. |
| Inductin | Recruitment and headhunting, HR-related services, training and resource development. |
| EDI — Entrepreneurship Development Institute | Workshops, short courses, startup-development programmes, exhibits and entrepreneurship learning. |
| Outpost | Listed as a business line in the supplied historical profile; detailed public description should be confirmed before elaboration. |


### Selected company project references

| Organisation / sector | Projects listed in 360 Technologies’ historical public portfolio |
| --- | --- |
| Pakistan Post | International Postal System implementation and maintenance; express-mail tracking; complaint/reporting systems; pension and counter automation; postal data processing. |
| Pakistan Navy | Budget Management System software and office-automation assignments. |
| NADRA / public records | Digitisation and data-entry work involving BISP records and Election Commission of Pakistan records, as described by the company. |
| Provincial Boards of Revenue | Land-record scanning and data entry across listed districts in Punjab, Sindh and Khyber Pakhtunkhwa. |
| Sindh education / RSU | School-student and school-budget applications, education data management and reform support. |
| IOM | Nationwide communication assessment and flood-response monitoring data-entry assignment. |
| Overseas Pakistanis Foundation | Website, web portal and online internship portal. |
| UNDP / parliamentary development | Websites, maintenance and support for SDPD-related public-sector programmes. |
| Professional training | Technology training for National Assembly and Senate staff and Telenor, as recorded on the historical company website. |


### Published client directory — selected names
The historical 360 Technologies website lists organisations including Pakistan National Assembly, Pakistan Navy, Pakistan Post, Telenor, NADRA, Senate of Pakistan, Boards of Revenue (Punjab, Sindh and KP), RSU, NCHD, IBM, UNDP Pakistan, IOM, Gemalto UAE, Royal Airport Services, Global Airport Concierge, CalAirCargo USA and Enercon, among others. These should be labelled as company references, not as personal endorsements or a claim that every relationship is current.


### Suggested 360 Technologies page treatment
- Use a distinct page or clearly separated section titled “360 Technologies — Company Portfolio & Legacy”.
- State Atif’s role as Co-Founder, Director & Shareholder, subject to final legal and corporate wording review.
- Use “360 Technologies’ published portfolio includes…” and “The company lists…” for historical projects and clients.
- Date historical achievements where dates are available; avoid describing old project listings as recent or currently active.
- Use company logos and testimonials only after permission, authenticity and usage rights are confirmed.
- Do not place company projects under “Projects I personally led” unless a specific personal role is documented and approved.

## 7. Collaboration and investment pathways
The website should make the next step clear for each audience. Avoid a generic invitation to “partner with us” without explaining what a partner can contribute.


| Pathway | Potential contribution | Possible first step |
| --- | --- | --- |
| Product adoption | Clinics, hospitals, sales teams or livestock operations with a defined use case. | Discovery call, workflow review and scoped pilot. |
| Research and validation | Universities, domain specialists, clinicians, veterinary professionals and research teams. | Agree research questions, evaluation criteria, data governance and publication review. |
| Distribution and market access | Regional partners, resellers, industry associations and implementation partners. | Define target market, customer profile, commercial model and support responsibilities. |
| Technology integration | EHR/EMR vendors, CRM providers, sensor/device vendors and enterprise platform teams. | Technical discovery, integration map and proof of concept. |
| Investment and strategic capital | Investors aligned with product stage, market and growth requirements. | Product briefing, market thesis, traction evidence and a structured diligence conversation. |
| Custom product engineering | Organisations with an operational problem that needs a tailored digital solution. | Problem statement, constraints, desired outcomes and a discovery engagement. |


### CTA copy

> Let’s start with the problem you need to solve.  
> If you are exploring AI adoption, a product pilot, technology integration, research collaboration or a custom digital platform, share the challenge and the outcome you are working toward. We can determine whether an existing M3 Hive product or a tailored engagement is the right fit.


## 8. Recommended website map and content order

| Page / section | Purpose and recommended content |
| --- | --- |
| Home | Hero; audience problem/value statement; three priority products; selected proof; 360 Technologies company-history link; collaboration pathways; contact CTA. |
| About Atif | Executive biography; leadership approach; career and learning highlights supported by evidence; company affiliations. |
| M3 Hive | Company overview; capability areas; engagement models; link to corporate website. |
| Products | NourDoc, LeadHive AI and Smart Animal, each with challenge, solution, intended users, pilot/partner opportunities and CTA. |
| Selected Work | M3 Hive company projects with attribution labels, sector, problem, solution elements, source and status. |
| 360 Technologies | Separate company history, published service lines, selected project references and client directory with historical context. |
| Collaboration | Investor, research, distribution, implementation, integration and customer-pilot pathways. |
| Insights | Authentic LinkedIn posts/articles and public partnership announcements linked to original sources. |
| Contact | LinkedIn and approved professional contact channels; M3 Hive business enquiry link. |


### Homepage flow — recommended sequence
1. Hero: identity, positioning statement and two clear CTAs.
1. Problem-led value proposition: “From operational challenge to practical technology.”
1. Three priority product cards: NourDoc, LeadHive AI and Smart Animal.
1. How collaboration works: discovery → prototype/pilot → implementation → iteration.
1. Selected M3 Hive company work: market intelligence, bioinformatics and digital platforms.
1. 360 Technologies: separate company-history proof point with selected institutional references.
1. Collaboration pathways: investors, domain partners, distribution partners and clients.
1. Insights and credible external references.
1. Final CTA: discuss a project or collaboration.

## 9. Visual direction and UX guidance
- Design direction: executive, restrained, modern and evidence-led; use generous whitespace and clear content hierarchy.
- Suggested typography: Inter or a comparable clean sans-serif.
- Suggested palette: deep teal #377A8A, soft cyan #51AAC0 and white, supported by dark neutral text.
- Keep Atif’s personal story visually distinct from corporate brand content; use approved personal photography and official company/product assets.
- Use product-specific visuals for NourDoc (clinical documentation workflow), LeadHive AI (lead journey and qualification flow) and Smart Animal (sensor-to-alert-to-insight flow).
- For 360 Technologies, use historical project imagery only when rights and authenticity are clear; avoid visuals that imply a current deployment when only historical records are available.
- Avoid generic AI stock imagery as evidence. Diagrams should explain workflow and value, not suggest unsupported product performance.
- Build mobile-first layouts, accessible colour contrast, descriptive alt text, fast-loading assets and clear CTA hierarchy.

## 10. Developer handoff — content and data model
Recommended routes: /, /about, /m3-hive, /products/nourdoc, /products/leadhive-ai, /products/smart-animal, /work, /360-technologies, /collaboration, /insights, /contact.


| Content object | Essential fields |
| --- | --- |
| Executive | name, title, affiliations, location, shortBio, longBio, portrait, LinkedIn URL, approval status, source references |
| Company affiliation | company, role, role type, dates if approved, public description, attribution note, legal/editorial approval |
| Product | name, sector, positioning, challenge, value proposition, features with status, intended users, collaboration options, CTA, evidence, disclaimer |
| Case study | title, company attribution, sector, problem, solution elements, technology (optional), source, date/status, permissions, metrics verification |
| Client reference | organisation name, company attribution, project description, date/context, source URL, logo permission, current/historical status |
| Insight | title, date, original URL, short summary, usage rights, approval status |
| CTA / enquiry | audience type, enquiry purpose, destination, tracking consent and privacy notice |


### Attribution labels
- “M3 Hive product” — for NourDoc, LeadHive AI or Smart Animal.
- “M3 Hive company project” — for projects described in M3 Hive corporate materials.
- “360 Technologies company portfolio” — for historical 360 projects and clients.
- “Atif I. Malik — role confirmed” — only for responsibilities or outcomes that have been specifically verified and approved.

## 11. Evidence, legal and publication checklist
- Confirm the exact wording of Atif’s 360 Technologies affiliation and any dates before publication; do not imply sole ownership or current executive control.
- Keep shareholder litigation and internal shareholder dispute details off the public website unless legal counsel specifically advises otherwise. Avoid language that could be interpreted as a public position on the dispute.
- Verify the present status of each product feature, integration, channel and deployment model before listing it as available.
- Support clinical, veterinary, security, privacy, regulatory and performance claims with appropriate evidence before publication.
- Confirm client-reference wording, logo permissions, testimonial authenticity and any restrictions in client agreements.
- Distinguish a company’s customer, dataset source, partner, research collaborator and public-sector beneficiary; these categories are not interchangeable.
- For historic 360 Technologies projects, retain “historical” or “published company portfolio” context where dates/current status are unclear.
- Verify certifications and issue dates before showing badges; do not imply that historical credentials are currently active.
- Use only approved portrait, direct contact details and business enquiry destinations.
- Have legal counsel review statements about 360 Technologies, corporate authority, shareholding and any public-facing representation of the company.

## 12. Source register and attribution notes
This revision is grounded primarily in the supplied 20-page master portfolio content and the facts provided for this revision. The source document identifies the following materials for editorial verification:

- M3 Hive Corporate Profile (2025): capabilities, selected case studies, delivery models and company client references.
- M3 Hive Executive Corporate Profile (2025): executive-oriented company portfolio and project descriptions.
- 360 Technologies historical corporate profile (29 scanned pages): service lines, practice areas and company history.
- 360 Technologies official website pages cited in the source document: company overview, client directory, historical project register and testimonials.
- Atif I. Malik’s public LinkedIn profile: https://www.linkedin.com/in/aimalik/
- M3 Hive company page: https://www.linkedin.com/company/m3-hive/
- M3 Hive case-study directory: https://m3hive.com/resources/case-studies.html
- NourDoc product page: https://nourdoc.m3hive.com/
- 360 Technologies overview: https://www.360technologies.net/index.php/about-us
- 360 Technologies client directory: https://www.360technologies.net/index.php/360-clients
- 360 Technologies historical project list: https://360technologies.net/index.php/360-clients/projects-recently-completed
Attribution rule: corporate profiles and company websites support descriptions of what those organisations publish about their own work. They do not, by themselves, establish personal authorship, project leadership, audited outcomes or current operational status.


## Appendix A — concise homepage copy block

> ATIF I. MALIK  
> Technology Leadership \| Applied AI \| Product & Business Transformation  
>   
> I work with organisations to turn complex operational challenges into practical digital products, AI-enabled workflows and scalable technology solutions.  
>   
> As CEO of M3 Hive, I am focused on products that address clear real-world needs: NourDoc for AI-assisted clinical documentation, LeadHive AI for lead engagement and qualification, and Smart Animal for IoT-based livestock monitoring and predictive insights. I am also a Co-Founder, Director and Shareholder of 360 Technologies, whose published company portfolio includes enterprise systems, public-sector digitisation, data services and professional capability development.  
>   
> Whether you are exploring a product pilot, strategic collaboration, investment opportunity or a custom technology engagement, the best place to start is with the problem you need to solve.  
>   
> CTAs: Discuss a Project \| Explore M3 Hive Products \| Connect on LinkedIn


## Appendix B — final editorial decisions
- Primary identity: Atif I. Malik — technology leader and applied-AI product builder.
- Primary company focus: M3 Hive.
- Priority products: NourDoc, LeadHive AI and Smart Animal, in that order.
- Secondary corporate reference: 360 Technologies, described separately with company-level achievements and clients.
- Primary audience journey: recognise a challenge → understand relevant product/capability → review evidence → select a collaboration path → make contact.
- Public posture: confident about roles and company portfolio; careful about personal attribution, historical project status, product validation and corporate/legal representations.
