# CLAUDE.md

# SHAKTHIVEL B — CYBERSECURITY PORTFOLIO

## PROJECT PURPOSE

Build a modern, visually distinctive cybersecurity portfolio for Shakthivel B.

The portfolio must communicate:

- Cybersecurity
- Security Operations
- Bug Bounty
- Security Research
- OSINT
- Reverse Engineering
- Penetration Testing
- Security Automation
- Continuous Learning

The primary career direction is:

**Aspiring SOC Analyst**

The website should feel like a modern cybersecurity professional's digital workspace.

It must NOT look like a generic developer portfolio.

It must NOT look like a resume pasted into a website.

It must NOT look like a stereotypical "hacker" website.

---

# 1. TECHNOLOGY STACK

Use:

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Simple Icons or official SVG logos

This is a frontend-only project.

DO NOT create:

- Python backend
- FastAPI
- Express backend
- Database
- Authentication
- CMS
- Redis
- PostgreSQL
- SQLite
- Admin panel

All portfolio content should be handled through TypeScript data files.

---

# 2. DESIGN DIRECTION

## PRIMARY VISUAL IDENTITY

The previous portfolio is too simple.

Modernize the entire UI.

The new visual identity should be:

**British Crimson Security / Modern SOC**

The dominant color should be a deep, sophisticated red inspired by British crimson.

**UPDATE (design decision, 2026):** the page background itself is now a genuinely vivid, saturated red (`Deep Red #7F1020`) rather than a near-black crimson — see §3 and §25 for the rationale and exact tokens. This supersedes the earlier "background must stay near-black" framing below. Do NOT use a bright neon/gaming-red (e.g. pure `#FF0000`-family hues) — the vivid red must still read as a sophisticated, desaturated-enough crimson that passes WCAG AA contrast for body text, not an arcade red.

Use layered shades of:

- Deep Crimson
- British Red
- Burgundy
- Wine
- Black
- Charcoal
- Dark Graphite

The site should feel:

- Premium
- Bold
- Modern
- Technical
- Sophisticated
- Security-focused
- Professional

---

# 3. COLOR SYSTEM

**UPDATE (design decision, 2026):** per explicit user direction, the page background was changed from the near-black values below to a vivid, dominant red so the site's identity reads through the *background/surfaces*, not primarily through colored text. The Primary/Secondary Background tokens now use the palette's existing "Deep Red" / a matching darker wine shade instead of near-black:

Primary Background:

#7F1020 (was #12080A — "Deep Red," reused as the dominant page background)

Secondary Background:

#5C0C18 (was #1A0B0E — a darker wine paired with the vivid primary)

Validated contrast on the new `#7F1020` background: primary text `#F8FAFC` = 10.05:1, secondary text `#D1BFC3` = 5.98:1 (both pass WCAG AA). `Muted Text #9A7D83` and `British Red #C8102E` do NOT pass directly on this background (2.82:1 and 1.79:1) — those colors must only be used inside the dark card/panel surfaces below, or converted to a solid-fill badge/pill (colored surface + light text) rather than colored text on the page background. Cards and panels stay dark and unchanged — they remain the safe container for all body text, descriptions, and any accent-colored text or icon.

Primary Crimson:

#B11226

British Red:

#C8102E

Deep Red:

#7F1020

Accent Red:

#E11D48

Dark Card:

#211116

Dark Panel:

#29151A

Primary Text:

#F8FAFC

Secondary Text:

#D1BFC3

Muted Text:

#9A7D83

Success:

#22C55E

Warning:

#F59E0B

Danger:

#EF4444

Use red as the identity of the website.

Do not turn every component into a glowing red box.

Use contrast intelligently.

---

# 4. VISUAL STYLE

The portfolio should use:

- Dark crimson gradients
- Subtle glass effects
- Thin borders
- Soft shadows
- Layered panels
- Elegant typography
- Subtle grid textures
- Security-inspired visual patterns
- Small technical indicators
- Minimal data visualization
- Controlled motion

Avoid:

- Matrix rain
- Green hacker text
- Excessive neon
- Cyberpunk overload
- Fake terminal spam
- Fake attacks
- Fake vulnerability feeds
- Fake SOC alerts
- Excessive glowing borders
- Excessive particle effects
- Random animations everywhere

The site should look like a serious cybersecurity professional built it.

---

# 5. MODERN UI REQUIREMENTS

