# Shakthivel B — Portfolio Design System

## Design Reference

This portfolio takes **structural and interaction inspiration** from the supplied NETWORKS / Firewall concept video:

- Editorial, futuristic cybersecurity aesthetic
- Large condensed typography
- A dominant animated globe behind the interface
- Thin technical borders and framed layouts
- Asymmetrical composition
- Strong black/white contrast
- One highly visible accent color
- Layered cards over a living background
- Motion that feels deliberate rather than decorative

**Important:** Do not copy the original website's branding, text, assets, or exact layout. Use the design language as inspiration and create an original portfolio for Shakthivel B.

---

# 1. Core Creative Direction

## The feeling

The portfolio should feel like:

> **A personal cybersecurity operations interface built as a premium editorial website.**

It should not feel like:

- A generic hacker portfolio
- A green Matrix terminal
- A SOC dashboard full of meaningless widgets
- A corporate PowerPoint website
- A template with cards everywhere
- A gaming interface

The design should communicate:

**Curiosity → Investigation → Security → Growth**

The visitor should immediately understand that Shakthivel is:

- An Aspiring SOC Practitioner
- Interested in Bug Bounty
- Interested in OSINT
- Learning Reverse Engineering
- Building practical cybersecurity projects
- Currently working as a Technical Support Engineer at IBM on the AusNet Energy & Utility project

---

# 2. Visual DNA

## Primary background

Use a true black background:

```css
#000000
```

Secondary surfaces, derived from the dark olive `#253900` scaled toward black for elevation:

```css
#0B1100
#162200
#253900
```

Borders:

```css
rgba(238, 238, 238, 0.16)
rgba(238, 238, 238, 0.08)
```

Primary text:

```css
#EEEEEE
```

Muted text:

```css
#737373
```

---

# 3. Accent Color

Use **one primary accent color**.

Recommended accent:

```css
Security Green: #08CB00
```

Optional slightly softer version:

```css
#39D533
```

The accent color must be used sparingly.

Use it for:

- Primary action buttons
- Active navigation state
- Important interactive arrows
- Hover highlights
- Status indicators
- Selected cards

Do NOT use the accent color for:

- Large backgrounds
- Every icon
- Every border
- Every heading

The black and white contrast should remain dominant.

---

# 4. Typography

The reference works because of strong typography.

Use two typography systems.

## Display Typeface

Use a condensed, tall, editorial font.

Recommended options:

- Bebas Neue
- Oswald
- Anton
- Archivo Narrow

Use this for:

- Section titles
- Hero statements
- Major project labels
- Large editorial text

Example:

```text
SECURITY
THROUGH
INVESTIGATION
```

Typography should be uppercase where appropriate.

---

## Interface Typeface

Use:

```text
Inter
```

or:

```text
Space Grotesk
```

Use this for:

- Navigation
- Paragraphs
- Cards
- Descriptions

---

## Technical Typeface

Use:

```text
JetBrains Mono
```

Use this only for:

- Labels
- Metadata
- Coordinates
- Status
- Dates
- Technical information

Example:

```text
LOCATION — BENGALURU, INDIA
STATUS — ACTIVE LEARNING
ROLE — ASPIRING SOC PRACTITIONER
```

---

# 5. Layout Philosophy

The website should use a framed editorial layout.

Instead of independent floating cards everywhere:

Create a visual system based on:

- Large outer frame
- Thin technical borders
- Horizontal separators
- Vertical alignment
- Controlled overlapping layers

Think:

```text
┌──────────────────────────────────────────────────────┐
│ BRAND              NAVIGATION                  MENU  │
├──────────────────────────────────────────────────────┤
│                                                      │
│          LARGE VISUAL / GLOBE BACKGROUND             │
│                                                      │
│   EDITORIAL TITLE          INTERACTIVE CONTENT       │
│                                                      │
├──────────────────────┬───────────────────────────────┤
│                      │                               │
│      CONTENT         │          CONTENT              │
│                      │                               │
└──────────────────────┴───────────────────────────────┘
```

