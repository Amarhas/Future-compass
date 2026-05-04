# Mobile and Local Testing

Use this checklist before treating a Future Compass checkpoint as stable.

## Local browser test

From the repository or downloaded folder, open:

```text
app/index.html
```

The file must remain in the same folder as:

```text
app/styles.css
app/modules.css
app/app.js
app/modules.js
```

If the page appears plain white or unstyled, the CSS files did not load.

## Mobile test checklist

Test on a phone-sized screen.

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

1. Open `app/index.html`.
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

## Recommended testing path

1. Open `app/index.html` on desktop.
2. Use browser responsive/mobile view.
3. Test profile creation and switching.
4. Save one activity.
5. Switch to the Badge Center.
6. Test the adult gate.
7. Export Backup.
8. Import Backup.
9. Open on phone.
10. Repeat the same checks.

## Known limitation

Opening a multi-file app from a mobile file picker may fail if the browser blocks sibling local files. For this reason, later versions should move toward a PWA or a bundled app wrapper.