The existing portfolio is too basic.

Modernize:

- Navbar
- Hero
- Status card
- Project cards
- Research section
- Blog cards
- Certification cards
- Skills/toolkit
- Timeline
- Terminal
- Contact section

Use visual hierarchy.

Cards should have:

- Subtle borders
- Depth
- Hover states
- Smooth transitions
- Strong typography
- Clear information hierarchy

Do not make everything a card.

Use whitespace and full-width sections to create rhythm.

---

# 6. HERO SECTION

The hero must immediately communicate:

SHakthivel B

**Aspiring SOC Analyst**

Supporting line:

**Security Researcher • Bug Bounty • OSINT • Reverse Engineering**

Include a concise professional introduction.

The hero should also contain:

- Current role
- IBM
- AusNet Energy & Utility
- Experience: 1.5 Years
- Primary CTA: View Case Studies
- Secondary CTA: GitHub

Add a subtle cybersecurity visual element.

Do NOT use an oversized fake SOC dashboard.

---

# 7. STATUS CARD

Display:

CURRENT POSITION

Technical Support Engineer

COMPANY

IBM

PROJECT

AusNet Energy & Utility

EXPERIENCE

1.5 Years

CAREER GOAL

Aspiring SOC Analyst

STATUS

Open to SOC Analyst Opportunities

Do not describe the current IBM position as SOC Analyst.

---

# 8. ABOUT / MISSION

Create a modern Mission section.

Explain:

Why Cybersecurity?

The user's journey started from curiosity and a desire to understand how systems work.

The user became interested in cybersecurity after seeing unauthorized access techniques demonstrated and wanting to understand how they worked.

That curiosity developed into a passion for cybersecurity.

Current interests:

- SOC
- Bug Bounty
- Security Research
- OSINT
- Reverse Engineering

Keep the writing human.

Do not make it sound like generic AI-generated corporate copy.

---

# 9. CYBERSECURITY TOOLKIT

This is a HIGH PRIORITY section.

The portfolio must clearly showcase the cybersecurity tools Shakthivel knows.

Do not hide the tools inside a generic "Skills" list.

Create a visually impressive:

**Cybersecurity Toolkit**

section.

Group tools logically.

---

## SECURITY OPERATIONS / SOC

Display official logos where available:

- Splunk
- Wazuh
- Microsoft Sentinel
- Windows Event Viewer
- ServiceNow

---

## WEB SECURITY / BUG BOUNTY

Display:

- Burp Suite
- Caido
- Nuclei
- ffuf
- Gobuster
- Nikto
- sqlmap

---

## NETWORK SECURITY

Display:

- Nmap
- Wireshark
- Metasploit

---

## RECONNAISSANCE

Display the confirmed tools used for reconnaissance and bug bounty work.

Do not invent additional tools.

---

## PROGRAMMING / SCRIPTING

Display:

- Python
- Bash
- PowerShell
- JavaScript

Also display:

**C — Currently Learning for Reverse Engineering**

Do not represent C as an advanced skill.

---

## ENTERPRISE / PROFESSIONAL TECHNOLOGIES

Display:

- IBM
- SAP
- SCADA
- SDME
- Nexos
- AutoCAD
- Jira
- IBM Watsonx
- IBM Consulting Advantage
- IBM BOB

---

# 10. TOOL UI

Each tool should have:

- Official logo
- Tool name
- Category
- Short description

Example:

Burp Suite

Web Application Security

Used for:

Web security testing and bug bounty research.

Do not claim expertise levels unless explicitly provided.

Use subtle hover interactions.

On hover:

- Logo becomes slightly brighter
- Card lifts slightly
- Description appears
- Category becomes visible

Avoid excessive animation.

---

# 11. FEATURED PROJECTS

Feature these GitHub repositories:

1. Splunk SOC Home Lab

https://github.com/ShakthivelB/splunk-soc-home-lab

2. Network Scanning

https://github.com/ShakthivelB/network-scanning

3. OverTheWire Bandit Challenge

https://github.com/ShakthivelB/over-the-wire-bandit-challange

4. Linux Update Automation

https://github.com/ShakthivelB/Linux_update_Automation

5. Caesar Cipher Tool

https://github.com/ShakthivelB/Caesar-Cipher-Tool

Use actual repository information.

Never invent:

- Results
- Architecture
- Vulnerabilities
- Metrics
- Features
- Screenshots

