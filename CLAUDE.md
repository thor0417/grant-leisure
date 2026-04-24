# CLAUDE.md -- Grant Leisure "Visible Dominance" v2
# Master Context Document -- Paste into every new chat session at the start.
# Last Updated: 2026-04-24

---

## PROJECT IDENTITY

- Client: Grant Leisure International (GLI)
- Project: "Visible Dominance" Power Scroll Rebuild
- Version: 2.0
- Repo: thor0417/grant-leisure
- Stack: HTML + CSS + Vanilla JS + GSAP (via CDN)
- Workflow: Files produced by Claude, created in text editor, pushed via GitHub Desktop
- No terminal. No npm. No React. No build tools.

---

## WHY THIS STACK

HTML/CSS/Vanilla JS was chosen deliberately over React/Vite for three reasons:
1. Matches the user's existing workflow -- text editor + GitHub Desktop
2. Lower token cost per session -- lean files, no component wrapper syntax
3. GSAP via CDN handles all scroll animations without installation

---

## FOLDER STRUCTURE

```
grant-leisure/
├── public/
│   └── assets/
│       ├── fonts/
│       │   ├── InstrumentSerif-Regular.ttf
│       │   ├── InstrumentSerif-Italic.ttf
│       │   ├── InterTight-Regular.ttf
│       │   ├── InterTight-Medium.ttf
│       │   ├── InterTight-Black.ttf
│       │   └── InterTight-Italic.ttf
│       └── images/
│           ├── icons/
│           │   ├── icon-fair.png
│           │   ├── icon-homes.png
│           │   ├── icon-museums.png
│           │   ├── icon-parks.png
│           │   ├── icon-world-heritage.png
│           │   └── icon-zoo.png
│           ├── logos/          (17 partner logo files)
│           ├── maps/
│           │   └── map.png
│           ├── team/           (9 headshot files)
│           ├── gli-logo.png
│           └── tourist.jpg
├── src/
│   └── styles/
│       ├── tokens.css
│       ├── typography.css
│       ├── global.css
│       └── components.css
├── js/
│   └── main.js
├── index.html
└── CLAUDE.md
```

---

## SECTION MAP

CRITICAL: Section IDs are internal code labels only.
They never appear as headings on the live site.
The "Visitor Sees" column is the law.

| ID            | Visitor Sees                                               | Visible Header |
|---------------|------------------------------------------------------------|----------------|
| #hero         | "PROFIT FROM OUR EXPERIENCE." -- full bleed video          | No             |
| #logic        | "90% of operational failures..." -- statement only         | No             |
| #about        | "WE'VE BEEN MAKING PEOPLE SMILE SINCE 1982" is the header  | Yes            |
| #proof        | Numbers and icons -- visual speaks for itself              | No             |
| #reach        | Map + country list -- visual speaks for itself             | No             |
| #expertise    | "SERVICES" -- visitor needs context                        | Yes            |
| #validation   | Partner logos -- single trust line above only              | Minimal        |
| #leadership   | "THE TEAM" -- visitor needs context                        | Yes            |
| #testimonials | Quotes flow -- no header, words land on their own          | No             |
| #engage       | "OUR GLOBAL EXPERIENCE IN YOUR BACK POCKET" is the header  | Yes            |
| #footer       | Legal line only                                            | No             |

---

## DESIGN TOKENS

All values live in src/styles/tokens.css.
Never hardcode any of these values anywhere else.

### Color
- --gl-green:  #5C9387   (primary action, key section backgrounds)
- --gl-blue:   #5871A5   (heritage anchor, secondary headers)
- --gl-white:  #FFFFFF   (base background, high-contrast text)
- --gl-navy:   #323E48   (navigation, dark surface text)
- --gl-black:  #1A1A1A   (body copy on white -- not pure black, senior-friendly)

### Typography
- --font-header: 'Instrument Serif', serif (local TTF -- InstrumentSerif-Regular.ttf, InstrumentSerif-Italic.ttf)
- --font-body:   'Inter Tight', sans-serif (local TTF -- InterTight-Regular.ttf, InterTight-Medium.ttf, InterTight-Black.ttf, InterTight-Italic.ttf)

