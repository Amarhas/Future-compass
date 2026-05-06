# Future Compass

Future Compass is a local-first youth discovery app designed to help young people try small activities, reflect on what they enjoyed, and build evidence-based learning badges over time.

## Current checkpoint

**Trust Boundary Foundation in progress**

This checkpoint preserves the colorful child-facing app experience and adds explicit trust/compliance guardrails before the activity library grows.

The current app includes:

- hosted GitHub Pages delivery
- mobile-first app shell
- local child profiles
- `schemaVersion: 1`
- profile-specific progress
- badge evidence records
- backup export/import
- Paper Tower focused mission flow
- grown-up coaching notes
- trust boundary warnings for profiles, reflections, and backups

## Core principle

Badges are evidence of practice, not fixed identity labels.

A badge should mean:

> I practiced this kind of work, reflected on it, and built evidence over time.

A badge should not mean:

> This is what I am forever.

## Trust principle

Future Compass follows a trust-by-minimization rule:

> The safest sensitive data is the data Future Compass never collects.

Product rule:

```text
Sell to adults.
Design for kids.
Avoid collecting child data.
Keep parents/customers in control.
```

The current app is local-first. Progress is stored in the user's browser/device unless the parent/customer chooses to export or share it.

Future Compass should avoid:

- child accounts by default
- cloud child profiles
- behavioral tracking
- ads
- social posting
- public child profiles
- direct payment card handling
- unnecessary collection of personal/private information

## Adult gate

Default local gate credentials:

- Username: `grownup`
- Password: `compass`

This is separation of concerns, not real authentication.

## Official test/use path

Future Compass should be tested through the hosted GitHub Pages URL, not by opening files directly through `file://`.

The hosted delivery workflow deploys the `app/` folder from `main`.

## Local development fallback

For local development checks, serve the repo over HTTP:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/app/
```

## Version path

- v0.1 — single-file MVP
- v0.2 — exports and adult gate
- v0.3 — local app bundle
- v0.4 — badge learning paths
- v0.4.1 — restored colorful V2 visual style
- v0.4.2 — local-safe self-contained build
- v0.5 — module foundation / Start Here entry paths
- v0.5.1 — data foundation / profiles and schemaVersion
- v0.5.2 — app shell and focused mission pilot
- v0.5.3 — trust boundary foundation
- v0.6 — planned PWA foundation
