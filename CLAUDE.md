# CLAUDE.md -- Grant Leisure "Visible Dominance" v2
# Master Context Document -- Paste into every new chat session at the start.
# Last Updated: 2026

---

## PROJECT IDENTITY

- Client: Grant Leisure International (GLI)
- Project: "Visible Dominance" Power Scroll Rebuild
- Version: 2.0
- Stack: React, Tailwind CSS, Framer Motion
- Approach: Option A Hybrid -- Tailwind for layout/spacing, CSS custom properties for brand tokens
- Repo Structure: Vite + React scaffold

---

## FOLDER STRUCTURE

```
project-root/
├── public/
│   └── assets/
│       ├── fonts/
│       └── images/
│           ├── attractions/
│           ├── icons/
│           │   ├── icon-fair.png
│           │   ├── icon-homes.png
│           │   ├── icon-museums.png
│           │   ├── icon-parks.png
│           │   ├── icon-world-heritage.png
│           │   └── icon-zoo.png
│           ├── logos/
│           │   ├── Universal.png
│           │   ├── V&A.png
│           │   ├── ZSL.png
│           │   ├── anheuser-busch.png
│           │   ├── bluewater.png
│           │   ├── cesars-entertainment.png
│           │   ├── disney-parks.png
│           │   ├── english-heritage.png
│           │   ├── ferrari-world.png
│           │   ├── lego.png
│           │   ├── merlin-entertainment.png
│           │   ├── nbc-universal.png
│           │   ├── ocean-park.png
│           │   ├── paramount.png
│           │   ├── parques-reunidos.png
│           │   ├── sd-zoo.png
│           │   └── village-roadshow.png
│           ├── maps/
│           │   └── map.png
│           ├── team/
│           │   ├── andrew-coates.png
│           │   ├── andy-grant.png
│           │   ├── claus-frimand.png
│           │   ├── clive-jones.png
│           │   ├── edmund-rowley-williams.jpg
│           │   ├── keith-robertson.png
│           │   ├── philip-kwong.png
│           │   ├── raul-rios.png
│           │   └── robert-liljenwall.png
│           ├── gli-logo.png
│           ├── gli-logo.svg
│           └── tourist.jpg
├── src/
│   ├── styles/
│   │   ├── tokens.css        <-- ALL design tokens live here. Never duplicate values.
│   │   ├── typography.css    <-- Font-face declarations and type scale only.
│   │   └── global.css        <-- Reset, base element styles, token imports.
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Logic.jsx
│   │   ├── About.jsx
│   │   ├── Proof.jsx
│   │   ├── Reach.jsx
│   │   ├── Expertise.jsx
│   │   ├── Validation.jsx
│   │   ├── Leadership.jsx
│   │   ├── Engage.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   └── Projects.jsx
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── index.html
└── CLAUDE.md
```

---

## SECTION ID MAP

| ID          | Section Name     | Component File   | Chat Owner  |
|-------------|------------------|------------------|-------------|
| #hero       | 01 Hero          | Hero.jsx         | Index Chat A |
| #logic      | 02 The Logic     | Logic.jsx        | Index Chat A |
| #about      | 03 About         | About.jsx        | Index Chat A |
| #proof      | 04 The Proof     | Proof.jsx        | Index Chat A |
| #reach      | 05 The Reach     | Reach.jsx        | Index Chat A |
| #expertise  | 06 The Expertise | Expertise.jsx    | Index Chat B |
| #validation | 07 Validation    | Validation.jsx   | Index Chat B |
| #leadership | 08 Leadership    | Leadership.jsx   | Index Chat B |
| #engage     | 09 Engage        | Engage.jsx       | Index Chat B |
| #footer     | 11 Footer        | Footer.jsx       | Index Chat B |

---

## DESIGN TOKEN REFERENCE

All token values live in /src/styles/tokens.css.
This section lists token NAMES only for reference. Never hardcode values in components.

### Color Tokens
- --gl-green      (Primary action, key section backgrounds)
- --gl-blue       (Heritage anchor, secondary headers)
- --gl-white      (Base background, high-contrast text)
- --gl-navy       (Body copy, primary navigation)

### Typography Tokens
- --font-header   (Fraunces -- all section headers)
- --font-body     (Inter -- body copy, stats, data)

### Type Scale Tokens
- --text-display  (Hero and oversized display headers)
- --text-h1       (Primary section headers)
- --text-h2       (Sub-section headers)
- --text-h3       (Card and component headers)
- --text-body-lg  (Lead paragraphs -- minimum 18px)
- --text-body     (Standard body copy)
- --text-sm       (Labels, captions)

### Spacing Tokens
- --space-xs through --space-2xl
- --section-pad-y (Vertical section padding via clamp)

### Z-Index Tokens
- --z-base / --z-overlay / --z-nav / --z-modal

### Motion Tokens
- --ease-stellar / --duration-default / --duration-fast

---

## CODING HARD RULES

These rules are non-negotiable on every line of every file in this project.

1.  NEVER hardcode color hex values -- always reference CSS custom properties
2.  NEVER base64-encode images -- always use /public/assets/ paths
3.  NEVER use var -- const and let only
4.  NEVER use inline onclick handlers in HTML -- addEventListener only
5.  NEVER use a div where a semantic element exists
6.  ONE h1 per page -- always
7.  Every img tag requires width, height, and alt attributes
8.  Lazy-load all below-fold images with loading="lazy"
9.  All fetch calls must be wrapped in try/catch
10. Mobile-first CSS -- base styles target small screens, min-width queries scale up
11. Minimum 48px touch targets on ALL interactive elements (senior demographic requirement)
12. Every section header leads with a verb: PROFIT, ELIMINATE, MAXIMIZE, SECURE, etc.
13. No em dashes anywhere -- use double hyphens in copy and comments
14. No magic numbers in CSS without an explanatory comment on the same line
15. DRY principle -- no repeated utility patterns, no redundant blocks across components