Borders should be thin and subtle.

Avoid excessive rounded rectangles.

---

# 6. Border Radius

Use restrained geometry.

Recommended:

```css
border-radius: 0px;
```

or:

```css
border-radius: 8px;
```

Maximum:

```css
12px
```

Do NOT use:

- 24px
- 32px
- Pill-shaped containers everywhere
- Excessive rounded cards

Buttons can use a stronger radius if needed.

---

# 7. Hero Section — The Signature Experience

The hero should be the strongest part of the portfolio.

The supplied reference video uses a massive globe behind the interface.

Adapt that idea.

## Composition

```text
┌─────────────────────────────────────────────────────────────┐
│ SHAKTHIVEL B              MISSION  WORK  RESEARCH  CONNECT  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                 [ ANIMATED SECURITY GLOBE ]                 │
│                                                             │
│ ASPIRING SOC                                                   │
│ PRACTITIONER        GLOBAL SECURITY / BENGALURU              │
│                                                             │
│ Security Researcher • Bug Bounty • OSINT • Reverse Eng.     │
├──────────────────────────────┬──────────────────────────────┤
│ CURRENT MISSION              │ STATUS / QUICK PROFILE       │
│ IBM • AUSNET ENERGY          │ OPEN TO SOC OPPORTUNITIES    │
└──────────────────────────────┴──────────────────────────────┘
```

The globe should sit **behind and between content layers**, not inside a standard card.

---

# 8. Security Globe

The globe is the main visual signature.

## Appearance

Use:

- Dark Earth
- Fine dotted geographic data
- Subtle country outlines
- Very low visual noise
- Soft atmospheric shading
- White/gray geographic dots

Do not use:

- Thick cyan rings
- Blue polygon shells
- Hexagonal frames around the globe
- Heavy neon glows

## Bengaluru Marker

Pin:

```text
BENGALURU, INDIA
12.9716° N
77.5946° E
```

The marker should:

- Be geographically attached to the globe
- Rotate with the Earth
- Disappear naturally behind the Earth
- Use the accent green only as a small point or pulse

The location marker must be elegant.

---

# 9. Security Activity

The globe may include subtle animated security activity.

Examples:

- Small moving points
- Thin curved connection paths
- Occasional pulses

The visualization must remain sparse.

Maximum visual philosophy:

> If it looks impressive in a screenshot but distracting after 30 seconds, reduce it.

Do not claim fake attacks are live.

If simulated:

```text
SECURITY ACTIVITY VISUALIZATION
ILLUSTRATIVE DATA
```

If real data is added later:

Show:

- Source
- Last updated time
- Clear attribution

---

# 10. Navigation

Desktop navigation should be minimal.

Recommended order:

```text
MISSION
CASE STUDIES
RESEARCH
BLOGS
CERTIFICATIONS
TOOLKIT
JOURNEY
TERMINAL
CONNECT
```

The active item should have:

- Accent background or underline
- Subtle transition

Do not create a large glowing navigation bar.

---

# 11. Mission Section

This replaces a generic "About Me".

Use editorial storytelling.

Large heading:

```text
WHY
CYBERSECURITY?
```

Tell the story authentically:

- Curious since childhood
- Interested in exploring and investigating
- First exposure to unauthorized web access created curiosity about how systems work and how security can be bypassed
- That curiosity became cybersecurity learning
- Cybersecurity developed into a genuine passion and lifestyle goal

Do not make it sound like corporate marketing.

---

# 12. Why SOC?

Large statement:

```text
I LIKE
INVESTIGATING.
```

Then explain:

- Investigating alerts
- Following evidence
- Understanding what happened
- Analyzing logs
- Identifying root causes
- Connecting small details into a bigger picture

This section should be visually simple and strong.

---

# 13. Why Bug Bounty?

Large statement:

```text
THINK LIKE
THE ATTACKER.
```

Explain that Bug Bounty:

- Keeps the mind active
- Encourages continuous learning
- Requires creative thinking
- Helps understand attacker behavior
- Allows responsible testing to improve security

