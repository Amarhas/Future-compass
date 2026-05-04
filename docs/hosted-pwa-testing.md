# Hosted App Testing

Future Compass should be tested the way it is intended to be used: as a hosted web app opened in a phone browser.

## Official test path

Use HTTP or HTTPS.

Preferred path after deployment:

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

## Unsupported acceptance path

Do not use this as the official release test path:

```text
file://.../app/index.html
```

Opening the app directly from local files can prevent CSS, JavaScript, imports, and future PWA features from behaving like the real app.

## GitHub Pages deployment

This repo includes a GitHub Pages workflow that deploys the `app/` folder from `main`.

Expected app files:

```text
app/index.html
app/styles.css
app/modules.css
app/app.js
app/modules.js
```

## Test checklist after deployment

- App loads with colorful header and cards.
- Start Here module appears.
- Module buttons work.
- Activity save works.
- Badge Center updates after saving progress.
- Theme selector works.
- Adult gate opens and locks.
- Report panel opens.
- App can be opened from a phone browser URL.

## Project rule

Future Compass should be tested the way it is intended to be used: as a hosted web app. Local file testing can be useful for quick developer checks, but it should not be considered the release acceptance path.