---

# 12. PROJECT CARD DESIGN

Projects should look like security case studies.

Each project card should contain:

- Project name
- Category
- Short description
- Technologies
- Security relevance
- GitHub button
- View Case Study button

Use red accents.

Do not make every project card identical in size if a featured project deserves more space.

The Splunk SOC Home Lab may receive a larger featured presentation.

---

# 13. SECURITY RESEARCH

Create a dedicated:

**Security Research**

section.

Focus areas:

- Security Operations
- Threat Hunting
- Bug Bounty
- OSINT
- Reverse Engineering
- Security Automation

Include:

**4+ Bug Bounty Reports**

Do not claim that all reports were accepted, rewarded or disclosed unless explicitly confirmed.

---

# 14. BUG BOUNTY

Bug bounty must be a visible part of the portfolio.

Create a dedicated subsection or visual block.

Display:

4+ Bug Bounty Reports

Focus:

- Reconnaissance
- Web Application Security
- Vulnerability Discovery
- Validation
- Responsible Disclosure

Use the tools from the toolkit.

Do not fabricate vulnerability names or bounty amounts.

---

# 15. BLOGS

Create:

**Blogs**

between:

Research

and

Certifications

Medium:

https://medium.com/@shakthisv90

Showcase all available technical articles.

Each article should display:

- Cover image
- Title
- Description
- Published date
- Reading time
- Tags
- Read on Medium

Display:

**7+ Technical Blogs**

Newest articles first.

If live Medium integration is unavailable, maintain articles through:

src/data/blogs.ts

Never fabricate article metadata.

---

# 16. CERTIFICATIONS

Create a premium Certifications section.

Use the certifications exactly as supplied by the user/resume.

Completed / Candidate:

1. ISC2 CC – Certified in Cybersecurity (Candidate)

Issuer:

ISC2

Status:

Candidate

2. Cybersecurity Certification Course

Status:

Completed

3. IBM Cybersecurity Fundamentals

Issuer:

IBM

Status:

Completed

4. Tata Cybersecurity Security Analyst Job Simulation

Issuer:

Tata

Status:

Completed

5. Advent of Cyber

Status:

Completed

6. OWASP Overview

Status:

Completed

7. Pre Security

Status:

Completed

---

# 17. CURRENTLY PURSUING

Separate from completed certifications.

Display:

Microsoft SC-200

Microsoft Certified: Security Operations Analyst Associate

Status:

Currently Pursuing

Do not mark SC-200 as completed.

Use Microsoft branding where appropriate.

---

# 18. ACHIEVEMENTS

Display verified portfolio metrics:

1.5 Years

Professional Experience

3+

SOC Labs

90+

TryHackMe Rooms

93+

PortSwigger Labs

4+

Bug Bounty Reports

7+

Technical Blogs

17+

GitHub Repositories

4

CTFs

Do not invent new metrics.

---

# 19. EXPERIENCE

Display:

Technical Support Engineer

IBM

AusNet Energy & Utility

March 2025 — Present

Responsibilities:

- Manage and analyze energy and utility field data
- Work with SAP
- Work with SDME
- Work with Nexos
- Work with AutoCAD
- Work with SCADA
- Investigate system alerts and service requests
- Use ServiceNow
- Use Jira
- Assist with log analysis
- Support root cause identification
- Maintain operational reliability
- Maintain data accuracy

Technologies:

SAP
SCADA
SDME
Nexos
AutoCAD
ServiceNow
Jira
IBM Watsonx
IBM Consulting Advantage
IBM BOB

Do not expose confidential IBM/AusNet information.

---

# 20. BOB-N-THON

Create a featured achievement:

**BOB-N-THON**

The user developed an internal web application to improve the QA workflow for tickets.

Previous process:

Excel

New process:

Centralized web application

Purpose:

Allow the operations team and QA team to interact around ticket quality reviews and maintain centralized visibility.

Do not expose confidential internal data.

Do not invent business metrics.

---

# 21. JOURNEY

Create a visually sophisticated timeline.

Use confirmed milestones only.

The journey should communicate:

Education

↓

Cybersecurity Discovery

↓

Hands-on Labs

↓

Bug Bounty

↓

Technical Blogging

↓

IBM

↓

SOC Labs

↓

SOC Analyst Career Journey

Do not invent dates.

---

# 22. TERMINAL

Keep the terminal as an optional feature.