---

## DEMOGRAPHIC REQUIREMENT

Target user: Senior stakeholder, 70-80 years old.

- Minimum body font size: 18px (1.125rem)
- Display headers: 80px+ on desktop, set via clamp() for fluid scaling
- All interactive hit-states: minimum 48x48px touch target
- High contrast required on all colored backgrounds (WCAG AA minimum 4.5:1)
- Generous line-height: minimum 1.6 on body copy

---

## ASSET REFERENCE

| Asset              | Path                                                                                           |
|--------------------|-----------------------------------------------------------------------------------------------|
| Hero video         | https://res.cloudinary.com/dyceiucla/video/upload/f_auto,q_auto/v1776321502/hero.mp4_r5srrb.mp4 |
| GLI Logo SVG       | /assets/images/gli-logo.svg                                                                   |
| GLI Logo PNG       | /assets/images/gli-logo.png                                                                   |
| Tourist photo      | /assets/images/tourist.jpg                                                                    |
| Map                | /assets/images/maps/map.png                                                                   |
| Icons directory    | /assets/images/icons/                                                                         |
| Partner logos dir  | /assets/images/logos/                                                                         |
| Team photos dir    | /assets/images/team/                                                                          |

---

## SECTION COPY REFERENCE

### Section 01 -- Hero
- Headline: PROFIT FROM OUR EXPERIENCE.

### Section 02 -- The Logic
- Impact Statement: 90% of operational failures are a result of improper planning.
- Solution copy: We eliminate the guesswork. We secure the profit.

### Section 03 -- About
- Headline: WE'VE BEEN MAKING PEOPLE SMILE SINCE 1982
- Origin: In 1980, Andy Grant awoke with a vision that would redefine the industry: the "Tourist"
  as the primary consideration. We transitioned from conceptual dreaming to an experiential
  approach that ensures every visitor's need is met.
- Narrative: Grant Leisure is a global consortium of entertainment and attractions executives
  with decades of experience as developers and operators. When it comes to running visitor
  attractions, our team has seen it all.

### Section 04 -- The Proof (Counter Values + Icon Mapping)
| Counter Value | Label                  | Icon File                |
|---------------|------------------------|--------------------------|
| 65+           | Theme Parks            | icon-parks.png           |
| 60+           | Stately Homes          | icon-homes.png           |
| 27            | Zoological Institutions| icon-zoo.png             |
| 35            | Museums                | icon-museums.png         |
| 5             | World Heritage Sites   | icon-world-heritage.png  |
| 2             | World Expositions      | icon-fair.png            |

- Scale Summary: 43 Countries. 5 Continents. 2,500+ Projects.

### Section 05 -- The Reach
- Copy: From Canada, USA, UK, Europe, Africa, UAE, Malaysia, China, Japan, Australia.
  Our influence is etched into the world's most iconic skylines.

### Section 06 -- The Expertise (Services)
- Market Analysis: Determining demand through surgical evaluation of occupancy, absorption,
  and revenue trends.
- Development Planning: Balancing economic planning with physical design to optimize
  amenities and facility sizing.
- Financial Feasibility: Investor-grade modeling for cash flow projections and sensitivity testing.
- Funding Assistance: Securing capital through a sovereign network of global investors
  and financiers.
- Operational Planning: Bespoke optimization of visitor circulation, marketing, and
  staff training.
- Turn-Key Management: Direct executive oversight from pre-opening through long-term
  stabilization.

### Section 07 -- Validation
- Headline: TRUSTED BY THE WORLD'S MOST ACCLAIMED BRANDS AND ATTRACTIONS.
- 17 partner logos in /assets/images/logos/

### Section 08 -- Leadership
Display order is final. Do not reorder.
1. Robert Liljenwall -- Managing Director
2. Keith Robertson -- Co-Managing Director
3. Andy Grant -- Founder Emeritus and Director
4. Raul Rios -- Director Consulting Operations, Europe
5. Clive Jones -- Director Strategic Planning
6. Claus Frimand -- Director Operations
7. Philip Kwong -- Compliance Consultant
8. Andrew Coates -- Director Zoological Operations
9. Edmund Rowley Williams -- Director Business Development

### Section 09 -- Engage
- Left column: OUR GLOBAL EXPERIENCE IN YOUR BACK POCKET. Don't like waiting? Neither do we.
- Right column: Contact form -- Name, Email, Phone, Message fields.

### Section 11 -- Footer
- Legal: 2026 Grant Leisure. All Rights Reserved.

---

## PRODUCTION CHAT SCOPE

Replace the bracketed line below when opening each new chat:

[ THIS CHAT IS RESPONSIBLE FOR: insert scope here ]

Example scopes:
- "CSS Foundation Chat: tokens.css, typography.css, global.css, tailwind.config.js only."
- "Index Chat A: Hero.jsx, Logic.jsx, About.jsx, Proof.jsx, Reach.jsx"
- "Index Chat B: Expertise.jsx, Validation.jsx, Leadership.jsx, Engage.jsx, Footer.jsx"
- "JS Chat: main.js scroll triggers, counter animation, marquee loop, form handling, video poster logic."
- "Projects Chat: Projects.jsx and any page-specific styles."
