# Experience Principles

> The permanent source of truth for *why* this portfolio looks and behaves the way it does. Every future design decision — homepage, case studies, navigation, motion, typography — should be tested against these 7 principles before it ships. Synthesized from patterns across `docs/project-vision.md`, `docs/homepage-strategy.md`, `docs/content-strategy.md`, `docs/homepage-wireframe.md`, `docs/information-architecture.md`, and `docs/decisions.md` — not invented in the abstract. Each principle traces to a specific, real decision already made in this project.

---

## 1. Results Earn the Read

**Statement:** Every piece of content must prove its value before asking for more attention — outcomes come before process, not after.

**Why it matters:** Recruiters and hiring managers are time-constrained; they grant attention in proportion to what they've already received. `docs/homepage-strategy.md`'s audit found the opposite pattern on the original live site — outcomes buried at the end of long process narratives — and named it the single biggest weakness against the project's own success criteria. This principle exists because burying the reward is exactly what this portfolio is designed not to do.

**What this means in practice:** Any new content block must lead with its payoff — the number, the result, the decision made — before the buildup. This applies at every scale: a whole page, a section, a paragraph, even a single sentence.

**Examples:**
- *Homepage:* flagship case studies are teased with a one-line outcome, not a project title.
- *Navigation:* "Work" leads directly to case studies, not to a portfolio-philosophy landing page.
- *Case studies:* results-first structure — the process narrative follows the outcome, not the other way round.
- *Animations:* a hero reveal should surface outcome-bearing words fastest, not decorative elements.
- *Typography:* the boldest weight on any page lands on the outcome statement, not the section label.
- *Interactions:* expanding a case-study card reveals more evidence for the outcome already stated — never an entirely new claim.
- *Writing:* headlines are verbs and numbers, not adjectives — "reduced steps by 30%," not "innovative onboarding flow."
- *Accessibility:* the outcome is in the first announced heading of a section for screen-reader users too, not buried after a long image description.

**Anti-patterns:**
- A case study opening with "The Challenge" before any result is stated.
- A hero animation that plays for several seconds before any legible headline text appears.
- A true metric presented in the fourth paragraph instead of the first sentence.

---

## 2. Curated, Not Exhaustive

**Statement:** Showing less, deliberately, is itself evidence of seniority — an exhaustive archive reads as junior, a curated set reads as considered.

**Why it matters:** `docs/homepage-strategy.md`'s audit found the original flat 11-project grid read as "a portfolio archive, not a curated argument for seniority." Cutting to 5 flagship projects wasn't a content-availability decision — it was a credibility decision. Curation *is* the argument being made.

**What this means in practice:** Adding a new visible element to a page is a decision that needs a "why this, why now, why here" answer — never a default. Every project, page, or feature must earn its visual weight; nothing gets equal treatment by default.

**Examples:**
- *Homepage:* 5 flagship vs. 6 secondary vs. 1 brand teaser — three visibly different weights, not one flat list.
- *Navigation:* 3 primary items (Work, About, AI in Design), not the original site's 5 — "Brand identity design" didn't earn a standalone slot on audit.
- *Case studies:* the secondary tier gets condensed treatment, never padded to flagship length just to look complete.
- *Animations:* the motion budget itself is curated — not every element animates just because it can.
- *Typography:* a restrained type scale, used consistently, rather than a large scale reached for indiscriminately.
- *Interactions:* "More work" stays visually quiet rather than competing for the same clicks as the flagship section.
- *Writing:* if two sentences say the same thing, one goes — every time.
- *Accessibility:* fewer, better-labeled landmarks and headings beat an exhaustive structure that mirrors every visual division.

**Anti-patterns:**
- Adding a new homepage section because the content exists, without asking whether it deserves flagship-level attention.
- Restoring all 11 projects to equal-weight display because "it's all real work."
- A visual hierarchy where every element is emphasized — which is the same as nothing being emphasized.

---

## 3. Honesty Is the Credibility Strategy

**Statement:** Disclosed limitations and real numbers build more trust than a flawless-sounding narrative — nothing on this site claims more than what's true.

**Why it matters:** `docs/content-strategy.md`'s Hiring Manager persona is specifically *more* convinced by Restore for Retail's disclosed "assumption-based research" gap than by a spotless narrative — this is the actual reasoning behind a real content decision, not a hypothetical. Combined with the hard "no invented numbers" rule running through every case-study requirement, and OUA being framed as "under NDA" rather than dressed up as a thin case study, this project treats honesty as a persuasion mechanism, not a compliance checkbox.

**What this means in practice:** Every claim must be traceable to something real and citable. Constraints, gaps, and assumptions get named plainly rather than glossed over. A weak case study stays honestly weak rather than being inflated to match the flagship tier.

