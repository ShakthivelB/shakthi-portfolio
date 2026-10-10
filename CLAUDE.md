# CLAUDE.md
# SHAKTHIVEL B — CYBERSECURITY PORTFOLIO

> Single source of truth for the design, content, architecture, and implementation of this portfolio.

---

# 1. PROJECT IDENTITY

## Owner

**Shakthivel B**

## Primary positioning

**Aspiring SOC Practitioner**

## Location

**Bengaluru, India**

Coordinates for the globe marker:

- Latitude: **12.9716**
- Longitude: **77.5946**

## Professional identity

Shakthivel is a hands-on cybersecurity practitioner building experience across:

- Security Operations / SOC
- Bug Bounty
- Web Security
- OSINT
- Reverse Engineering
- Security Research
- Cybersecurity Automation

## Current professional position

**Technical Support Engineer — IBM**

Project:

**AusNet Energy & Utility**

Start date:

**12 March 2025**

Status:

**Present**

## Core portfolio message

> **I investigate systems because I'm curious about how they work.**

The portfolio must communicate curiosity, investigation, practical learning, and a serious progression toward a SOC career.

---

# 2. PRIMARY GOAL

Build a premium cybersecurity portfolio that makes recruiters and cybersecurity professionals think:

> **This is not another generic cybersecurity student portfolio. This person is genuinely curious, builds things, investigates systems, and has practical experience.**

The site must balance:

- Strong visual design
- Authentic technical content
- Professional credibility
- Personal story
- Practical projects
- Cybersecurity identity

Do NOT prioritize visual effects over content.

Priority order:

1. Accuracy
2. Information hierarchy
3. UX
4. Typography
5. Layout
6. Interaction
7. Animation

---

# 3. DESIGN REFERENCE AND CREATIVE DIRECTION

The portfolio takes **conceptual inspiration** from the supplied NETWORKS / Firewall-style reference and design video.

Use the reference for:

- Editorial composition
- Large typography
- Strong negative space
- Thin technical borders
- Layered layouts
- A dominant globe visual
- Minimal but cinematic motion
- Premium digital-studio quality

Do NOT copy:

- Branding
- Assets
- Text
- Exact layout
- Proprietary illustrations
- Exact animations

Create an original design for Shakthivel.

## The intended feeling

> **A personal cybersecurity operating environment presented as a premium editorial website.**

It should feel:

- Dark
- Editorial
- Precise
- Technical
- Modern
- Cinematic
- Professional
- Confident
- Human

It should NOT feel like:

- A generic hacker portfolio
- A Matrix clone
- A gaming UI
- A fake SOC dashboard
- A military radar
- A cyberpunk template
- A corporate PowerPoint website
- A page full of random cards
- An AI-generated template

---

# 4. VISUAL SYSTEM

## Core philosophy

**BLACK IS THE CANVAS.**

**CONTENT CREATES THE HIERARCHY.**

**ONE ACCENT CREATES THE ENERGY.**

The site should look premium because of:

- Typography
- Spacing
- Composition
- Contrast
- Restraint
- Motion
- Information hierarchy

Not because of:

- Excessive glow
- Random particles
- Fake hacking effects
- Constant movement
- Dozens of neon elements

---

# 5. COLOR SYSTEM

## Primary background

```css
#000000
```

## Secondary backgrounds

Derived from the dark olive `#253900`, scaled toward black for elevation:

```css
#0B1100
#162200
#253900
```

## Primary text

```css
#EEEEEE
```

## Secondary text

```css
#A6A6A6
```

## Muted text

```css
#737373
```

## Borders

```css
rgba(238, 238, 238, 0.08)
rgba(238, 238, 238, 0.16)
```

## Primary accent

Use one restrained accent:

```css
#08CB00
```

Optional softer variation:

```css
#39D533
```

Use the accent sparingly for:

- Active navigation
- Important arrows
- Small status indicators
- Selected states
- Bengaluru location marker
- Hover details
- Primary actions

