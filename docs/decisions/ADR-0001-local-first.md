# ADR-0001: Keep Future Compass Local-First

## Status

Accepted

## Decision

Future Compass will remain local-first during the prototype and early product-shaping stages.

## Reason

The app currently focuses on child-facing discovery, reflection, and local progress tracking. A local-first model keeps the MVP simple, private by default, and easy to test before introducing accounts, cloud sync, or backend risk.

## Consequences

- Progress is stored locally in the browser for now.
- Users must export/backup data manually.
- Multi-device sync is intentionally deferred.
- Future PWA or app packaging can still preserve local-first behavior.

## Safe to touch

Conditional. Local storage implementation can be improved, but do not add cloud sync or accounts without an explicit privacy model and product decision.