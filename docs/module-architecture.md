# Module Architecture

Future Compass should grow by adding and updating modules, not by rewriting the app engine.

## Core model

```text
Core app = stable engine
Activities = content modules
Translation layer = evidence scaffold renderer
Adult notes = interpretation layer
Badges = skill-evidence system
Reports/guides = monetizable outputs
```

## Current module containers

The active app now loads content data before the app engine:

```text
app/data/activities.js
app/data/badge-paths.js
app/data/activity-scaffolds.js
app/data/research-anchors.js
app/app-engine.js
app/modules.js
app/translation-layer.js
app/trust-boundary.js
```

## Source of truth

Use these files as the content source of truth:

| Module | Purpose |
|---|---|
| `app/data/activities.js` | Base activity list, short descriptions, steps, badges, adult skill signals |
| `app/data/badge-paths.js` | Badge definitions, descriptions, and path steps |
| `app/data/activity-scaffolds.js` | Focused mission flow content and grown-up coaching notes |
| `app/data/research-anchors.js` | Plain-language research anchor registry |

## Active engine

The active app engine is:

```text
app/app-engine.js
```

The old file remains only as a deprecation note:

```text
app/app.js
```

Do not add new activities or badge content to `app.js`.

## Hot-swappable opportunities

Future modules may include:

- activity packs
- badge models
- research anchors
- adult interpretation templates
- report templates
- export types
- themes
- trust/compliance copy
- storage providers

## Activity pack strategy

A future activity pack could be added as a new data file or bundle, for example:

```text
starter-pack-ages-10-12.js
money-skills-pack.js
stem-builder-pack.js
helper-leader-pack.js
workshop-pack.js
```

This supports the monetization principle:

```text
The app is the demo.
The activity system is the product.
```

## Quality rule

New value should be added through modules whenever possible.

Avoid:

- hardcoding new activities in the app engine
- mixing research copy directly into rendering logic
- adding payment/account/cloud logic before the data boundary is documented
- making the child-facing UI feel plain, technical, or adult-facing

## Test rule

After content architecture changes, always test:

1. Hosted app loads.
2. Activity navigation still works.
3. Paper Tower focused flow still works.
4. Badge Center still works.
5. Adult view still works.
6. Trust guardrails still work.
7. Privacy and Terms links still work.