---

# 14. Case Studies / Projects

Do not display projects as ordinary portfolio cards.

Use a large editorial project grid.

## Featured repositories

Showcase:

### 01 — Splunk SOC Home Lab

Repository:

https://github.com/ShakthivelB/splunk-soc-home-lab

Focus:

- SOC learning
- Log analysis
- Splunk
- Security operations practice

---

### 02 — Network Scanning

Repository:

https://github.com/ShakthivelB/network-scanning

Focus:

- Network discovery
- Nmap
- Nessus / vulnerability assessment where applicable
- Security analysis

---

### 03 — Linux Update Automation

Repository:

https://github.com/ShakthivelB/Linux_update_Automation

Focus:

- Automation
- Linux administration
- Bash / scripting

---

### 04 — OverTheWire Bandit Challenge

Repository:

https://github.com/ShakthivelB/over-the-wire-bandit-challange

Focus:

- Linux fundamentals
- Command-line skills
- Security learning

---

### 05 — Caesar Cipher Tool

Repository:

https://github.com/ShakthivelB/Caesar-Cipher-Tool

Focus:

- Cryptography fundamentals
- Programming
- Security concepts

---

# 15. Project Card Style

Each project should use:

```text
01

PROJECT TITLE

ONE-LINE DESCRIPTION

[ CATEGORY ]              →

```

On hover:

- Image/background subtly moves
- Border becomes brighter
- Arrow moves slightly
- Accent color appears minimally

Avoid:

- Giant shadows
- Excessive glass effects
- 3D tilt cards

---

# 16. Research Section

Research should focus on:

```text
BUG BOUNTY
OSINT
REVERSE ENGINEERING
SOC INVESTIGATION
```

Use a clean editorial layout.

Each research area should have:

- Number
- Category
- Short description
- Status

Example:

```text
01

BUG BOUNTY

Finding and responsibly reporting security issues.

ACTIVE →
```

---

# 17. Blogs

Medium profile:

https://medium.com/@shakthisv90

Display:

```text
RESEARCH NOTES
```

or:

```text
FIELD NOTES
```

Each article should include:

- Title
- Publication date
- Reading time if available
- Tags
- Read arrow

Do not make the section look like a traditional blog website.

Use editorial rows or a structured list.

Example:

```text
07. ARTICLE TITLE                              5 MIN →
06. ARTICLE TITLE                              7 MIN →
05. ARTICLE TITLE                              4 MIN →
```

Include:

```text
VIEW ALL ON MEDIUM →
```

---

# 18. Certifications

Use an institutional layout.

Completed certifications:

- ISC2 CC – Certified in Cybersecurity (Candidate)
- Cybersecurity Certification Course
- IBM Cybersecurity Fundamentals
- Tata Cybersecurity Security Analyst Job Simulation
- Advent of Cyber
- OWASP Overview
- Pre Security

Currently pursuing:

```text
MICROSOFT SC-200
Security Operations Analyst Associate

STATUS — IN PROGRESS
```

Use official issuer logos where legally and technically appropriate.

Do not use generic certificate illustrations.

---

# 19. Toolkit

The toolkit should not be a wall of random logos.

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
- Other reconnaissance and bug bounty tools

## Programming & Automation

- Python
- Bash
- PowerShell
- JavaScript
- C — currently learning for Reverse Engineering

Display official logos where possible.

Use grayscale logos by default.

On hover:

- Reveal original brand color subtly
- Show tool name
- Show category

---

# 20. Experience / Journey

## Current Position

```text
TECHNICAL SUPPORT ENGINEER
IBM

AUSNET ENERGY & UTILITY PROJECT

12 MARCH 2025 — PRESENT
```

Responsibilities should reflect the user's actual work:

- Managed and analyzed energy and utility field data
- Worked with SAP, SDME, Nexos, AutoCAD, and SCADA systems
- Supported data accuracy and operational reliability
- Investigated system alerts and service requests
- Used ServiceNow and Jira for issue tracking
- Assisted with log analysis and root cause identification
- Supported secure and reliable operational processes

