---
project: future-compass
status: active
current_checkpoint: v0.5.1-profile-schema-foundation
last_session: 2026-05-03
next_step: "Review and test feature/profiles-schema-foundation, then merge if profile switching, backup export/import, and badge evidence behavior pass."
platform: local web app / future PWA
stack: HTML, CSS, JavaScript, localStorage, GitHub
public_repo: true
personal_reflections_allowed: false
---

# Handoff: Future Compass

This is the first file to read when resuming work. It is public-safe and intentionally excludes private personal reflections, raw pondering, or user headspace.

## 1. Project Identity

Future Compass is a local-first youth discovery app that helps young people try small activities, reflect on what felt useful or enjoyable, and build evidence-based learning badges over time. The product should reduce pressure, not sort children into fixed careers or identities.

## 2. Current State

- **What works:** Colorful mobile-first app shell, activity flow, Start Here module entry paths, local child profiles, schemaVersion 1 data model, badge center, theme selector, adult gate, profile-specific progress saving, backup export/import, and report panel.
- **Known limitations:** The app is still a local static web app. Multi-file local testing can fail on mobile if files are opened from ZIP preview or separated from sibling CSS/JS files. Adult gate is separation of concerns, not authentication.
- **In progress:** `feature/profiles-schema-foundation` adds v0.5.1 profile/schema foundation and should be reviewed/tested before merge.

## 3. Exact Next Step

Test `feature/profiles-schema-foundation` locally:

1. Add a second profile.
2. Save progress under each profile.
3. Confirm Badge Center differs by profile.
4. Export backup.
5. Import backup.
6. Confirm schemaVersion is preserved.
7. Confirm report reflects the active profile.

## 4. Safe-to-Touch Boundaries

| Area | Boundary |
|---|---|
| Child-facing UI | Preserve colorful, playful, mobile-first feel. Do not make it feel like an adult dashboard or school worksheet. |
| Badges | Badges must remain evidence of practice, not identity labels. |
| Adult gate | Keep clear separation, but do not present it as secure authentication. |
| Privacy | Do not put user personal reflections, raw private thoughts, or sensitive context into the repo. |
| Data model | Maintain schemaVersion and migration path for future changes. |

## 5. What Would Confuse Me Coming Back

- **Why are there Start Here modes instead of learning-style labels?** Because the app should offer multiple ways to begin without labeling a child as a fixed learner type.
- **Why is the adult gate simple?** It is a local separation boundary only. Real authentication is deferred until there is a hosting/account model.
- **Why not add career/college databases now?** The app needs durable profiles, schema, evidence logs, and testing discipline first.
- **Is canvas current?** No. GitHub `main` and active PR branches are the working source of truth. Canvas contains older visual checkpoints and scratch material.

## 6. File Manifest

| Path | Description |
|---|---|
| `README.md` | Public project overview and run instructions. |
| `HANDOFF.md` | Current operational handoff and next-step state. |
| `CHANGELOG.md` | Version-level factual change history. |
| `app/` | Runnable static app. |
| `docs/` | Public-safe project memory and design documentation. |
| `docs/data-schema.md` | Current local data schema and import/export expectations. |
| `docs/decisions/` | Architecture decision records. |
| `docs/session-digests/` | Sanitized technical session digests only. |

## 7. Decision Log Summary

Full decision records live in `docs/decisions/`.

- ADR-0001: Keep Future Compass local-first for now.
- ADR-0002: Treat badges as evidence of practice, not identity labels.
- ADR-0003: Add Start Here module entry paths instead of learning-style labels.
- ADR-0004: Keep adult gate as separation of concerns, not security.
- ADR-0005: Keep private personal reflections out of the public repo.

## 8. Current Branches

- `main`: current v0.5 module foundation plus public-safe continuity docs.
- `feature/profiles-schema-foundation`: v0.5.1 profile/schema implementation branch.

## 9. Public Documentation Rule

Repository documentation may include product decisions, technical rationale, design constraints, and sanitized project insights. It must not include the user's private reflections, raw mental state, personal headspace, or sensitive life context.