### Type Scale
- --text-display  (Hero headline only -- largest on page)
- --text-h1       (Primary section headers)
- --text-h2       (Sub-section headers)
- --text-h3       (Card and component headers)
- --text-body-lg  (Lead paragraphs -- minimum 18px)
- --text-body     (Standard body copy)
- --text-sm       (Labels, captions, legal)

### Spacing
- --space-xs through --space-2xl
- --section-pad-y (vertical section padding via clamp)

### Z-Index
- --z-base / --z-overlay / --z-nav / --z-modal

### Motion
- --ease-stellar / --duration-default / --duration-fast

---

## VISUAL REFERENCES

Three sources inform every visual decision.

1. OLD GRANT LEISURE SITE (screenshots in project files)
   Purpose: colour continuity, existing brand DNA, Bob's approval.
   Note: #5C9387 green and #5871A5 blue must be honoured throughout.

2. STELLAR MEDIA CORP (screenshot in project files)
   Purpose: layout energy, section pacing, dark/light alternation.
   Note: Large verb-first headers. Bold stats. Clean team cards.

3. BRIEF v1 -- "Institutional Dominance"
   Purpose: tone, copy rules, verb-first headers, demographic requirements.

---

## CODING HARD RULES

1.  NEVER hardcode color hex values -- always CSS custom properties
2.  NEVER base64-encode images -- always /assets/images/ paths
3.  NEVER use var -- const and let only
4.  NEVER use inline onclick handlers -- addEventListener only
5.  NEVER use a div where a semantic element exists
6.  ONE h1 per page -- always
7.  Every img requires width, height, and alt
8.  Lazy-load all below-fold images: loading="lazy"
9.  All fetch calls wrapped in try/catch
10. Mobile-first CSS -- base styles small, min-width queries scale up
11. Minimum 48px touch targets on ALL interactive elements
12. Every visible section header leads with a verb
13. No em dashes anywhere -- double hyphens only
14. No magic numbers in CSS without an explanatory comment
15. DRY -- no repeated patterns, no redundant blocks

---

## DEMOGRAPHIC REQUIREMENT

Target: Senior stakeholder, 70-80 years old.
- Minimum body font: 18px
- Display headers: 80px+ desktop via clamp()
- Touch targets: 48x48px minimum
- Line height: 1.6 minimum on body copy
- Contrast: WCAG AA minimum 4.5:1

---

## GSAP CDN

