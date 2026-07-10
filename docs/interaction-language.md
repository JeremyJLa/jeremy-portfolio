# Interaction Language

> The definitive reference for *how this site behaves* — the equivalent of a brand style guide, but for interaction, motion and response. This document does not define what the site looks like (`design-system.md`) or what it contains (`docs/information-architecture.md`); it defines how it moves and reacts. Grounded in `docs/project-vision.md`, `docs/homepage-strategy.md`, `docs/experience-principles.md`, and `docs/information-architecture.md` — every rule here should be traceable to one of those, not invented independently.

---

## 1. Interaction Philosophy

This site should behave the way a considered senior product designer would build a product: nothing arbitrary, nothing included to impress, everything present because it clarifies something a static state couldn't. Every interaction is a small act of communication, not decoration — `docs/experience-principles.md`'s Principle 7, "Motion Must Mean Something," is the constitution this entire document exists to enforce in practice.

The interaction language is what makes the site feel like *one product, built by one hand* — visitors should never sense a seam between pages, as though different components were styled by different people at different times. Where the visual design system expresses personality through color and type, this document expresses the same personality through timing, easing and response.

Per `docs/project-vision.md`, the site should feel:

**Calm · Intentional · Refined · Confident · Understated · Human · Responsive · Premium**

And should never feel:

**Trendy · Flashy · Distracting · Over-animated · Gimmicky**

Every rule below exists to keep the left list true and the right list false — including under revision, six months from now, by someone who wasn't in the room for these decisions.

---

## 2. Motion Principles

**Purpose of motion.** Motion exists only to reveal orientation (where did this come from, where did it go), hierarchy (what should I look at first), or feedback (did my action register) — never to imply progress, sophistication, or effort that isn't real. This is `docs/experience-principles.md`'s Principle 3, "Honesty Is the Credibility Strategy," applied to motion specifically: an animation that performs busyness it doesn't actually contain is a small lie, the same category of problem as an inflated metric.

**Pacing.** Fast enough to feel responsive and confident; slow enough to stay legible. When in doubt, err quick — a considered senior designer doesn't hesitate, and nothing on this site should make a visitor wait to see something they've already earned the right to see.

**Hierarchy.** Motion sequencing is content hierarchy made visible over time. Outcome-bearing elements move or resolve first; supporting elements follow. This directly extends Principle 1, "Results Earn the Read," into the time dimension — the sequence in which things settle *is* a statement about what matters most.

**Anticipation.** Used sparingly and subtly — a hover might carry the barest pre-signal that something is about to respond, but nothing should have an exaggerated wind-up. A visible "getting ready to move" moment reads as playful or game-like, which contradicts the premium/understated register this site is built for.

**Continuity.** An element's identity should persist through a transition. If a homepage card becomes a case-study hero, it should feel like the *same object* changing state — shared position, shared scale reference — not a hard cut to something new. The visitor should never lose their place.

**Focus.** Motion directs attention to exactly one thing at a time. Two simultaneous, competing movements split attention and communicate nothing clearly. This is Principle 5, "Every Element Earns Exactly One Job," applied to a single moment in time: a given animation either draws the eye to the thing that matters right now, or it doesn't happen.

**Emotional tone.** Calm confidence — the register of someone who has already proven themselves and isn't performing for the room. Never anxious or urgent (no pulsing "look at me" attention-grabbers), never playful or bouncy (undermines seniority), never cold or mechanical either — this is a human portfolio, not enterprise software. Warmth comes from gentle, considered easing, not from personality-driven bounce.

---

## 3. Motion Characteristics

Described in relative, qualitative bands rather than exact specification — precise values belong in implementation, not in the document that should outlive any one implementation.

**Duration ranges.**
- *Micro-feedback* (hover, focus, press states) — near-instant, felt rather than watched.
- *Local transitions* (a card expanding, a menu opening) — brief; quick enough to feel responsive, long enough to stay legible.
- *Page- or hero-level moments* — the longest motion anywhere on the site, and still short. A visitor should never feel like they are waiting on the interface.

**Easing philosophy.** Motion decelerates into rest. Nothing ends abruptly, nothing overshoots, nothing bounces. Ease-out dominates anything appearing or settling; ease-in-out governs anything moving between two established states. Linear motion is avoided (reads mechanical and cheap); spring/elastic/bounce easing is avoided site-wide (reads playful, undermines "understated" and "premium") — with room for exactly one rare, deliberate exception if a single signature moment ever earns it. Boldness gets spent in one place, not scattered everywhere.