Do NOT:

- Fill large sections with green
- Make every icon green
- Make every border green
- Use multiple competing accent colors

## Blue rule

Do NOT use the previous blue/cyan-heavy cybersecurity style across the portfolio.

A tiny neutral or cool atmospheric tone may be used inside the globe if required for realism, but:

- No cyan polygon shell
- No thick blue ring
- No hexagonal globe frame
- No neon blue HUD around the globe

---

# 6. TYPOGRAPHY

Use three typography roles.

## Display font

Use a condensed editorial font such as:

- Bebas Neue
- Oswald
- Anton
- Archivo Narrow

Use for:

- Hero statements
- Section headings
- Large project titles
- Editorial text

## Interface font

Use:

- Inter

or:

- Space Grotesk

Use for:

- Navigation
- Paragraphs
- Descriptions
- UI

## Technical font

Use:

- JetBrains Mono

Use only for:

- Labels
- Coordinates
- Dates
- Metadata
- Status

Example:

```text
LOCATION — BENGALURU, INDIA
STATUS — OPEN TO SOC OPPORTUNITIES
ROLE — ASPIRING SOC PRACTITIONER
```

---

# 7. LAYOUT PHILOSOPHY

Use a structured editorial grid.

Prefer:

- Large outer composition
- Thin separators
- Strong alignment
- Asymmetry where intentional
- Overlapping content only when useful
- Large negative space

Avoid:

- Every section being a floating rounded card
- Giant glass panels
- Excessive shadows
- Dashboard-style widgets

Border radius should be restrained:

```css
0px
```

or:

```css
6px
8px
```

Avoid large pill-shaped containers.

---

# 8. NAVIGATION

Navigation order:

1. Mission
2. Case Studies
3. Research
4. Blogs
5. Certifications
6. Toolkit
7. Journey
8. Terminal
9. Connect

Desktop:

- Sticky
- Minimal
- Dark translucent surface if needed
- Thin bottom border
- Clear active state
- No oversized navigation pills

Brand:

**SHAKTHIVEL B**

or a restrained **SH** mark.

Mobile:

- Compact
- Intentional mobile navigation
- No horizontal overflow

---

# 9. HERO SECTION

The hero is the signature experience.

## Composition

Use a cinematic editorial composition:

**LEFT**

- Location label
- Name
- Primary role
- Core interests
- Short introduction
- Primary CTA
- GitHub CTA

**RIGHT / BACKGROUND**

- Large interactive globe
- Bengaluru marker
- Minimal supporting metadata

## Hero content

Small label:

```text
BENGALURU, INDIA
```

Name:

```text
SHAKTHIVEL B
```

Primary role:

```text
ASPIRING SOC PRACTITIONER
```

Core focus:

```text
SOC • BUG BOUNTY • OSINT • REVERSE ENGINEERING
```

Authentic introduction:

> Curious by nature and security-focused by choice. I explore systems, investigate how they behave, and build hands-on experience across SOC operations, bug bounty, OSINT and reverse engineering.

This copy may be refined for readability, but the meaning must remain authentic.

Primary actions:

```text
EXPLORE CASE STUDIES →
```

```text
GITHUB →
```

GitHub:

https://github.com/ShakthivelB

---

# 10. SIGNATURE ELEMENT — INTERACTIVE SECURITY GLOBE

The globe is one of the portfolio's strongest visual signatures.

It represents:

> **Security research from Bengaluru, India.**

## Required behavior

The globe must:

- Rotate slowly by default
- Be interactive with mouse
- Support touch interaction
- Contain recognizable world geography
- Use a dark Earth appearance
- Have subtle geographic dots or restrained map detail
- Have a subtle natural atmosphere
- Remain clean and readable
- Perform well on desktop and mobile

## Absolutely remove / avoid

Do NOT use:

- Blue polygon shells
- Cyan outer halos
- Thick blue rings
- Hexagonal frames
- Technical HUD borders surrounding the Earth
- Heavy neon glow
- Military radar styling
- Fake threat-map aesthetics