Paste before closing body tag in index.html. No install required.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
```

---

## ASSET PATHS

| Asset         | Path                                                                                             |
|---------------|--------------------------------------------------------------------------------------------------|
| Hero video    | https://res.cloudinary.com/dyceiucla/video/upload/f_auto,q_auto/v1776321502/hero.mp4_r5srrb.mp4 |
| GLI Logo PNG  | public/assets/images/gli-logo.png                                                                |
| Tourist photo | public/assets/images/tourist.jpg                                                                 |
| Map           | public/assets/images/maps/map.png                                                                |
| Icons         | public/assets/images/icons/                                                                      |
| Logos         | public/assets/images/logos/                                                                      |
| Team          | public/assets/images/team/                                                                       |
| Fonts         | public/assets/fonts/ (served as assets/fonts/ on GitHub Pages)                                   |

---

## COPY REFERENCE

### #hero
PROFIT FROM OUR EXPERIENCE.

### #logic
90% of operational failures are a result of improper planning.
We eliminate the guesswork. We secure the profit.

### #about
Header: WE'VE BEEN MAKING PEOPLE SMILE SINCE 1982
In 1980, Andy Grant awoke with a vision that would redefine the industry: the "Tourist"
as the primary consideration. We transitioned from conceptual dreaming to an experiential
approach that ensures every visitor's need is met.
Grant Leisure is a global consortium of entertainment and attractions executives with
decades of experience as developers and operators.

### #proof
65+ Theme Parks | icon-parks.png
60+ Stately Homes | icon-homes.png
27 Zoological Institutions | icon-zoo.png
35 Museums | icon-museums.png
5 World Heritage Sites | icon-world-heritage.png
2 World Expositions | icon-fair.png
Scale: 43 Countries. 5 Continents. 2,500+ Projects.

### #reach
From Canada, USA, UK, Europe, Africa, UAE, Malaysia, China, Japan, Australia.
Our influence is etched into the world's most iconic skylines.

### #expertise
Header: SERVICES
Market Analysis -- Determining demand through surgical evaluation of occupancy,
absorption, and revenue trends.
Development Planning -- Balancing economic planning with physical design to optimize
amenities and facility sizing.
Financial Feasibility -- Investor-grade modeling for cash flow projections
and sensitivity testing.
Funding Assistance -- Securing capital through a sovereign network of global
investors and financiers.
Operational Planning -- Bespoke optimization of visitor circulation, marketing,
and staff training.
Turn-Key Management -- Direct executive oversight from pre-opening through
long-term stabilization.

### #validation
TRUSTED BY THE WORLD'S MOST ACCLAIMED BRANDS AND ATTRACTIONS.
17 partner logos in /assets/images/logos/

### #leadership
Header: THE TEAM
1. Robert Liljenwall -- Managing Director
2. Keith Robertson -- Co-Managing Director
3. Andy Grant -- Founder Emeritus and Director
4. Raul Rios -- Director Consulting Operations, Europe
5. Clive Jones -- Director Strategic Planning
6. Claus Frimand -- Director Operations
7. Philip Kwong -- Compliance Consultant
8. Andrew Coates -- Director Zoological Operations
9. Edmund Rowley Williams -- Director Business Development

### #testimonials
No header. Quotes only.
Chris Mather, Chief Executive Officer -- "I have been working with Grant Leisure for
over 30 years and can personally testify to their unparalleled track record in
translating creative concepts into feasible and profitable projects."
Larry Wyatt, VP Planning and Development -- "His instinct and attention to detail
in large-scale land-planning for leisure destinations is second to none."
Pat Janikowski AIA NCARB, President -- "Andy is able to gauge the needs of the client
in any situation and develop programs that are both functional and cost-effective."
Brian Edwards, Founder and Chairman -- "Our collaboration was truly an experience due
to Andrew's unique understanding of operations and how technology could enhance
the guest experience."

### #engage
Header: Don't like waiting? Neither do we.
Address: 418 Wenham Road, Pasadena, CA 91107
R. Liljenwall: 626-298-3709
K. Robertson: 702-497-4459
Form: Name, Email, Phone, Message

### #footer
2026 Grant Leisure. All Rights Reserved.

---

## CURRENT SITE STATUS

LIVE at https://thor0417.github.io/grant-leisure/

All 11 sections built and approved by client:
#hero, #logic, #about, #proof, #reach, #expertise,
#validation, #leadership, #testimonials, #engage, #footer

Active features:
- Ghost nav with blur-on-scroll
- Service modal popups (6 services with full writeups)
- Team carousel (3-up desktop, 1-up mobile) with bio modals
- Testimonials carousel with dot navigation
- Marquee logo strip (17 partner logos)
- Proof counter animation (GSAP, wired)

Pending post-approval:
- Projects page (projects.html -- separate route)
- GSAP scroll triggers and parallax motion pass
- Mobile audit
- Logo replacements (NBC Universal, Bluewater, Busch)

---

## SESSION SCOPE

| Session   | Scope                                                                    |
|-----------|--------------------------------------------------------------------------|
| Edit Chat | Targeted fixes -- HTML, CSS, JS edits only. No full rewrites.            |
| Projects  | projects.html -- strategy, architecture, and build                       |
| Motion    | GSAP scroll triggers, parallax, counter animations, section transitions  |
| Mobile    | Full mobile audit -- after motion pass is complete                       |