**Acceleration / deceleration.** Arriving content decelerates as it settles — it deserves a considered pace. Departing content accelerates away — it no longer needs the visitor's attention and shouldn't linger asking for it. This asymmetry is itself a deliberate choice, not an oversight.

**Opacity behaviour.** Fades are the default, quiet transition tool. Nothing hard-cuts into existence except where instant feedback is explicitly required (a button's pressed state, for instance). Opacity changes are typically paired with a subtle position or scale shift rather than carrying the whole transition alone — the same combination already used in the hero storyboard concepts (fade + slight rise).

**Scale behaviour.** Scale changes stay barely perceptible unless deliberately used for emphasis (as in the Kinetic Typographic Emphasis hero concept). A few percent reads as considered; large scale swings read as flashy.

**Blur usage.** Reserved for depth and focus cues — something coming into focus, or a layer being pushed behind an active one. Never decorative, never a glassmorphism trend application. If blur doesn't communicate a state change, it doesn't belong.

**Layering.** Content lives on a small number of clear depth planes — background, content, active/overlay — not an arbitrary stack of z-indexes. Motion between planes should always be legible: a visitor should be able to tell, at a glance, which plane just changed and why.

---

## 4. Page Transitions

**Entering pages.** New content should feel like a continuation of the click that led there, not a hard reload. Where feasible, the clicked element's identity carries through (a card's image or position connecting to the destination page) rather than a jarring full-page flash. Quick, always.

**Leaving pages.** Exit quickly and quietly. No elaborate choreography on the way out — the destination is what matters, not a goodbye performance.

**Scrolling.** Native, smooth, physically believable. No scroll-jacking, no artificial pacing that overrides the visitor's own input — this is a hard rule, not a style preference, and it follows directly from Principle 6, "Depth Is Opt-In, Never Forced": the visitor controls their own pace through the page, always. Content may reveal as it enters the viewport, but the scroll gesture itself is never hijacked, slowed, or sped up.

**Navigation transitions.** Moving between primary destinations (Work · About · AI in Design) is a lateral move between peers, not a journey — these should be the lightest, quietest, most immediate transitions anywhere in the system.

---

## 5. Hover Language

**Buttons.** A clear, immediate, confident state change (subtle fill or weight shift) signaling "this will act." No large movement, no delay.

**Links.** Understated — a quiet underline or color/weight shift. Never a bounce, never a scale change. Text behaves like text.

**Cards (project cards generally).** A small, considered lift or shadow/emphasis shift signaling "there is more here." The intensity of this response should be proportional to the card's actual weight in the hierarchy — a flagship case-study card can carry slightly more presence in its hover state than a "More work" card, the same curation logic from Principle 2 expressed through interaction rather than layout.

**Images.** Rarely animate for their own sake. If anything, an extremely subtle scale or brightness shift — never the generic portfolio-hover-zoom cliché, which is decoration, not communication.

**Navigation.** Quiet and immediate. A nav item's hover state should never try to preview or compete with the page content below it.

**Project cards (flagship specifically).** Since these carry the most persuasive weight on the homepage, their hover state may reveal one additional piece of evidence (a metric becoming slightly more prominent, for instance) — but hover only *adds*, it never *gates*. The outcome teaser must already be fully readable without any interaction at all, per Principle 6.

---

## 6. Scroll Behaviour

Scrolling should feel effortless and entirely native — this cannot be overstated; it is the single most-used interaction on the site and the easiest place to quietly damage trust if it feels engineered. Elements may reveal briefly as they enter the viewport (a fade and slight rise, consistent with what the hero storyboards already established), but this reveal must never delay a visitor from reading something they've already scrolled to see.

Movement should reinforce the hierarchy already set by the IA: the flagship case-study section — the dominant element on the page — can carry a slightly more present scroll-reveal than the "More work" row, which should feel calmer and quieter, matching its deliberately lower visual weight. Curation, again, expressed through motion budget rather than only through layout.

Section-to-section transitions (hero into the logo strip, flagship into the AI-in-Design teaser, and so on) should read as natural continuation — no jarring background-color snaps, no abrupt layout jumps that make a visitor feel like they landed on a different site mid-scroll.

---

## 7. Homepage Animation

**Status:** committed, per `docs/decisions.md` (2026-07-09, superseding the earlier "future/optional" status). **"The Projection"** — the homepage opens in a real, physical creative space (a room with a guitar and amp) rather than a digital interface; a small projector powers on and casts the portfolio onto the wall, which becomes the hero. The metaphor: **Creative Space → Ideas → Digital Product.** This supersedes `docs/homepage-wireframe.md`'s text-forward, no-imagery hero premise and deprioritizes the 3 typographic storyboard concepts (Quiet Staggered Reveal, Kinetic Typographic Emphasis, Minimal/Restrained) built earlier — those remain a valid fallback direction if Key Visuals production is ever blocked for too long, but are not the active plan.