Technologies:

- watsonx Gen AI
- IBM Consulting Advantage
- IBM BOB
- SAP
- SCADA
- ServiceNow
- Jira
- Nexos
- SDME

---

# 21. Featured Achievement

Create a special case-study section for:

```text
BOB-N-THON
QUALITY WORKFLOW APPLICATION
```

Story:

Before the application:

```text
TEAM → EXCEL → QA → ERRORS → MANUAL FOLLOW-UP
```

After:

```text
TEAM
  ↓
CENTRAL WEB APPLICATION
  ↓
QA REVIEW
  ↓
FEEDBACK / CORRECTIONS
```

Purpose:

Create centralized visibility and interaction between the production team and QA team instead of relying on fragmented Excel workflows.

This should be shown as a genuine problem-solving achievement.

---

# 22. Stats

Do not place all statistics in flashy counters.

Use a technical grid:

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

Important:

Do not animate every number from zero.

Use subtle reveal animations only.

---

# 23. Journey / Learning Direction

Use a timeline:

```text
2025 ───────────────────────────────────── NOW

CYBERSECURITY
        ↓
SOC INVESTIGATION
        ↓
BUG BOUNTY
        ↓
OSINT
        ↓
REVERSE ENGINEERING
        ↓
ASPIRING SOC ANALYST
```

Current learning:

- SOC
- Bug Bounty
- Reverse Engineering

---

# 24. Terminal

The terminal should be an optional interactive feature.

Do not make it the homepage.

Suggested commands:

```text
help
about
skills
projects
stats
contact
clear
```

Easter egg:

```text
sudo hire shakthi
```

Response should be playful but professional.

---

# 25. Connect

Keep this section extremely clean.

Links:

GitHub:
https://github.com/ShakthivelB

LinkedIn:
https://www.linkedin.com/in/shakthi-vel-b-5507ba306/

Medium:
https://medium.com/@shakthisv90

Email:

shakthisv90@gmail.com

Use:

```text
LET'S
CONNECT.
```

Large typography.

One strong primary contact action.

---

# 26. Motion System

Motion should be cinematic.

Use:

- Slow globe rotation
- Fade transitions
- Horizontal text reveals
- Small hover movement
- Arrow translation
- Border opacity transitions

Avoid:

- Bouncing
- Excessive floating
- Constant pulsing everywhere
- Random particle explosions
- Spinning cards

Animation principle:

> Motion should reveal hierarchy, not compete for attention.

---

# 27. Scroll Experience

Each major section should feel like entering a new chapter.

Use:

- Large typography transitions
- Section numbers
- Horizontal separators
- Controlled reveals

Example:

```text
01 — MISSION
02 — CASE STUDIES
03 — RESEARCH
04 — BLOGS
05 — CERTIFICATIONS
06 — TOOLKIT
07 — JOURNEY
08 — TERMINAL
09 — CONNECT
```

---

# 28. Responsive Design

Desktop:

- Editorial grid
- Overlapping composition
- Large globe
- Large typography

Tablet:

- Reduce overlap
- Maintain hierarchy

Mobile:

- Stack content cleanly
- Keep globe smaller
- Use large typography carefully
- Navigation becomes compact
- Do not simply shrink the desktop design

The mobile design should feel intentionally designed.

---

# 29. Technical Implementation

Frontend:

```text
React
Vite
TypeScript
```

Styling:

```text
Tailwind CSS
```

Animation:

```text
Framer Motion
```

Globe:

Prefer:

```text
React Three Fiber
Three.js
```

Use a fallback if WebGL is unavailable.

Keep the portfolio primarily static.

Do not introduce a backend unless needed for:

- Protected API keys
- Real-time external security data
- Dynamic content requiring server-side handling

---

# 30. Performance Requirements

The design is visually ambitious, so performance matters.

Requirements:

- Lazy load heavy sections
- Load the globe efficiently
- Respect prefers-reduced-motion
- Avoid excessive post-processing
- Avoid massive image assets
- Maintain smooth scrolling
- Optimize mobile performance