Commands:

help
about
projects
skills
research
blogs
certs
github
contact

Terminal should use the same crimson theme.

Do not use green hacker styling.

Do not execute real commands.

Do not execute arbitrary input.

Keep it as an interactive portfolio Easter egg.

---

# 23. NAVIGATION

Use:

Mission
Case Studies
Research
Blogs
Certifications
Toolkit
Journey
Terminal
Connect

The navbar should be modern.

Desktop:

- Sticky navigation
- Transparent/glass effect
- Subtle crimson active indicator

Mobile:

- Clean hamburger menu
- Smooth transitions
- No overcrowding

---

# 24. RED VISUAL SYSTEM

**UPDATE (design decision, 2026):** the identity now leads with a vivid red *background/surface*, not colored text. Prefer: solid-fill red pills/badges for labels (e.g. section eyebrows, active nav item, category tags), a red top/left border accent on stat cards, and neutral (`text-text` / `text-text-secondary`) body and label text everywhere the page background is directly behind it. Reserve colored *text* (`text-accent`, `text-accent-secondary`) for: icons, and text sitting on a dark card/panel background where contrast is verified — never for text sitting directly on the vivid red page background.

Use crimson strategically.

Examples:

Hero / page background:

Vivid, dominant Deep Red (`#7F1020`) — see §3

Cards:

Dark burgundy (unchanged, near-black — the safe surface for body text)

Borders:

Subtle crimson

Buttons / labels / active states:

Solid British red / crimson fill, with neutral white text on top — not colored text on the red page background

Hover:

Soft crimson glow

Important statistics:

Neutral text value + a crimson accent border/surface on the card, not colored digits

Do not make every surface identical bright red — keep dark cards as contrast anchors against the vivid background.

The background is now intentionally vivid and dominant; readability is preserved by keeping body copy inside dark cards/panels and validating any text placed directly on the page background against WCAG AA (see §3 for which tokens pass).

---

# 25. BACKGROUND DESIGN

**UPDATE (design decision, 2026):** the base page background is now the vivid `#7F1020` (see §3), not near-black. The texture layer was adjusted to match: grid lines switched from red-tinted to a faint white tint (since the base itself is now red), and the radial gradient glows were boosted in opacity to reinforce the red identity, while staying subtle enough not to reduce text legibility.

Use subtle visual texture.

Possible elements:

- Fine grid (light-tinted on the vivid red base)
- Technical coordinates
- Security-style lines
- Very subtle noise
- Crimson radial gradients (glows layered on top of the vivid red base)

These must remain in the background.

Do NOT use:

- Matrix rain
- Falling code
- Fake terminal logs
- Random binary everywhere
- Excessive particles
- A background so bright/saturated that body text loses WCAG AA contrast

The background should support the content, not compete with it. Verify any text placed directly on the page background (not inside a card) against the vivid red before shipping.

---

# 26. TYPOGRAPHY

Use:

Inter

or a similar modern sans-serif.

For terminal/code:

JetBrains Mono

Headings should be bold and clean.

Avoid futuristic hacker fonts.

---

# 27. ANIMATION

Use Framer Motion.

Animation should be subtle:

- Fade-in
- Slide-up
- Hover lift
- Active navigation indicator
- Timeline reveal
- Tool card interaction
- Terminal typing

Respect:

prefers-reduced-motion

Do not animate everything.

---

# 28. RESPONSIVENESS

Fully support:

- Desktop
- Laptop
- Tablet
- Mobile

Ensure:

- No horizontal scrolling
- No broken cards
- No oversized typography
- No clipped content
- Mobile navigation works
- Tool grid adapts
- Project cards adapt

---

# 29. ACCESSIBILITY

Use:

- Semantic HTML
- Proper headings
- Keyboard navigation
- Focus states
- Accessible buttons
- Alt text
- Good contrast
- Reduced motion

Do not use color alone to communicate status.

---

# 30. DATA ARCHITECTURE

Keep portfolio data separate.

Use:

src/data/profile.ts

src/data/experience.ts

src/data/projects.ts

src/data/certifications.ts

src/data/skills.ts

src/data/achievements.ts

src/data/blogs.ts

Components should consume the data.

Do not duplicate content across components.

---

# 31. ASSET ARCHITECTURE

Use:

src/assets/logos/

src/assets/projects/

src/assets/certifications/

Use official logos wherever possible.