The globe should appear to float naturally.

---

# 11. BENGALURU LOCATION PIN

Permanent location:

```text
BENGALURU, INDIA
12.9716° N
77.5946° E
```

The marker must be mathematically attached to the globe.

It MUST:

- Rotate with the Earth
- Move naturally with the globe
- Be hidden when Bengaluru rotates behind the Earth
- Reappear when Bengaluru returns to the visible hemisphere

Do NOT pin Bengaluru in a fixed screen position.

## Marker style

Use:

- Small accent point
- Subtle pulse
- Optional thin line
- Minimal label

No large tooltip.

---

# 12. GLOBE SECURITY ACTIVITY

The globe may contain sparse, subtle activity visualization.

Allowed:

- Small moving points
- Occasional pulses
- Thin connection arcs

The visualization must remain restrained.

Do NOT claim simulated events are real.

If simulated, label clearly:

```text
SECURITY ACTIVITY VISUALIZATION
ILLUSTRATIVE DATA
```

Do NOT fabricate:

- Live attacks
- SOC alerts
- Threat feeds
- Malware incidents
- IP addresses
- Global attack counts

If real data is integrated later:

- Identify the source
- Show update time
- Provide attribution
- Keep API keys server-side

Do not expose secret API keys in the React frontend.

---

# 13. MISSION — WHY CYBERSECURITY?

Do not use a generic About Me section.

Use editorial storytelling.

Heading:

```text
WHY
CYBERSECURITY?
```

Authentic story:

Shakthivel has always been curious about exploring and investigating things. An early experience watching a mentor access an unauthorized web resource created strong curiosity about how it was possible and how systems could be accessed or bypassed. That curiosity led to cybersecurity learning and eventually developed into a genuine passion and lifestyle goal.

Do not exaggerate this story.

Do not claim illegal activity.

Focus on:

- Curiosity
- Investigation
- Understanding systems
- Learning how security works
- Responsible security practice

---

# 14. WHY SOC?

Heading concept:

```text
I LIKE
INVESTIGATING.
```

Explain the attraction to SOC work through:

- Investigating alerts
- Following evidence
- Reading logs
- Understanding what happened
- Root cause identification
- Connecting small technical details
- Building the bigger picture

This must feel personal and authentic.

---

# 15. WHY BUG BOUNTY?

Heading concept:

```text
THINK LIKE
THE ATTACKER.
```

Explain:

- Bug bounty keeps the mind active
- It encourages creative problem solving
- It requires attacker-minded thinking
- It teaches how systems can fail
- Responsible testing helps improve security

Do not claim rewards, accepted reports, or vulnerabilities unless confirmed.

---

# 16. CASE STUDIES / FEATURED PROJECTS

Featured GitHub repositories:

## 01 — Splunk SOC Home Lab

Repository:

https://github.com/ShakthivelB/splunk-soc-home-lab

Focus:

- SOC learning
- Splunk
- Log analysis
- Security operations practice

---

## 02 — Network Scanning

Repository:

https://github.com/ShakthivelB/network-scanning

Focus:

- Network discovery
- Security scanning
- Nmap
- Vulnerability assessment where accurately represented

---

## 03 — Linux Update Automation

Repository:

https://github.com/ShakthivelB/Linux_update_Automation

Focus:

- Linux
- Automation
- Scripting

---

## 04 — OverTheWire Bandit Challenge

Repository:

https://github.com/ShakthivelB/over-the-wire-bandit-challange

Focus:

- Linux fundamentals
- Command-line learning
- Security challenges

---

## 05 — Caesar Cipher Tool

Repository:

https://github.com/ShakthivelB/Caesar-Cipher-Tool

Focus:

- Cryptography fundamentals
- Programming
- Security concepts

---

# 17. PROJECT PRESENTATION

Do not use generic portfolio cards.

Preferred structure:

