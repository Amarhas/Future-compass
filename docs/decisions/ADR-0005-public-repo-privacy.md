# ADR-0005: Keep Private Reflections Out of the Public Repository

## Status

Accepted

## Decision

Future Compass repository documentation must be public-safe. It may preserve product decisions, technical rationale, and sanitized project insights, but it must not include private personal reflections, raw pondering, or sensitive personal context.

## Reason

The repository is public. Continuity documentation should help future contributors understand the project without exposing personal context that is not necessary for the project.

## Consequences

- `HANDOFF.md` must be operational and product-focused.
- Session digests must be sanitized and technical.
- Private reflections should stay outside the repo.
- Do not copy raw chat-style thought arcs into public documentation.

## Safe to touch

No. This privacy boundary should remain stable unless the repository visibility and documentation strategy are explicitly changed.