Do not create fake logos.

Do not use random icon substitutes for known cybersecurity tools.

---

# 32. CODE QUALITY

Use:

- TypeScript
- Functional React components
- Reusable components
- Strong typing
- Clean naming
- Small focused components

Avoid:

- Giant components
- Duplicate markup
- Dead code
- Unused imports
- Unnecessary dependencies
- Redux
- Backend architecture

---

# 33. PERFORMANCE

The website should remain lightweight.

Use:

- Static data
- Optimized images
- Lazy loading where appropriate
- Minimal dependencies
- Efficient animations

Do not add a backend.

Do not add unnecessary API integrations.

GitHub and Medium can simply link to the external profiles/articles unless a reliable frontend-safe integration is specifically required.

---

# 34. SECURITY

Never include:

- API keys
- Credentials
- Private tokens
- Internal IBM information
- Internal AusNet information
- Customer data
- Confidential screenshots

External links must use safe attributes where appropriate.

Never execute arbitrary commands through the terminal.

---

# 35. CONTENT TONE

The website should sound:

- Human
- Curious
- Professional
- Honest
- Technical
- Confident

Avoid:

"Elite Hacker"

"Cybersecurity Expert"

"Master Penetration Tester"

"World-Class Security Researcher"

unless explicitly supported.

Prefer:

"Hands-on"

"Security-focused"

"Currently learning"

"Exploring"

"Built"

"Investigated"

"Researching"

---

# 36. HOMEPAGE GOAL

Within 10 seconds, a recruiter should understand:

WHO:

Shakthivel B

CURRENT ROLE:

Technical Support Engineer

COMPANY:

IBM

PROJECT:

AusNet Energy & Utility

CAREER GOAL:

Aspiring SOC Analyst

FOCUS:

SOC
Bug Bounty
OSINT
Reverse Engineering

---

# 37. CONTACT

Display:

Email:

shakthisv90@gmail.com

GitHub:

https://github.com/ShakthivelB

LinkedIn:

https://www.linkedin.com/in/shakthi-vel-b-5507ba306/

Medium:

https://medium.com/@shakthisv90

Use appropriate external link security attributes.

---

# 38. DO NOT ADD

Do not add:

- Fake testimonials
- Fake clients
- Fake vulnerabilities
- Fake bounty rewards
- Fake statistics
- Fake SOC alerts
- Fake threat feeds
- Fake certifications
- Fake job titles
- Fake experience
- Fake GitHub activity
- Fake live attacks
- Fake security incidents

---

# 39. DEVELOPMENT WORKFLOW

Before modifying the project:

1. Inspect the existing code.
2. Understand the current component structure.
3. Identify reusable components.
4. Identify what currently looks too simple.
5. Plan the visual redesign.
6. Preserve working functionality.
7. Implement incrementally.
8. Test after changes.

Do not blindly rewrite everything.

---

# 40. VISUAL REDESIGN PRIORITY

The biggest redesign priorities are:

1. Overall crimson visual identity
2. Hero section
3. Cybersecurity Toolkit
4. Project Case Studies
5. Research / Bug Bounty
6. Certifications
7. Blogs
8. Experience
9. Journey
10. Terminal
11. Contact

The final website should look significantly more modern than the existing simple portfolio.

---

# 41. FINAL QUALITY STANDARD

Before considering the project complete:

Run:

- TypeScript check
- ESLint
- Production build

Check:

- Desktop
- Tablet
- Mobile
- Navigation
- Animations
- External links
- Images
- Tool logos
- Certification links
- GitHub links
- Medium links
- Accessibility
- Console errors

Remove:

- Placeholder text
- Dummy content
- Broken links
- Unused imports
- Unused components
- Unused dependencies

The production build must succeed.

---

# 42. FINAL DESIGN PHILOSOPHY

This portfolio should feel like:

**A modern crimson security operations workspace.**

Not:

**A red website with cybersecurity icons.**

The red identity should be immediately recognizable.

The cybersecurity tools should be prominently visible.

The content should remain the hero.

The UI should create curiosity without becoming noisy.

The final impression should be:

"Shakthivel is genuinely interested in cybersecurity, actively builds security projects, investigates problems, experiments with tools, and is working toward a SOC career."

Accuracy over exaggeration.

Substance over decoration.

Modern UI over templates.

Professionalism over cyberpunk aesthetics.

Curiosity over noise.