```text
01

PROJECT TITLE

SHORT DESCRIPTION

CATEGORY                     →
```

On hover:

- Slight image/content movement
- Arrow movement
- Border contrast increase
- Restrained accent appearance

Avoid:

- Huge shadows
- 3D tilt cards
- Over-animation

Repository descriptions must be based on actual project information when available.

Do not invent technical features.

---

# 18. PROFESSIONAL EXPERIENCE

## Current role

```text
TECHNICAL SUPPORT ENGINEER
IBM

AUSNET ENERGY & UTILITY

12 MARCH 2025 — PRESENT
```

Do NOT describe this role as SOC Analyst.

## Confirmed responsibilities

- Managed and analyzed energy and utility field data
- Worked with SAP
- Worked with SDME
- Worked with Nexos
- Worked with AutoCAD
- Worked with SCADA systems
- Investigated system alerts
- Handled service requests
- Used ServiceNow
- Used Jira
- Assisted with log analysis
- Assisted with root cause identification
- Supported operational reliability
- Maintained data accuracy

Professional wording may be improved, but responsibilities must remain accurate.

## Technologies associated with experience

- IBM watsonx Gen AI
- IBM Consulting Advantage / ICA Gen AI
- IBM BOB
- SAP
- SCADA
- ServiceNow
- Jira
- Nexos
- SDME
- AutoCAD

---

# 19. FEATURED ACHIEVEMENT — BOB-N-THON

Create a visually significant achievement/case study.

Title:

```text
BOB-N-THON
QUALITY WORKFLOW APPLICATION
```

## Problem

The operations team completed tickets and sent them for review.

The QA team reviewed the tickets and returned errors.

The previous Excel-based workflow made centralized visibility and interaction between the team and QA more difficult.

## Solution

Shakthivel developed a centralized web application to improve:

- Ticket quality checking
- Centralized visibility
- Interaction between the team and QA
- Feedback and correction workflow
- Dependence on fragmented Excel-based processes

## Visual story

```text
BEFORE

TEAM → EXCEL → QA → ERRORS → MANUAL FOLLOW-UP
```

Then:

```text
AFTER

TEAM
  ↓
CENTRALIZED WEB APPLICATION
  ↓
QA REVIEW
  ↓
FEEDBACK / CORRECTION
```

## Confidentiality rule

Do NOT expose:

- IBM internal URLs
- AusNet internal information
- Customer data
- Credentials
- Internal screenshots
- Confidential architecture
- Proprietary data

Do NOT invent performance metrics.

---

# 20. RESEARCH

Primary research/focus areas:

1. Bug Bounty
2. OSINT
3. Reverse Engineering
4. SOC Investigation
5. Security Research

Suggested presentation:

```text
01
BUG BOUNTY
Finding and responsibly reporting security issues.

02
OSINT
Investigating publicly available information and digital footprints.

03
REVERSE ENGINEERING
Learning how software behaves beneath the surface.

04
SOC INVESTIGATION
Developing investigation and analysis skills through practical labs.
```

---

# 21. BLOGS

Medium profile:

https://medium.com/@shakthisv90

Display the blog section between:

**Research**

and:

**Certifications**

Heading options:

```text
RESEARCH NOTES
```

or:

```text
FIELD NOTES
```

## Blog requirements

Each article should show, when actual data is available:

- Cover image
- Article title
- Short description
- Published date
- Reading time
- Tags
- Read on Medium action
- Original article URL

Order:

**Newest first**

Each article can be fully clickable.

Include:

```text
VIEW ALL ARTICLES →
```

which opens:

https://medium.com/@shakthisv90

## Automation rule

Whenever technically reliable, retrieve Medium article information automatically.

However:

- Do not add a backend only for Medium
- Do not fabricate articles
- Do not fabricate dates
- Do not fabricate reading times
- Do not fabricate tags
- Do not fabricate cover images

If automation is unreliable, maintain real metadata in:

```text
src/data/blogs.ts
```

---

# 22. CERTIFICATIONS

