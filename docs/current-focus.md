# Current Focus

## Phase

Information Architecture

## Objective

Define the site's sitemap, navigation, page templates and routing structure before `design-system.md` begins, grounded in a discovery pass (personas, content strategy, live-site audit) rather than assumption.

Remain in Plan Mode for routing/component implementation.

Do not write production code until the IA doc and `content-strategy.md` are settled.

## Tasks

* Confirm the flagship/secondary/NDA project tiers (done — see `docs/decisions.md`).
* Draft lightweight personas for the three named audience segments (done — see `docs/content-strategy.md`).
* Audit any live-site content not covered by the original homepage audit (done — Brand Identity page audited, real content found, kept as a lightweight standalone section).
* Define per-page content requirements (done — `docs/content-strategy.md`).
* Finalize the sitemap, navigation, and Next.js routing/data-model structure.
* Write `docs/information-architecture.md`.

## Deliverables

* `docs/content-strategy.md` — personas and per-page content requirements.
* `docs/information-architecture.md` — sitemap, navigation, routing/data-model structure.

Present both for review before scaffolding any routes or components.

## Constraints

* Ground IA decisions in the personas and content strategy, not assumption (per `CLAUDE.md`'s "Discovery Before Strategy").
* Do not fabricate metrics or content — only use what's genuinely published or confirmed.
* Wait for approval before implementation.
