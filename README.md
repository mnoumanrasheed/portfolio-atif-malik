# Atif I. Malik — Executive Portfolio

A production-ready executive personal website for **Atif I. Malik** (CEO, M3 Hive | Co-Founder, Director & Shareholder, 360 Technologies).

Designed with a **"Quiet Authority" executive editorial direction**: 85–90% white and light surfaces, restrained deep teal accenting, purposeful typographic hierarchy, and generous composed whitespace—avoiding generic AI template cliches, cyber dashboards, dark mode screens, and fake metrics.

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

## Route Architecture (All 11 Routes Fully Functional)

1. `/` — **Executive Overview** (Hero with photo-ready editorial frame, Leadership Perspective, 3 Product Showcases with workflow schematics, 4-step Delivery Timeline, Selected M3 Hive Work teasers, 360 Technologies Historical Foundation, Audience Collaboration Pathways, and Closing CTA)
2. `/about` — **Executive Profile & Leadership** (Full biography, editorial pull quote, 3 leadership principles, photo-ready frame, corporate governance safeguards)
3. `/m3-hive` — **M3 Hive Company & Capabilities** (Corporate overview, 6 spacious capability practice rows, priority products, partnership structures)
4. `/products/nourdoc` — **NourDoc** (Clinical Documentation AI: ambient audio capture, SOAP note draft generation, mandatory clinician verification, EHR export)
5. `/products/leadhive-ai` — **LeadHive AI** (Lead Engagement & Qualification: multi-channel ingestion, qualification questions, sales hand-off)
6. `/products/smart-animal` — **Smart Animal** (Livestock IoT & Telemetry: sensor collar metrics, rumination monitoring, timely operational alerts)
7. `/work` — **Selected Additional Work** (7 documented M3 Hive corporate case studies with interactive domain filters and expandable solution details)
8. `/360-technologies` — **360 Technologies Historical Archive** (Distinct corporate legacy, 6 practice divisions, 9 institutional projects, published text client directory)
9. `/collaboration` — **Collaboration & Strategic Pathways** (Audience-aligned engagement routes for clinicians, enterprises, partners, and investors)
10. `/insights` — **Selected References & Sources** (Verified institutional links, official portals, editorial transparency policy)
11. `/contact` — **Communications & Inquiries** (Verified direct channels + accessible inquiry brief preparation utility with one-click clipboard copy)
12. `/*` — **Route Not Found** (Clean 404 page with direct return links)

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