Create a premium, institutional-looking certification section.

Do NOT use generic certificate illustrations when official issuer branding is available.

## Completed certifications

### 1. ISC2 CC – Certified in Cybersecurity (Candidate)

Issuer:

**ISC2**

Status:

**Candidate**

### 2. Cybersecurity Certification Course

Status:

**Completed**

### 3. IBM Cybersecurity Fundamentals

Issuer:

**IBM**

Status:

**Completed**

### 4. Tata Cybersecurity Security Analyst Job Simulation

Issuer:

**Tata**

Status:

**Completed**

### 5. Advent of Cyber

Status:

**Completed**

### 6. OWASP Overview

Status:

**Completed**

### 7. Pre Security

Status:

**Completed**

---

# 23. CURRENTLY PURSUING

Create a visually separate area.

```text
CURRENTLY PURSUING
```

Certification:

**Microsoft SC-200**

Full title:

**Microsoft Certified: Security Operations Analyst Associate**

Status:

**IN PROGRESS**

Do NOT mark SC-200 as completed.

Use a restrained:

```text
IN PROGRESS
```

badge.

---

# 24. CERTIFICATION LINKS AND LOGOS

Use official issuer logos where appropriate, such as:

- ISC2
- IBM
- Tata
- Microsoft
- OWASP
- TryHackMe where applicable

Preserve real credential hyperlinks from the resume if available.

Never invent:

- Credential IDs
- Verification links
- Badge URLs

---

# 25. TOOLKIT

Do NOT create a wall of random logos.

Group tools by discipline.

## SOC & Security Operations

- Splunk
- Wazuh
- Microsoft Sentinel
- Windows Event Viewer
- ServiceNow

## Penetration Testing & Bug Bounty

- Burp Suite
- Nmap
- Nuclei
- Nikto
- Gobuster
- ffuf
- sqlmap
- Metasploit
- Wireshark

Other tools may be shown only if actually used and confirmed.

## Programming & Automation

- Python
- Bash
- PowerShell
- JavaScript
- C — currently learning for Reverse Engineering

## Tool logo behavior

Use official logos where practical.

Default:

- Monochrome or restrained

Hover:

- Reveal authentic brand color subtly
- Show tool name
- Show category

Do NOT create a rainbow logo wall.

---

# 26. STATISTICS

Use a clean technical grid.

Confirmed portfolio metrics:

```text
SOC LABS                 3+
TRYHACKME ROOMS          90+
MEDIUM BLOGS             7+
BUG BOUNTY REPORTS       4+
GITHUB REPOSITORIES      17
CTFs                     4
PORTSWIGGER LABS         93
EXPERIENCE               1.5 YEARS
```

Do not animate every number from zero.

Use subtle reveal animation only.

Do not change metrics without updated information from the user.

---

# 27. JOURNEY

Create a cinematic progression rather than an over-detailed resume timeline.

Suggested stages:

```text
CYBERSECURITY DISCOVERY
        ↓
HANDS-ON LEARNING
        ↓
SOC LABS
        ↓
BUG BOUNTY
        ↓
SECURITY RESEARCH
        ↓
TECHNICAL BLOGGING
        ↓
IBM / AUSNET EXPERIENCE
        ↓
SOC DEVELOPMENT
        ↓
ASPIRING SOC PRACTITIONER
```

Only use confirmed dates.

Do NOT fabricate dates.

---

# 28. CURRENT LEARNING

Do NOT create a separate section titled:

- Currently Exploring
- What's on the desk this quarter
- Notes from the workspace
- Milestones, quietly noted

Instead integrate current learning naturally into Toolkit or Journey.

Current learning:

- SOC
- Bug Bounty
- Reverse Engineering
- C
- Microsoft SC-200

---

# 29. THREE-YEAR DIRECTION

The portfolio can communicate the user's forward-looking goal carefully:

> To grow into a strong SOC Analyst, starting with investigation and log analysis while continuously developing deeper technical skills across security operations and cybersecurity research.

