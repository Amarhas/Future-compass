# Data Inventory

This document maps Future Compass data so privacy and trust boundaries stay clear as the project grows.

## Current product model

Future Compass is currently a static, local-first app hosted through GitHub Pages.

The app does not currently use a Future Compass backend database.

## Data stored locally in the browser

Future Compass may store the following in browser storage on the user's device:

| Data | Purpose | Location | Notes |
|---|---|---|---|
| Profile nickname | Helps distinguish local child profiles | Browser localStorage | Should not contain full names or private details |
| Active profile id | Remembers selected local profile | Browser localStorage | Local app identifier only |
| Theme preference | Remembers visual theme | Browser localStorage | Not sensitive by itself |
| Activity progress | Tracks completed activities | Browser localStorage | Local-only unless exported |
| Reflection answers | Saves child/parent-entered reflection text | Browser localStorage | Could contain private details if user enters them |
| Badge evidence | Tracks skill-practice evidence | Browser localStorage | Evidence/clue system, not identity label |
| Timestamps | Tracks saved/exported times | Browser localStorage / exported backup | Avoid treating as surveillance data |
| Adult gate session state | Keeps adult view unlocked during session | Browser sessionStorage | Not real authentication |

## Data included in backups/exports

Backup exports may include:

- profile nicknames
- activity progress
- reflection answers
- badge evidence
- timestamps
- schema version
- local profile ids

Backups are controlled by the parent/customer and should only be shared with trusted people.

## Data intentionally not collected by Future Compass

The current app should not collect or request:

- child full names
- child email addresses
- home addresses
- school names
- phone numbers
- photos
- voice recordings
- precise location
- medical information
- teacher names
- sensitive family information
- payment card data
- centralized child profiles
- public child profiles

## Third-party boundaries

Future Compass is hosted through GitHub Pages. GitHub may process normal hosting/request metadata under GitHub's own policies.

Future paid products should use external hosted checkout or commerce platforms. Future Compass should not store, process, or transmit cardholder data directly.

## Risk notes

Local-first does not mean risk-free.

Risk can still appear if:

- a user enters private information into free-text fields
- a backup is shared with the wrong person
- a device/browser is shared
- analytics/tracking scripts are added later
- accounts/cloud sync are added later
- payment forms are embedded directly into the app

## Design rule

Do not add a data field, third-party script, account feature, export field, payment flow, or analytics tool unless the data boundary is documented first.