**Examples:**
- *Homepage:* the client logo strip only shows work with a genuine, disclosable relationship behind it.
- *Navigation:* no page promises content it doesn't yet have — no "coming soon" as a permanent destination.
- *Case studies:* process sections name real constraints and trade-offs, not sanitized ones.
- *Animations:* no loading or progress animation implies more computation or rigor is happening than actually is.
- *Typography:* no typographic trick — fake pull-quotes, invented stat callouts — manufactures authority a claim doesn't have.
- *Interactions:* a metric that can't be substantiated doesn't get a "hover to reveal source" treatment implying substantiation exists.
- *Writing:* "under NDA" instead of a vague non-answer; "this research was assumption-based, not tested" instead of silence.
- *Accessibility:* alt text describes what's actually in an image, not an idealized version of it.

**Anti-patterns:**
- Rounding a real metric up because the rounder number "sounds better."
- Case-study copy implying user testing happened when it didn't.
- Treating OUA's NDA status as something to hide or minimize rather than state plainly.

---

## 4. Leadership Is Shown, Not Claimed

**Statement:** Seniority is demonstrated through evidence of what was owned and driven — never asserted through a title or an adjective.

**Why it matters:** This traces to a real correction logged in `docs/decisions.md`: `project-vision.md` originally targeted "Lead Product Designer" roles, a people-management title, but the actual evidence in this portfolio — ANZ's squad leadership, Goodwork's design-system governance — is practice-level ownership, not headcount. The vision was corrected to match the evidence, rather than stretching the evidence to match an aspirational title. That set the pattern for how leadership gets communicated everywhere else on the site.

**What this means in practice:** No copy should ever say "led," "senior," or "expert" as a bare claim. Every leadership signal must attach to a specific, checkable action — what was actually done, with whom, under what constraint.

**Examples:**
- *Homepage:* no "Lead Product Designer" self-description in the hero — the positioning statement is built from outcomes, not title language.
- *Navigation:* "AI in Design" is framed as a demonstrated point of view (a real page of real thinking), not a claimed credential.
- *Case studies:* Goodwork's leadership signal is "ran tech-feasibility sessions with engineers, established design-system governance" — verbs and nouns, not "led the team."
- *Animations:* if a leadership moment were ever animated, it should reveal a specific action, never a badge-style flourish.
- *Typography:* no all-caps "SENIOR" or "EXPERT" label treatments — evidence doesn't need shouting.
- *Interactions:* no self-graded skill bars or competency ratings — those are claims, not evidence.
- *Writing:* replace every seniority adjective with the specific action that justifies it, before publishing.
- *Accessibility:* evidence-based copy tends to be more concrete and easier to parse for all readers, screen-reader users included — a secondary but real benefit of this principle.

**Anti-patterns:**
- A "Skills" section with self-rated proficiency levels.
- Hero copy that opens with a job title as the positioning statement — the exact mistake the original site makes.
- Case-study copy that says "I led the redesign" without naming what leading actually involved.

---

## 5. Every Element Earns Exactly One Job

**Statement:** Before anything ships, its single job must be nameable in one sentence — if it's doing two jobs, or none, it isn't ready.

**Why it matters:** This is the most concretely evidenced principle in the project's own history. The homepage's AI-in-Design section drifted into an undefined second job — "leadership proof point" — carried across four separate documents, until someone asked directly what content actually populated the "leadership" half. There wasn't an answer, because the case studies above it were already doing that job (see `docs/decisions.md`, 2026-07-08). The fix wasn't more content — it was subtraction: dropping the undefined second job and keeping the one job the section could actually do.

**What this means in practice:** Before adding any section, component, or interaction, write its job in one sentence. If that sentence needs an "and," or the job is already being done elsewhere on the page, the element needs to be cut, merged, or redefined before it ships — not after.

**Examples:**
- *Homepage:* the client logo strip's job is "2-second trust signal" — it deliberately doesn't also try to link to case studies, since that job is already assigned elsewhere.
- *Navigation:* each of the 3 primary items maps to exactly one job (Work = evidence, About = personal texture, AI in Design = forward-thinking POV) — none overlap.
- *Case studies:* the outcome statement's job is proof; the process narrative's job is reasoning. Neither should do the other's job.
- *Animations:* a page-load reveal's job is to draw the eye to the headline in sequence — not simultaneously to be a branding flourish.
- *Typography:* a type style built for one job (an outcome statement) shouldn't be reused for a different job (a section label) just because it looks good there too.
- *Interactions:* a hover state's job is to signal that something is clickable — it shouldn't also be the only way to reveal content a scanning reader needs.
- *Writing:* a sentence's job is one idea — if it's doing two, split it.
- *Accessibility:* an ARIA label's job is to state what an element does — it shouldn't also carry marketing copy absent from the visible content.

**Anti-patterns:**
- A section whose purpose can't be stated in one sentence without "and."
- Two different sections both trying to carry "leadership signal" — the actual mistake this principle is named after.
- A component reused for a job it wasn't designed for, because building a new one felt like more work.