Do not fabricate a future employer or job title.

---

# 30. TERMINAL

The terminal is optional.

It is an Easter egg, not the main design.

Do NOT make the website look like a terminal.

## Commands

```text
help
about
projects
research
skills
blogs
certs
github
contact
clear
```

Optional Easter egg:

```text
sudo hire shakthi
```

The response may be playful but professional.

## Terminal design

- Near-black
- Off-white text
- JetBrains Mono
- Restrained accent cursor
- Minimal UI

Do NOT use:

- Matrix green
- Random fake logs
- Real shell execution
- Arbitrary JavaScript execution

The terminal is simulated only.

---

# 31. CONNECT

Final section heading:

```text
LET'S
CONNECT.
```

Use large editorial typography.

## Links

GitHub:

https://github.com/ShakthivelB

LinkedIn:

https://www.linkedin.com/in/shakthi-vel-b-5507ba306/

Medium:

https://medium.com/@shakthisv90

Email:

shakthisv90@gmail.com

Keep this section minimal.

---

# 32. FOOTER

Include:

```text
SHAKTHIVEL B
ASPIRING SOC PRACTITIONER

SOC
BUG BOUNTY
OSINT
REVERSE ENGINEERING
```

Links:

- GitHub
- LinkedIn
- Medium
- Email

Keep the footer restrained.

---

# 33. MOTION SYSTEM

Use:

**Framer Motion**

Motion should be:

- Smooth
- Precise
- Short
- Cinematic
- Intentional

Allowed:

- Fade
- Slide
- Mask reveal
- Blur-to-sharp
- Small scale transitions
- Arrow movement
- Subtle hover transitions

Avoid:

- Bouncing
- Flashing
- Constant floating
- Aggressive parallax
- Long animations
- Random movement

Principle:

> Motion should reveal hierarchy, not compete for attention.

---

# 34. GLOBE MOTION

Default:

- Slow continuous rotation

During interaction:

- Pause or reduce automatic rotation

After interaction:

- Slowly resume

Bengaluru marker:

- Must rotate with the globe
- Must not remain fixed on screen

---

# 35. REDUCED MOTION

Support:

```css
prefers-reduced-motion
```

When enabled:

- Stop globe rotation
- Disable marker pulse
- Reduce section transitions
- Reduce hover animation
- Preserve full usability

---

# 36. RESPONSIVE DESIGN

## Desktop

- Editorial grid
- Large globe
- Strong typography
- Controlled layering

## Tablet

- Reduce overlap
- Preserve hierarchy
- Keep globe prominent but manageable

## Mobile

Design intentionally.

Do NOT simply shrink the desktop.

Requirements:

- Single-column composition where appropriate
- Globe scales correctly
- Bengaluru remains visible when appropriate
- Typography remains strong
- Navigation becomes compact
- Stats remain readable
- Projects stack cleanly
- Toolkit remains usable
- Terminal remains usable
- No horizontal scrolling

---

# 37. TECHNICAL STACK

Frontend:

- React
- Vite
- TypeScript

Styling:

- Tailwind CSS

Animation:

- Framer Motion

Globe:

Prefer:

- Three.js
- React Three Fiber

Use a graceful fallback if WebGL is unavailable.

The portfolio should remain primarily frontend-only.

Do NOT introduce a backend unless genuinely needed for:

- Protected API keys
- Real external data requiring server-side access
- Server-side functionality

---

# 38. PERFORMANCE

The visual design must not destroy performance.

For the globe:

- Keep geometry reasonable
- Avoid excessive particles
- Avoid unnecessary post-processing
- Use an appropriate device pixel ratio
- Lazy-load heavy components where useful
- Stop expensive rendering when not visible if practical

Do not sacrifice the whole portfolio for one visual element.

---

# 39. ACCESSIBILITY

Maintain:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Good contrast
- Alt text
- Accessible buttons
- Accessible external links
- Reduced-motion support

