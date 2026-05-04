# Hosted PWA Testing

Future Compass is moving away from `file://` testing. The intended long-term use path is a hosted web app / PWA opened in a phone browser.

## Official test path

Use HTTP or HTTPS.

Preferred:

```text
GitHub Pages URL
```

Local development fallback:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/app/
```

On a phone on the same Wi-Fi network, use the computer's local IP address:

```text
http://YOUR-COMPUTER-IP:8000/app/
```

## Unsupported test path

Do not treat this as a supported production path:

```text
file://.../app/index.html
```

Opening the app directly from local files can prevent CSS, JavaScript, service workers, imports, and other browser features from behaving like the real app.

## GitHub Pages direction

This repo includes a GitHub Pages workflow that deploys the `app/` folder from `main`.

Expected app files:

```text
app/index.html
app/styles.css
app/modules.css
app/app.js
app/modules.js
app/manifest.webmanifest
app/service-worker.js
app/icons/icon-192.svg
app/icons/icon-512.svg
```

## Test checklist after deployment

- App loads with colorful header and cards.
- Profile selector appears.
- Add Profile works.
- Activity save works.
- Switching profiles shows profile-specific progress.
- Badge Center updates for the active profile.
- Backup export downloads JSON.
- Backup import restores profiles and progress.
- Report reflects the active profile.
- App can be opened from the phone browser URL.
- Browser offers install/add-to-home-screen behavior when supported.

## Project rule

Future Compass should be tested the way it is intended to be used: as a hosted web/PWA app. Local file testing can be useful for quick developer checks, but it should not be considered the release acceptance path.
