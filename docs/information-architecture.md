# Information Architecture

> Grounded in `docs/content-strategy.md` (personas, per-page content requirements) and `docs/homepage-strategy.md` (Concept 1: Outcomes-First Strategist, approved). See `docs/decisions.md` for the flagship/secondary tier resolution, the NDA-as-flag simplification, and the Brand Identity and target-role corrections made during this pass.

## Sitemap & Navigation

**Primary nav: Work · About · AI in Design** (+ footer contact band — kept as a CTA band, not a dedicated page; per the Recruiter persona in `content-strategy.md`, contact shouldn't cost an extra click).

"Brand identity design," the live site's current 2nd nav item, does **not** get a primary nav slot — but unlike the earlier draft of this decision, it isn't dropped either. Audit found real content (Rebel Lemming, a full case study; The Neuropsychology Practice, pending). It's kept as a **lightweight standalone section**, reachable from the homepage but visually separated from the UX/product case studies since it's a different skill set.

- **Home (`/`)** — hero (outcomes-first positioning + creative-origin hook as subhead texture) → **client/company logo strip** (ANZ, MYER, VicSuper, Goodwork, ACEM, Restore — quiet, compact, not a full section in its own right; OUA excluded, NDA) → 5 flagship case studies in hand-curated narrative order: **ACEM CPD Portal → Restore for Retail → Goodwork → MYER → VicSuper** (rationale in `docs/decisions.md`; leadership/systems-thinking signal — Goodwork's design-system governance, ANZ's squad context — is woven into these case studies, not repeated elsewhere) → AI-in-Design teaser (links through to `/ai-in-design`) → "More work" section (5 secondary projects + OUA, lower visual weight, on-homepage, no separate `/work` index) → Brand & Identity teaser (Rebel Lemming) → footer CTA band.
- **Case study detail pages** — all 11 UX/product projects (5 flagship + 6 secondary, OUA included) share one route, `/work/[slug]`, presentation driven by a `tier` field (`flagship` | `secondary`). NDA is not a tier — it's an independent `nda: boolean` flag on the project data. OUA is `tier: 'secondary', nda: true`; its case study content is short (a summary, not a full write-up), same as the plan agreed earlier, but that's just thin content on a secondary-tier project, not a distinct architectural category. Where `nda` is true, a small badge renders on the project card and case study page explaining the short content — independent of tier, so any project (including a future flagship one) could carry it.
- **Brand & Identity detail pages** — `/brand/[slug]`, a separate (much smaller) route family for Rebel Lemming and, once written, The Neuropsychology Practice. Kept separate from `/work/[slug]` rather than forced into the same tier system, since it isn't UX/product work and forcing it into that data shape would misrepresent it.
- **About (`/about`)** — personal creative-origin narrative. Per `content-strategy.md`, written for texture/memorability, not required reading for the Recruiter/Hiring Manager personas to be convinced.
- **AI in Design (`/ai-in-design`)** — existing differentiator, promoted from a buried nav item to primary nav. Primary audience is the Design/Product Leader persona.

## Routing (Next.js App Router)

One dynamic route per content family rather than per-project or per-tier routes/route groups — tier differences are a presentation variant, not a routing concern, and route groups would add folder ceremony with no functional benefit at this scale (~13 total pages):

```
src/app/
  layout.tsx                 # SiteHeader + children + SiteFooter
  page.tsx                   # homepage — flagship grid, "More work", Brand & Identity teaser
  about/page.tsx
  ai-in-design/page.tsx
  contact/page.tsx
  work/[slug]/page.tsx       # 11 UX/product projects — generateStaticParams, dynamicParams = false
  brand/[slug]/page.tsx      # Brand & Identity projects — same static-generation pattern, separate data source
```

## Data Model

Typed data, one file per project, aggregated by an index — not MDX (would let visual consistency drift per-author on image-heavy, metric-heavy content) and not a single JSON blob or hardcoded per-page TSX (both make the homepage/index grids and `generateStaticParams` harder to build from a single source of truth):

```
src/content/
  types.ts                  # Project, ProjectTier, MetricEntry, ContentBlock, ImageAsset
  projects/                 # the 11 UX/product case studies
    restore-for-retail.ts, acem-cpd-portal.ts, goodwork.ts, myer.ts, vicsuper.ts,
    pageup.ts, restore-photo-markup.ts, anz-assured.ts, beeline.ts, veroguard.ts, oua.ts
    index.ts                # aggregates into one typed array
  brand/                    # Brand & Identity projects, separate shape from Project
    rebel-lemming.ts, neuropsychology-practice.ts
    index.ts
src/lib/
  projects.ts                # getFlagshipProjects(), getSecondaryProjects(), getProjectBySlug(), getAllSlugs()
  brand.ts                   # getBrandProjects(), getBrandProjectBySlug()
```

`Project.sections: ContentBlock[]` (block types: text / image / imageGrid / metricRow / quote) keeps rendering centralized and visually consistent rather than left to per-file prose formatting. Images referenced as paths into `public/images/projects/<slug>/...` and `public/images/brand/<slug>/...`.

## Shared Components

One `CaseStudyLayout` with internal `tier` variants (2, not 3 — `flagship` | `secondary`) for the UX/product work, plus a separate lightweight `BrandProjectLayout` for the Brand & Identity pages given they're a genuinely different content shape — not forced into the same component to avoid over-generalizing a template for a two-project section. `NdaBadge` renders independently of tier, wherever `project.nda` is true.

```
src/components/
  layout/SiteHeader.tsx, SiteFooter.tsx
  work/CaseStudyLayout.tsx, ProjectCard.tsx, MetricStat.tsx, ContentBlock.tsx, NdaBadge.tsx
  brand/BrandProjectLayout.tsx, BrandProjectCard.tsx
```

## Next.js-Specific Considerations

- `generateStaticParams` + `dynamicParams = false` on both `[slug]` routes — full project lists are known at build time; a mistyped URL should 404.
- `generateMetadata` per project (both `/work/[slug]` and `/brand/[slug]`) deriving title/description/OG image from project data — one implementation point covering SEO/social previews as content is added.
- `next/image` everywhere with static imports (auto width/height + blurDataURL) given case studies are ~70% imagery; no `remotePatterns` config needed yet since assets stay in `/public`.

## Open Items

- **OUA summary copy** — blocked on NDA scoping (`docs/decisions.md`).
- **The Neuropsychology Practice** — no case study yet; homepage/brand-index should only tease it once written, not link to a dead end.
- **Flagship case-study rewrites** (MYER, VicSuper) to foreground reasoning over the raw metric — flagged in `docs/homepage-strategy.md`, not started.