---

## 6. Depth Is Opt-In, Never Forced

**Statement:** The homepage gives the fastest reader everything they need in 30 seconds; every deeper layer is something a reader chooses to open, never something forced into their first scan.

**Why it matters:** The whole information architecture is a graduated-disclosure funnel, built persona-first: the Recruiter (30–60 seconds) gets what they need from the homepage alone; the Hiring Manager self-selects into 1–2 full case studies; the Design/Product Leader self-selects into the AI-in-Design page and the leadership signal already embedded in case studies. Forcing depth onto the fastest reader would fail the exact persona the homepage strategy was built to satisfy first.

**What this means in practice:** The homepage must never require a click to understand the core pitch. Every additional layer of detail — a full case study, the About page, the AI-in-Design page — should be reachable, not mandatory: an invitation, not an obstacle.

**Examples:**
- *Homepage:* outcome-first teasers are complete and convincing on their own, without opening a case study.
- *Navigation:* About and AI in Design are one click away, never inserted into the primary scroll path.
- *Case studies:* the outcome is understandable without reading the full process section — process rewards a reader who stays, it doesn't gate the headline result.
- *Animations:* progressive reveal (expand-on-click) is fine for secondary detail; it should never be the only way to access primary information.
- *Typography:* a clear hierarchy — headline → outcome → detail — lets a reader stop at any point and still have gotten something real.
- *Interactions:* "read more" patterns are for genuinely optional depth, never for information a scanning reader actually needs to judge the work.
- *Writing:* front-load every paragraph so a reader who stops after the first sentence hasn't missed the point.
- *Accessibility:* solid heading structure and skip-links let any reader, sighted or not, stop at any level and have received a complete unit of meaning.

**Anti-patterns:**
- A homepage teaser that only makes sense after clicking into the full case study.
- A real outcome metric hidden behind a hover or accordion with no visible affordance.
- An About-page detail treated as required reading to judge whether the work is credible.

---

## 7. Motion Must Mean Something

**Statement:** Animation is only justified when it reveals meaning a static state couldn't — never as decoration for its own sake.

**Why it matters:** This was tested directly during the hero motion concept exploration: even the boldest concept considered (Kinetic Typographic Emphasis) ties its motion specifically to outcome-critical words in the headline, not arbitrary flourish — and a minimal, near-static concept was deliberately built and treated as a genuine contender, not a fallback included to look thorough. `docs/project-vision.md`'s instruction to "avoid unnecessary decoration, trends or visual clutter" applies with particular force to motion, since motion is the easiest place for decoration to sneak in disguised as polish.

**What this means in practice:** Before adding any animation, name what it reveals that a static equivalent wouldn't. If the honest answer is "it looks nice," the animation doesn't ship. Restraint — including choosing no motion at all — is a real, competitive option every time, not a default only reached for when out of ideas.

**Examples:**
- *Homepage:* the hero reveal sequence exists to draw attention to the outcome statement in the right order, not to demonstrate animation capability.
- *Navigation:* no decorative hover animations on nav items beyond what signals interactivity.
- *Case studies:* a metric counting up from zero is justified only if the counting itself communicates scale — otherwise the number should just be there.
- *Animations:* `prefers-reduced-motion` is always respected — meaning has to survive the animation being turned off, because for some readers it will be.
- *Typography:* no animated text effects (typewriter, scramble-reveal) unless the effect itself communicates something the words alone don't.
- *Interactions:* hover/focus states confirm interactivity, they don't perform for their own sake.
- *Writing:* no copy should be written assuming an animation will do work the words should be doing themselves.
- *Accessibility:* any motion long enough to be distracting must be skippable or reducible — meaning shouldn't cost usability for motion-sensitive readers.

**Anti-patterns:**
- An animation added during visual polish with no stated purpose beyond "it looks nice."
- A page-load sequence long enough to annoy a returning visitor on their second visit.
- Motion applied to something that already communicated clearly in its static state, purely for consistency with other animated elements.

---

## Evaluating New Design Decisions

Run every new feature, section, or interaction against all 7 before building it:

1. **Results earn the read** — Does this lead with the outcome/result before the buildup?
2. **Curated, not exhaustive** — Does this deserve its visual weight, or is it here by default?
3. **Honesty is the credibility strategy** — Is every claim here traceable to something real?
4. **Leadership is shown, not claimed** — Is any seniority signal backed by a specific, checkable action?
5. **Every element earns exactly one job** — Can this element's job be stated in one sentence, with no "and"?
6. **Depth is opt-in, never forced** — Can the fastest reader get the point without clicking this open?
7. **Motion must mean something** — If this animation were removed, would meaning be lost — or just decoration?

If a proposed design decision fails any of these, it should be questioned before it's built — not defended after.
