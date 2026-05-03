# Technical Narrative

This document explains how the current Future Compass prototype works at a technical level.

## Current architecture

Future Compass is currently a static local web app.

```text
app/
├── index.html
├── styles.css
├── modules.css
├── app.js
└── modules.js
```

## Runtime model

- `index.html` defines the app structure.
- `styles.css` defines the main mobile-first visual system.
- `modules.css` defines the Start Here module UI.
- `app.js` contains activity data, profile/schema storage, badge calculation, adult gate behavior, backup export/import, and report rendering.
- `modules.js` adds the Start Here module entry behavior.

## Storage

The app uses browser `localStorage` and `sessionStorage`.

- `localStorage` stores versioned Future Compass app data under `futureCompassDataV1`.
- `localStorage` stores theme preference under `futureCompassTheme`.
- `sessionStorage` stores whether the adult view is unlocked for the current session.

The current data model uses `schemaVersion: 1` and supports multiple local child profiles.

## Profiles

Each profile has:

- profile id
- display name
- age band
- theme
- progress
- badgeEvidence
- createdAt / updatedAt timestamps

Progress is now profile-specific.

## Backup and import

The app distinguishes between:

- **Backup:** machine-readable app data with `schemaVersion` and profiles.
- **Report:** human-readable progress summary.

The import path accepts current schema v1 backups and attempts to wrap older progress data into the current schema.

## Adult gate

The adult gate is a simple local boundary. It is not secure authentication.

Default credentials:

```text
username: grownup
password: compass
```

Do not describe this as real privacy or security.

## Module system

The v0.5 module foundation adds Start Here entry paths:

- Show Me
- Tell Me
- Let Me Try
- Talk Me Through
- Surprise Me

These entry paths are intended to reduce friction for children who do not know where to start. They are not learning-style labels.

## Badge system

Badges are calculated from saved activity evidence. Positive or repeated interest increases evidence weight.

The v0.5.1 branch adds a `badgeEvidence` structure so badge evidence can become more durable than simple calculated counts.

Badges must be treated as learning evidence, not identity labels.

## Known technical debt

- Activity data is still embedded in `app.js`.
- Badge path data is still embedded in `app.js`.
- Profile management is local-only.
- Import validation is present but still simple.
- Multi-file local testing can fail on mobile file pickers if sibling files do not load.
- No automated test harness exists yet.

## Next technical direction

After v0.5.1, likely next steps are:

- improve import/export UX
- add a lightweight test checklist or automated smoke test
- split activity data from `app.js`
- prepare PWA foundation
- add app icons and service worker