**Sequence (10 frames, reference timing):**

| Frame | Moment | Time | Interaction |
|---|---|---|---|
| 1 | Initial state — room in natural light, wall blank | 0.0s | None |
| 2 | Room darkens — ambient light subtly fades | 0.6s | None |
| 3 | Projector powers on — LED, beam, dust in the light | 1.2s | None |
| 4 | Projection appears — soft blurred rectangle on the wall | 1.8s | None |
| 5 | Focus — projection sharpens, typography and nav resolve | 2.6s | None |
| 6 | Interactive state — nav/CTA live, cursor appears, hover works | 3.4s | Hover/click enabled |
| 7 | Click "View projects" — camera begins push-in | 4.2s | Click |
| 8 | Move through the projection — room dissolves | 4.8s | None |
| 9 | Transition to digital — physical room gone, now inside the portfolio | 5.4s | None |
| 10 | Portfolio experience — full site, seamless arrival | 5.8s+ | Full site interactive |

The site is genuinely interactive by **frame 6 (3.4s)** — frames 7–10 only play out if the visitor chooses to click through; a visitor who starts interacting with the nav or scrolling isn't blocked waiting for frames 7–10 to finish.

**Visual direction:** warm, low-key lighting with natural shadows; earth tones, timber, subtle texture; typography clean, modern, calm; the projection itself should feel analog, not digital — a real photographed room with subtle filmic treatment, not an illustration.

**Motion direction:** all motion slow, intentional, cinematic; ease in/out with natural acceleration (no linear motion, no bounce/spring, consistent with Section 3); projection edges carry slight keystone distortion and softness for physical believability; dust particles visible in the beam; camera movement is minimal but purposeful (a push-in, not a swoop).

**Production approach:** built in Next.js + Tailwind, animated with Framer Motion. The room photo is a real photograph (not a stock image or illustration) used as the base layer; the projection itself is simulated via CSS blend modes, grain, keystone distortion, and light falloff toward the corners — not a plain HTML overlay on top of the photo, which would read as flat and undermine the "physically believable projector" premise the whole concept depends on.

**Key Visual (Stage 3, committed):** `public/images/backgroundimage-light.png` (1536×1024). Composition, left to right: framed art + amp (+ a dark object beside it reading naturally as the projector) occupy roughly the left ~25% of the frame; the empty wall — the projection surface — spans roughly the middle 25%–78% of the frame width, full height from just below the ceiling line to the floorboards; the guitar hangs in the right ~20%. This zone (roughly the middle half of the frame, vertically generous) is where the projected interface renders in frames 4–6. Noted as an open refinement in `docs/decisions.md`: the specific guitar/amp/art in this image are stand-ins for the real photographed objects in `public/images/`, accepted for now to keep Stage 4 moving.

