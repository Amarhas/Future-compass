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
- `app.js` contains activity data, badge calculation, local progress storage, adult gate behavior, and report rendering.
- `modules.js` adds the Start Here module entry behavior.

## Storage

The app currently uses browser `localStorage` and `sessionStorage`.

- `localStorage` stores progress and theme preference.
- `sessionStorage` stores whether the adult view is unlocked for the current session.

This is suitable for prototyping, but the next durable step is a versioned schema with profiles.

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

Badges must be treated as learning evidence, not identity labels.

## Known technical debt

- Activity data is still embedded in `app.js`.
- Badge path data is still embedded in `app.js`.
- There is no profile system yet.
- Export JSON lacks a durable schemaVersion field.
- Import validation is not implemented in the GitHub app version yet.
- Multi-file local testing can fail on mobile file pickers if sibling files do not load.

## Next technical direction

Implement v0.5.1:

- versioned data schema
- local child profiles
- activeProfileId
- badge evidence log
- export/import validation
- migration placeholder function
