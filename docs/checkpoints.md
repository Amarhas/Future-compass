# Future Compass Checkpoints

This file tracks stable project checkpoints and the reasoning behind each version.

## v0.1 — Single-file MVP

Purpose: prove that a child can complete short discovery activities and answer simple reflections.

Core features:

- 12 weekly activity cards
- Fun / Okay / Boring reflection
- Easy / Medium / Hard reflection
- Try Again / Maybe / No reflection
- Local-only progress storage

## v0.2 — Exports and adult gate

Purpose: allow progress to be shared and separate child-facing activity flow from adult interpretation.

Core features:

- JSON export
- PDF/PNG/JPEG report concepts
- Adult interpretation area
- Simple grown-up gate

## v0.3 — Local app bundle

Purpose: move from one large HTML file to a maintainable local-app structure.

Core features:

- `index.html`
- `css/styles.css`
- `data/activities.js`
- modular JavaScript files
- mobile-first layout direction

## v0.4 — Badge learning paths

Purpose: turn badges from pattern labels into learning benchmarks.

Core features:

- badge evidence score
- badge levels
- learning path steps
- next suggested challenges

## v0.4.1 — Visual style restoration

Purpose: restore the colorful V2 child-facing design after v0.4 became too plain.

Design rule:

> New benchmark/learning-path features must not make the child-facing UI feel plain, technical, or adult-facing.

## v0.4.2 — Local-safe build

Purpose: fix phone/local-file loading issues where CSS and JavaScript may not load when opening from local storage or ZIP previews.

Core idea:

- top-level `index.html` is self-contained
- source files remain available for editing

## Planned v0.5 — PWA build

Purpose: move from local prototype to installable mobile web app.

Planned features:

- `manifest.webmanifest`
- service worker
- install-to-home-screen
- offline cache
- mobile-first app shell
- optional GitHub Pages or static hosting deployment