**Constraints carried over from the earlier "future/optional" decision, still binding:** a `prefers-reduced-motion` fallback is mandatory (jumps straight to frame 6's interactive state, no animated path) — see Section 9. The sequence must not replay in full for a returning visitor within the same session. Three details from the reference mockup are explicitly **not** adopted: the "Work About Process Contact" nav (real nav stays Work · About · AI in Design, per `docs/information-architecture.md`), the illustrative hero copy (real copy is Stage 2, not yet written), and the "Selected Work" grid sketch in frame 9 (the flagship section keeps its decided tall-list treatment, not a grid).

**Open dependency:** production-quality Key Visuals require an actual photograph of the real room (guitar, amp, wall) — not a placeholder. See the active staged roadmap for sequencing.

**Room photo brief:**
- *Composition* — wide, static framing (tripod/stable surface, camera level, minimal wide-angle distortion — any keystone/perspective effect is added deliberately in post, not accidental from the lens). A substantial, relatively flat, evenly-lit wall area with nothing on it directly becomes the projection surface; other wall decor can exist elsewhere in frame for texture, just not behind where the interface will sit. Guitar and amp bracket that blank area rather than sitting inside it. Landscape, wide aspect ratio (16:9 or wider) — this becomes a full-bleed hero background across desktop and mobile.
- *Lighting* — soft, even natural daylight (frame 1's "room in natural light" starting state); avoid harsh direct sun causing blown-out highlights or hard shadows on the wall unless deliberate. Only one well-lit base photo is needed — darkening, projector beam, and glow (frames 2–4) are built afterward as CSS/JS overlays and grain, not shot separately.
- *Technical* — highest resolution available; a modern phone camera is fine, but shoot large. Export as high-quality JPEG/PNG, minimal compression. A few angle/framing variations are worth capturing before committing to one.

---

## 8. Micro-interactions

**Cursor.** Default system cursor in essentially all cases. A custom cursor is a trend risk with no clear communicative purpose here — skip it entirely unless a specific interaction genuinely needs one (e.g. signaling a draggable comparison), which nothing currently planned does.

**Loading.** The site is statically generated (`generateStaticParams` throughout, per `docs/information-architecture.md`) — loading states should be rare. Where an image is still resolving, prefer a calm blur-up rather than a spinner; it's the same "coming into focus" motif already used elsewhere, not a new pattern.

**Form feedback.** Any form response is immediate and stated in words — "Message sent," not just an animated checkmark with no text. This is Principle 3, Honesty, applied directly: say plainly what happened.

**Image transitions.** Crossfade or blur-to-focus, never slide or wipe effects, consistent with the focus motif already established in Section 3.

**Case study navigation** (prev/next within a case study). A quiet, directional shift reinforcing that these are an ordered, considered sequence — not a random jump between unrelated pages.

**Project filtering.** Not a currently planned feature (`information-architecture.md` has no filtering UI). If ever added, changes to the visible set should fade calmly rather than reflow jarringly — noted here so a future addition doesn't invent an inconsistent pattern.

**Menu opening** (mobile nav). Quick and clear. No elaborate hamburger-to-X morph performance — open and close with the same confidence as everything else on the site.

**Keyboard navigation.** Focus states are always visible — never suppressed for aesthetic reasons. Tab order follows the same reading order established by Principle 1; keyboard users get the same "results first" experience as everyone else.

---

## 9. Accessibility

**`prefers-reduced-motion`.** Every motion defined in this document has a reduced-motion state — typically the settled end-state appearing directly, with no animated path to get there. This is not a degraded fallback; it's a different valid expression of the same interaction language, still calm and intentional, just without motion as the vehicle.

**Keyboard navigation.** Anything revealed on hover has a focus-triggered equivalent. Nothing on this site is accessible only to a mouse.

**Touch devices.** Hover has no true equivalent on touch. Any information revealed "on hover" must have a touch-accessible alternative — or, better, shouldn't be hover-gated in the first place. This is Principle 6, Depth Is Opt-In, applied literally: hover-gating essential information is a form of forcing, on devices where hover doesn't exist at all.

---

## 10. Interaction Consistency

- **One easing family, used everywhere.** Ease-out dominant, as established in Section 3 — not a different curve invented per component.
- **A small, closed set of duration bands**, reused across the whole site. A new feature reaches for an existing band before inventing a new one.
- **The one-job rule applies to interaction patterns, not just content.** Before adding a new hover or reveal pattern, check whether an existing one (card hover, section scroll-reveal) already does that job. If it does, reuse it.
- **A small, named vocabulary of motion** — fade + rise, focus/blur, scale-emphasis — reused deliberately across contexts, rather than each new element inventing its own novel effect. A visitor should be able to recognize "this is how this site reveals things" within the first couple of interactions, and have that hold true everywhere after.

---

## 11. Anti-patterns

Behaviours that should never appear on this site, regardless of how good they look in isolation:

- **Bounce, spring, or elastic easing anywhere.** Undermines understated, premium, confident — the three words doing the most work in this document.
- **Scroll-jacking or any artificial pacing of the visitor's own scroll.** A hard rule, not a style call.
- **Decorative parallax** — background layers drifting at a different rate purely because it's an available effect, with no connection to the focus/depth motif this document actually endorses.
- **Hover effects disconnected from their content** — a card that shakes, pulses, or otherwise performs without relating to what it contains.
- **Inconsistent timing** — the same category of transition (two different card hovers, say) running at different speeds or easings in different parts of the site. If it's the same kind of moment, it moves the same way.
- **Custom cursors, confetti or celebration effects, autoplaying video or audio, typewriter text effects with no communicative purpose, decorative particle systems.** The generic "AI portfolio" toolkit this project is explicitly built to avoid.
- **A page-load sequence long enough to annoy a returning visitor on their second visit.** If it wouldn't survive being seen twice in one day, it doesn't ship.
- **Any animation with no `prefers-reduced-motion` fallback.** Not optional, not a later pass — part of shipping the interaction, not an accessibility afterthought bolted on.
- **Motion applied to something already clear in its static state**, purely for visual consistency with other animated elements nearby. Consistency is achieved through a shared vocabulary (Section 10), not through animating everything equally.

If a proposed interaction fails any rule in this document, it should be questioned before it's built — the same standard `docs/experience-principles.md` sets for every other design decision on this site.