The site must remain usable without animations.

---

# 40. CONTENT ACCURACY — HARD RULE

Never invent information.

Never invent:

- Job titles
- Employers
- Certifications
- Credential links
- Bug bounty rewards
- Vulnerabilities
- CVEs
- Accepted reports
- Project results
- Medium articles
- Technologies
- Experience
- Education
- Achievements
- Statistics

If information is unavailable:

**Leave it out or ask the user.**

Do not create fake information to fill space.

---

# 41. RESUME PRIORITY

The resume is the primary source of truth for:

- Education
- Certifications
- Experience
- Credential links
- Professional dates
- Professional information

If a resume is available:

Read it before modifying professional content.

If there is a conflict:

1. Prefer the user's newest explicit information.
2. Otherwise prefer the resume.
3. Never silently invent a compromise.

---

# 42. GITHUB PRIORITY

GitHub profile:

https://github.com/ShakthivelB

Featured repositories:

https://github.com/ShakthivelB/over-the-wire-bandit-challange

https://github.com/ShakthivelB/Linux_update_Automation

https://github.com/ShakthivelB/splunk-soc-home-lab

https://github.com/ShakthivelB/network-scanning

https://github.com/ShakthivelB/Caesar-Cipher-Tool

If repository information can be inspected, use actual repository descriptions.

Do not invent project features.

---

# 43. IMPLEMENTATION ARCHITECTURE

Keep content separate from components.

Recommended structure:

```text
src/
  components/
    Navigation.tsx
    Hero.tsx
    SecurityGlobe.tsx
    Mission.tsx
    Statistics.tsx
    CaseStudies.tsx
    Research.tsx
    Blogs.tsx
    Certifications.tsx
    Toolkit.tsx
    Experience.tsx
    Achievement.tsx
    Journey.tsx
    Terminal.tsx
    Contact.tsx
    Footer.tsx

  data/
    profile.ts
    projects.ts
    skills.ts
    certifications.ts
    blogs.ts
    experience.ts
    achievements.ts
```

Keep globe-specific logic inside:

```text
SecurityGlobe.tsx
```

Do NOT mix Three.js logic into the main Hero component.

---

# 44. COMPONENT REUSE

Create reusable components only where useful.

Examples:

- SectionLabel
- Metric
- ProjectItem
- ToolItem
- CertificationItem
- BlogCard
- TimelineItem

Do not over-engineer.

Keep the code understandable.

---

# 45. LOGOS AND ASSETS

Use official logos where possible.

Avoid:

- Random low-quality logo downloads
- Distorted aspect ratios
- Poor dark-mode contrast

Use restrained presentation.

Do not create a logo wall.

---

# 46. STRICT DO-NOT-DO LIST

## 46a. Scoped exception — cursor-spotlight binary layer

The site includes one narrow, deliberate exception to the "no Matrix rain"
rule below: a dormant background layer of faint `0`/`1` glyphs
(`src/components/BinaryMatrixBackground.tsx`), rendered once behind all
page content.

This is intentionally **not** the prohibited effect:

- It is invisible by default. Nothing is visible until the pointer clicks
  (or a finger taps) on open background — it never follows the cursor
  continuously and never appears from mere hovering or scrolling.
- On a qualifying click/tap it "pops" open — a small spotlight radius
  around the click point eases open with a slight overshoot (an animated
  `--spot-r` custom property plus a brief radial glow flash), holds for
  about one second, then eases shut again. It is a single restrained
  pop, not a flashing or scrolling rain effect.
- The pop never triggers when the click/tap lands on a card
  (`.panel`/`.panel-raised`) or on text/interactive content (headings,
  paragraphs, links, buttons, images) — clicking those elements behaves
  normally and never reveals the layer. It only ever pops over genuinely
  empty background.
- Glyph color uses the site's one existing accent green
  (`--color-accent` / `--color-accent-soft`), by explicit user decision —
  this is the one deliberate use of a brighter/glowing green on the site,
  confined entirely to this dormant, content-avoiding pop effect. It does
  not add a second competing accent color elsewhere.
