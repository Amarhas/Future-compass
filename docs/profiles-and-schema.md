# Profiles and Schema Foundation

This document defines the next durable data layer for Future Compass.

## Why this matters

Future Compass should not depend on one anonymous browser save forever. Before the activity library grows, the app needs a stable data model for:

- multiple child profiles
- versioned progress files
- badge evidence logs
- future import/export compatibility
- migration when the schema changes

## Proposed schema version

Current target:

```json
{
  "app": "Future Compass",
  "schemaVersion": 1,
  "profiles": [],
  "activeProfileId": null,
  "createdAt": "ISO timestamp",
  "updatedAt": "ISO timestamp"
}
```

## Profile shape

```json
{
  "id": "profile-uuid-or-slug",
  "displayName": "Child nickname",
  "ageBand": "10-12",
  "theme": "bright",
  "progress": {},
  "badgeEvidence": [],
  "createdAt": "ISO timestamp",
  "updatedAt": "ISO timestamp"
}
```

## Progress entry shape

```json
{
  "activityId": "build-paper-tower",
  "weekIndex": 0,
  "fun": "Fun",
  "difficulty": "Medium",
  "again": "Yes",
  "favoritePart": "Testing the tower",
  "moduleEntryUsed": "showMe",
  "savedAt": "ISO timestamp"
}
```

## Badge evidence shape

```json
{
  "badge": "Builder",
  "activityId": "build-paper-tower",
  "source": "activity-reflection",
  "weight": 2,
  "note": "Liked testing and improving the tower",
  "createdAt": "ISO timestamp"
}
```

## Design rules

1. A profile is local-first and does not require an account.
2. A backup is machine-readable app data.
3. A report is human-readable progress information.
4. Badges are evidence of practice, not fixed identity labels.
5. Schema changes require a migration path.

## Next implementation step

The next code pass should add:

- profile picker
- add profile flow
- active profile state
- schemaVersion in export JSON
- import validation
- migration placeholder function
