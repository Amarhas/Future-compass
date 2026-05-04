# App Shell Navigation

Future Compass should not grow as one long scrolling page. The child-facing experience should stay focused and mobile-friendly.

## Current view model

The app shell uses five major views:

```text
Today
Badges
Report
Adult
Settings
```

## Today view

The Today view is the default child-facing flow. It contains:

- current activity
- Start Here module entry points
- challenge steps
- reflection questions
- save button
- small progress/sidebar cards

## Moved out of the main flow

The following areas should not crowd the child-facing activity flow:

- Badge Center → Badges view
- Progress Summary → Report view
- Adult Interpretation → Adult view behind gate
- Profile/theme/import/export/reset → Settings view

## Design rule

The app shell must preserve the v0.4.1 visual rule:

> New benchmark/learning-path features must not make the child-facing UI feel plain, technical, or adult-facing.

## Test checklist

After this PR is merged and GitHub Pages redeploys:

1. Open the hosted app URL on a phone.
2. Confirm Today is the default view.
3. Confirm the page no longer feels like one long scroll.
4. Tap Badges and confirm Badge Center appears.
5. Tap Report and confirm Progress Summary appears.
6. Tap Adult and confirm the grown-up gate appears if locked.
7. Log in with `grownup / compass` and confirm Adult view appears.
8. Tap Settings and confirm profile/theme/backup/reset controls appear.
9. Confirm Today still has colorful activity cards and Start Here choices.