- It is purely decorative texture, not simulated logs/alerts/ASCII art,
  and is skipped entirely under `prefers-reduced-motion`.
- The same click/tap behavior applies identically on mobile (touch taps
  trigger the same pop as a desktop click).

Any future change to this layer must preserve all of the above, or it
reverts to being the prohibited effect.

Do NOT:

- Use Matrix rain
- Fill the site with ASCII
- Add random terminal text
- Add glitch effects everywhere
- Add excessive scanlines
- Use flashing red lights
- Add fake hacking animations
- Add fake SOC alerts
- Add fake threat feeds
- Add fake IP addresses
- Add meaningless cyber statistics
- Use neon green Matrix styling
- Use blue/cyan neon everywhere
- Put every section inside a rounded card
- Use excessive glassmorphism
- Use too many gradients
- Use too many accent colors
- Copy the design reference exactly
- Prioritize animation over content

Cybersecurity does not need to look like a movie.

---

# 47. BUILD PROCESS

Before major modifications:

1. Read this CLAUDE.md completely.
2. Inspect the current project structure.
3. Inspect package.json.
4. Identify existing components.
5. Identify existing styling.
6. Identify reusable functionality.
7. Preserve working functionality where possible.
8. Identify content requiring correction.
9. Plan the change.
10. Implement incrementally.

Do not blindly rewrite the application.

---

# 48. FINAL QUALITY CHECK

Run:

```bash
npm run build
```

and, if available:

```bash
npm run lint
```

Check:

- Desktop
- Tablet
- Mobile
- Navigation
- Hero
- Globe
- Bengaluru pin
- Globe rotation
- Marker occlusion
- Reduced motion
- GitHub links
- LinkedIn
- Medium
- Certification links
- Tool logos
- Terminal
- Contact
- Accessibility
- Console errors

Remove:

- Placeholder text
- Broken links
- Unused imports
- Unused components
- Unused dependencies
- Debug output

---

# 49. GLOBE ACCEPTANCE CRITERIA

The globe is complete only when:

- [ ] Globe visibly rotates
- [ ] Rotation is smooth
- [ ] Globe reads as Earth with recognizable geography
- [ ] Globe is dark and cinematic
- [ ] No cyan polygon shell exists
- [ ] No thick blue outer ring exists
- [ ] No hexagonal outer frame exists
- [ ] Bengaluru uses correct coordinates
- [ ] Marker rotates with Earth
- [ ] Marker disappears behind Earth
- [ ] Marker returns naturally
- [ ] User can interact with globe
- [ ] Mobile interaction works
- [ ] Reduced-motion mode works
- [ ] WebGL fallback exists
- [ ] Globe does not destroy page performance

---

# 50. FINAL DESIGN ACCEPTANCE CRITERIA

The website must feel original and premium.

It should use:

- Near-black canvas
- Strong white typography
- One restrained accent color
- Editorial typography
- Large negative space
- Thin technical borders
- A clean cinematic globe
- Accurate Bengaluru location
- Strong project presentation
- Authentic professional experience
- Sophisticated toolkit
- Clean certifications
- Real blog content
- Restrained animation

The final visual message should be:

> **Curious. Investigative. Technical. Security-focused.**

---

# FINAL IMPLEMENTATION INSTRUCTION

When making changes to this portfolio:

**Do not guess.**

Inspect the existing code first.

Preserve accurate content.

Use the resume as the professional source of truth when available.

Use actual GitHub and Medium information where technically available.

Do not fabricate achievements.

Do not redesign everything unnecessarily when a focused change is requested.

Every change should move the portfolio closer to this final identity:

> **A premium, original cybersecurity portfolio for Shakthivel B — an Aspiring SOC Practitioner from Bengaluru with practical interests in SOC, Bug Bounty, OSINT, Reverse Engineering, Security Research, and Automation.**
