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
- Activity card has emoji and colorful pills
- Start Here module appears
- Module buttons work:
  - Show Me
  - Tell Me
  - Let Me Try
  - Talk Me Through
  - Surprise Me
- Previous / Next changes activities
- Save This Week stores progress
- Badge Center updates after saving progress
- Theme selector works
- Bottom navigation works
- Grown-up gate opens and locks
- Report panel opens
- JSON export downloads or shares

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
3. Save one activity.
4. Switch to the Badge Center.
5. Test the adult gate.
6. Export JSON.
7. Open on phone.
8. Repeat the same checks.

## Known limitation

Opening a multi-file app from a mobile file picker may fail if the browser blocks sibling local files. For this reason, later versions should move toward a PWA or a bundled app wrapper.
