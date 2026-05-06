# Trust Boundary Architecture

Future Compass should minimize compliance-bound surfaces by design.

The core product rule is:

```text
Sell to adults.
Design for kids.
Avoid collecting child data.
Keep parents/customers in control.
```

## Trust-by-minimization

The safest sensitive data is the data Future Compass never collects.

Future Compass should avoid becoming a child-data platform unless there is a clear reason, a defined consent model, and appropriate legal/security review.

## Current posture

The current hosted app is a static, local-first web app.

Current strengths:

- no child accounts by default
- no Future Compass backend database
- no cloud child profiles
- no ad network
- no behavioral tracking
- no social posting
- no payment card collection
- progress stored locally in the browser
- parent/customer controls export, import, sharing, and deletion

## COPPA-aware boundary

Future Compass is child-adjacent and designed for young users, including children around age 10.

The architecture should avoid requesting or encouraging children to enter personal/private information.

Avoid collecting or asking for:

- full names
- home addresses
- school names
- phone numbers
- email addresses
- photos
- voice recordings
- precise location
- teacher names
- medical information
- sensitive family details

## Local data boundary

Local browser storage may include:

- profile nickname
- activity progress
- reflection responses
- badge evidence
- timestamps
- selected theme

This information should remain on the user's device/browser unless the parent/customer exports or shares it.

## Export/share boundary

Exported backups may contain private reflections or progress details.

The app should warn users before export that backups should only be shared with trusted people.

## Payment boundary

Future Compass should not handle payment card data directly.

Preferred early path:

```text
Future Compass site
→ external hosted checkout or commerce platform
→ digital product/download/workshop access
```

Avoid:

- custom card forms
- embedded payment fields controlled by Future Compass
- card storage
- card processing inside app code

## AI boundary

Future Compass may be developed with AI-assisted tools under human direction and review.

Future Compass should not be positioned as an AI companion, therapist, counselor, or automated decision-maker for children.

If AI features are ever added to the product, they should begin as adult-facing assistance and should not privately converse with children, collect child data, or make automated decisions about a child's future.

## Product statement

Future Compass is a privacy-first youth discovery system. It helps kids build evidence of durable skills through guided hands-on activities, while helping adults interpret those clues without pressure, labels, ads, tracking, or child-data collection.
