# Data Schema

Future Compass uses a versioned local data model beginning with schema version 1.

## Current schema version

```text
schemaVersion: 1
```

## Storage key

The app stores versioned app data in browser `localStorage` under:

```text
futureCompassDataV1
```

Older prototype progress may exist under:

```text
futureCompassV042Repo
```

The app includes a migration path that can wrap older progress into the versioned schema without deleting the older key.

## Root shape

```json
{
  "app": "Future Compass",
  "schemaVersion": 1,
  "activeProfileId": "profile-id",
  "profiles": [],
  "createdAt": "ISO timestamp",
  "updatedAt": "ISO timestamp"
}
```

## Profile shape

```json
{
  "id": "profile-id",
  "displayName": "Explorer",
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
  "weekIndex": 0,
  "source": "activity-reflection",
  "weight": 2,
  "note": "Testing the tower",
  "createdAt": "ISO timestamp"
}
```

## Backup versus report

A backup is machine-readable app data. It should preserve schemaVersion and profiles.

A report is human-readable progress information. It should summarize progress, but it does not need to preserve every app field.

## Import behavior

The import function accepts:

1. Current schema v1 backups.
2. Older exported objects with a `progress` field.
3. Raw legacy progress objects.

Unsupported data should be rejected with a clear message.

## Migration rule

Schema changes must add a migration path. Do not silently discard user progress.