The globe should never make the portfolio unusable.

---

# 31. Accessibility

Ensure:

- Keyboard navigation
- Visible focus states
- Sufficient contrast
- Reduced-motion support
- Semantic HTML
- Proper labels
- Accessible external links

Do not sacrifice usability for aesthetics.

---

# 32. Strict "Do Not Do" List

## 32a. Scoped exception — cursor-spotlight binary layer

One narrow, deliberate exception exists to the "no random binary
backgrounds" rule below: `src/components/BinaryMatrixBackground.tsx`
renders a layer of faint `0`/`1` glyphs behind all page content, but it
is invisible and inert until a click or tap lands on open background.
That triggers a single "pop": a small spotlight radius opens with a
slight overshoot plus a brief green glow flash (via a CSS mask on an
animated `--spot-r` custom property), holds for about a second, then
eases shut. A click/tap on a card or on text/interactive content never
triggers it — it only ever pops over genuinely empty background, never
behind or through content, and behaves identically for touch taps on
mobile. Glyph color uses the site's own accent green (brighter/glowing,
by explicit user decision), not a second competing color. It is skipped
under `prefers-reduced-motion`. This is decorative texture confined to
a single content-avoiding click/tap pop, not a literal "random binary
background" filling the site — see CLAUDE.md §46a for the fuller
rationale.

Do NOT:

- Turn the site into a generic hacker terminal
- Use Matrix green
- Use blue/cyan neon everywhere
- Add random binary backgrounds (beyond the scoped exception above)
- Add fake terminal logs
- Add meaningless cybersecurity statistics
- Add fake live attacks
- Put every section inside a rounded card
- Use excessive glassmorphism
- Use too many gradients
- Use too many accent colors
- Copy the reference site's exact layout or branding
- Add animations just because animation is possible

---

# 33. Final Design Goal

The visitor should feel:

> "This is not another cybersecurity student portfolio."

The portfolio should look like a carefully designed **security-focused personal operating environment**.

It should combine:

- Premium editorial design
- Cybersecurity visual language
- Real technical work
- Authentic personal story
- Strong investigation identity
- Modern interaction

The design should be:

**DARK**
**EDITORIAL**
**PRECISE**
**MINIMAL**
**TECHNICAL**
**CONFIDENT**

Not loud.

Not cluttered.

Not fake.

---

# 34. Acceptance Checklist

## Visual

- [ ] Near-black background dominates
- [ ] White typography provides contrast
- [ ] One accent color is used sparingly
- [ ] Large condensed typography creates hierarchy
- [ ] Thin technical borders structure the page
- [ ] No excessive rounded cards

## Globe

- [ ] Globe is clean
- [ ] No blue polygon shell
- [ ] Bengaluru is geographically accurate
- [ ] Marker follows the Earth
- [ ] Globe remains performant

## Content

- [ ] IBM / AusNet information is accurate
- [ ] Projects link to the correct repositories
- [ ] GitHub link is correct
- [ ] LinkedIn link is correct
- [ ] Medium link is correct
- [ ] Certifications match the resume
- [ ] Statistics match the provided information

## UX

- [ ] Desktop is polished
- [ ] Mobile is intentionally designed
- [ ] Navigation works
- [ ] Motion is subtle
- [ ] Site remains fast
- [ ] Accessibility is maintained

---

# Final Instruction for Implementation

Before changing the existing portfolio, first inspect the current project structure and identify:

- Existing components
- Existing theme variables
- Globe implementation
- Animation system
- Navigation structure

Do not rewrite the entire project unnecessarily.

Refactor the existing portfolio gradually toward this design system.

Prioritize in this order:

1. Global visual system
2. Hero and globe composition
3. Typography
4. Layout and framing
5. Case studies
6. Research and blogs
7. Certifications
8. Toolkit
9. Journey
10. Terminal and Connect

After every major visual change:

- Run the project
- Check desktop
- Check mobile
- Fix layout overflow
- Check performance
- Avoid introducing TypeScript errors
