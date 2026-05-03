# ADR-0004: Adult Gate Is a Local Boundary

## Status

Accepted

## Decision

The grown-up gate will be described as a local separation boundary, not as secure authentication.

## Reason

The current app is a static local web prototype. Any username or password stored in client-side files can be inspected by a user with access to the files. The gate is still useful because it clearly separates child-facing activities from adult interpretation.

## Consequences

- Keep the gate visible and clear.
- Do not claim it provides real security.
- Use language such as "separation of concerns" or "grown-up boundary."
- Real authentication is deferred until a hosting/account model exists.

## Safe to touch

Conditional. The gate UI can be improved, but do not present it as secure authentication without a real security model.