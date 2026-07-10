# Content Strategy

> This doc exists to close a gap found during the Information Architecture pass: routing and page-template decisions were being made before anyone had defined what each page actually needs to contain, or who it needs to convince. See `docs/project-vision.md` for goals/audience and `docs/homepage-strategy.md` for the approved homepage direction (Concept 1: Outcomes-First Strategist).

## Personas

Lightweight, built from `project-vision.md`'s named audience segments — not a full research exercise, but enough to make IA and content calls (ordering, depth, what earns a click) on evidence rather than guesswork.

### 1. The Recruiter
Screening 30–50 profiles for a shortlist; ~30–60 seconds per portfolio unless something stops the scroll. Needs to confirm: right seniority level, right domain experience, this is a real practicing designer. Convinced by: a clear title/level signal, a couple of recognizable client names, clean scannable layout. Bounces immediately on a generic hero or a dead first link (the original OUA problem).

### 2. The Hiring Manager
Past the recruiter filter, spending 3–5 minutes, reading 1–2 case studies in depth before a phone screen. Needs to confirm: this person can actually do the job — process rigor, how they handle trade-offs, whether outcomes are real or vague. Convinced by: reasoning shown, not just screens; honesty about limitations (e.g. Restore for Retail's disclosed "assumption-based research" gap) reads as more credible than a spotless narrative.

### 3. The Design/Product Leader
Evaluating for a **Senior IC role, or a role where the designer leads design in practice** — within a squad or across a small org — **not a people-management/team-lead role** (per `project-vision.md`, corrected 2026-07-08). Needs to confirm: can this person own ambiguous problems and drive them cross-functionally without formal authority. Convinced by: evidence like ANZ (leading design within a larger org's squad structure) or Goodwork (running testing/tech-feasibility sessions, setting a design-system baseline) — ownership and cross-functional pull, not team size or reports managed.

## Per-Page Content Requirements

### Home (`/`)
- Hero: outcomes-first positioning statement (not a job-title sentence) + the personal creative-origin story as a short subhead hook.
- Client/company logo strip: ANZ, MYER, VicSuper, Goodwork, ACEM, Restore — logo marks only, no case-study links from here (that's what the flagship/secondary sections are for). Addresses a specific gap named in `homepage-strategy.md`'s audit: "zero social proof — no testimonials, no client logos." Kept quiet/compact by design — a 2-second trust signal, not competing content. OUA excluded (NDA). Logo assets themselves still need to be sourced — not blocking the wireframe, but blocking before real implementation.
- 5 flagship case studies, hand-curated narrative order, each teased with a one-line **outcome**, not a title. Leadership/systems-thinking signal (Goodwork's design-system governance, ANZ's squad context) is woven into these case studies — not a separate homepage element.
- AI-in-Design teaser: headline + one-line hook + link through to `/ai-in-design`. Its job is specifically to surface that page (currently buried in the live site's nav) — not a general "leadership" section; leadership signal is already covered by the case studies above.
- "More work" section (lower visual weight): 5 secondary projects + OUA summary.
- Footer CTA band: email, CV download, LinkedIn.
- **Must satisfy the Recruiter in the first 30 seconds** — this page is written for the fastest, least patient persona; deeper personas self-select into case studies from here.

### Flagship case study (`/work/[slug]`, tier = flagship)
- Leads with outcome/result, not chronological process (per the results-first pattern in `homepage-strategy.md`).
- Real metrics, sourced only from what's already published — no invented numbers.
- Process narrative follows the outcome, written for the Hiring Manager: show reasoning and trade-offs, not just deliverables.
- Where relevant, surface leadership/cross-functional signal for the Design/Product Leader (e.g. Goodwork's design-system governance, ANZ's squad context) — but don't force it where the project doesn't support it.
- Year labeled visibly (mitigation for the 2018–2024 recency spread, per `homepage-strategy.md`).

### Secondary case study (`/work/[slug]`, tier = secondary)
- Same template, condensed: outcome-first where a real metric exists, otherwise honest qualitative framing — not padded to look like a flagship.
- No fabricated metrics to match the flagship format.

### OUA summary (`/work/[slug]`, tier = nda-summary)
- Short paragraph, NDA badge/label — reads as "under NDA," not "weak case study."
- Content not yet drafted; needs a decision on what the NDA actually permits disclosing (unresolved, see `docs/decisions.md`).

### Brand & Identity (lightweight standalone section, decided 2026-07-08)
- Rebel Lemming: full case study, on its own visual footing from the UX/product case studies since it's a different skill set.
- The Neuropsychology Practice: teaser only until its case study is written — don't link to a "coming soon" dead end (same OUA lesson: don't launch dead links as first click).

### About (`/about`)
- Personal narrative: murals, skateboard art, Graphic Communication study, into UX. Written for texture/memorability (serves Concept 2's fold-in), not as the primary persuasion page — the Recruiter and Hiring Manager aren't required to visit it to be convinced.

### AI in Design (`/ai-in-design`)
- Thought-leadership content, promoted from a buried nav item to primary nav (per `homepage-strategy.md` Concept 3 fold-in).
- Primary audience is the Design/Product Leader persona — proof of forward-thinking practice, not aimed at the Recruiter.

### Contact (footer band, not a page)
- Email, CV download, LinkedIn — unchanged from current site. No persona needs more than this; adding a dedicated page would add a click with no persuasion benefit.

## Open Items

- OUA summary copy — blocked on NDA scoping (see `docs/decisions.md`).
- Flagship case-study rewrites (MYER, VicSuper) to foreground reasoning over the raw metric — flagged in `homepage-strategy.md` Next Steps, not started.
- ~~Exact hand-curated ordering of the 5 flagship case studies~~ **Done** — see `docs/decisions.md`.
- Client logo assets (ANZ, MYER, VicSuper, Goodwork, ACEM, Restore) — need to be sourced before real implementation of the homepage logo strip.
