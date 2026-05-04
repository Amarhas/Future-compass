# Hosted and Mobile Testing

Use this checklist before treating a Future Compass checkpoint as stable.

## Official test path

Future Compass should be tested through the hosted GitHub Pages URL, not by opening files directly through `file://`.

Local-file testing can be useful for quick developer checks, but it is not the release acceptance path.

## Hosted test checklist

Test on a phone-sized screen through the GitHub Pages URL.

- Header gradient appears
- Profile selector appears
- Add Profile works
- Activity card has emoji and colorful pills
- Start Here module appears
- Module buttons work:
  - Show Me
  - Tell Me
  - Let Me Try
  - Talk Me Through
  - Surprise Me
- Previous / Next changes activities
- Save This Week stores progress for the active profile
- Badge Center updates after saving progress
- Switching profiles shows different progress
- Theme selector works
- Bottom navigation works
- Grown-up gate opens and locks
- Report panel opens and reflects the active profile
- Export Backup downloads JSON
- Import Backup restores schema v1 data

## Profile/schema test checklist

1. Open the hosted app URL.
2. Confirm the default profile is created automatically.
3. Save one activity under the default profile.
4. Add a second profile.
5. Confirm the second profile has no saved progress.
6. Save a different activity under the second profile.
7. Switch back to the first profile.
8. Confirm the first profile still has its original progress.
9. Export Backup.
10. Confirm the JSON includes `schemaVersion: 1` and `profiles`.
11. Import the backup.
12. Confirm profiles and progress are restored.

## Adult gate

Default local credentials:

```text
Username: grownup
Password: compass
```

This is only separation of concerns, not secure authentication.

## Local development fallback

For local development checks, serve the repository over HTTP:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/app/
```

## Known limitation

Opening a multi-file app from a mobile file picker may fail if the browser blocks sibling local files. This is why the official test path is the hosted GitHub Pages URL.
