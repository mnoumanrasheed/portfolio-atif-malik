# Atif I. Malik — Premium Executive Portfolio

A production-ready executive portfolio website for **Atif I. Malik** (Chief Executive Officer, M3 Hive | Co-Founder, Director & Shareholder, 360 Technologies).

Redesigned with a **luxury Swiss editorial black & white monochrome aesthetic**, eliminating generic "AI template" cliches (no neon cyan gradients, glowing circular blobs, or agency tropes) in favor of high-fashion typography, architectural hairline grids, and authoritative broadsheet composition.

---

## Design System & Art Direction

- **Palette:** Pure Monochrome (Jet Black `#000000`, Charcoal `#0A0A0A` / `#121212`, Crisp White `#FFFFFF`, and Refined Silver Grays `#A3A3A3` / `#737373`).
- **Typography:** Swiss grotesque scale with tight tracking (`tracking-tighter`), architectural uppercase folios (`tracking-[0.2em]`), and monospaced technical metadata tags.
- **Materiality & Structure:** Hairline borders (`border-neutral-800`), broadsheet folios `[ VOL. 2026 / EXECUTIVE DOSSIER ]`, and archival plaques.
- **Buttons & Interactive Elements:** Inverted stark monochrome (solid white buttons with deep black text, hairline borders, inverted hover states).
- **Schematics & Diagrams:** Technical monochrome wireframes and engineering blueprints.

---

## Technical Stack

- **Base Framework:** React 18 + Vite + TypeScript (Strict typing)
- **Scroll & Hero Choreography:** GSAP 3.12 + ScrollTrigger (`gsap.context()` cleanup & `prefers-reduced-motion` resilience)
- **UI & Micro-interactions:** Framer Motion 11
- **Routing:** React Router DOM (Deep-link support, lazy chunk loading, ScrollToTop)
- **Styling:** Tailwind CSS + Custom Architectural Monochrome Tokens

---

## Route Architecture (All Working & Direct-Loadable)

1. `/` — Home Flagship Broadsheet (Editorial Hero, Thesis Statement, 3 Priority Products, Methodology Timeline, Selected Work previews, 360 Legacy block, Collaboration pathways, Sources, Final CTA)
2. `/about` — Executive Dossier & Philosophy (Full long biography, philosophical pillars, verified institutional roles)
3. `/m3-hive` — Execution & Engineering Capability (Corporate overview, 6 capability disciplines, delivery structures)
4. `/products/nourdoc` — NourDoc (HealthTech AI: Clinical Encounter $\rightarrow$ Speech/NLP $\rightarrow$ SOAP Notes $\rightarrow$ Clinician Gate $\rightarrow$ EHR Export)
5. `/products/leadhive-ai` — LeadHive AI (Lead qualification & intelligent routing pipeline)
6. `/products/smart-animal` — Smart Animal (AgriTech IoT telemetry & behavioral modeling)
7. `/work` — Selected Work (All 7 documented M3 Hive corporate projects with domain filter chips and expandable technical details)
8. `/360-technologies` — 360 Technologies Historical Portfolio (Distinct company legacy, 6 practice lines, 9 institutional projects, text-based client registry)
9. `/collaboration` — Collaboration Dossier (All 6 audience-led pathways with query sync)
10. `/insights` — Bibliography & Reference Register (Official external links, transparent editorial policy)
11. `/contact` — Communications Desk (Direct verified channels + problem statement dispatch utility)
12. `/*` — 404 Route Not Found Page

---

## Build & Test Commands

```bash
# Start development server
npm run dev

# Run full TypeScript check and production build
npm run build

# Preview production build locally
npm run preview
```
