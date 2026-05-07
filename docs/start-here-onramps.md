# Activity-Specific Start Here On-Ramps

This phase turns the Start Here section from generic guidance into activity-specific entry points.

## Purpose

Start Here helps a child choose how to enter an activity.

```text
Show Me = visual example
Tell Me = short explanation
Let Me Try = fastest first action
Talk Me Through = guided micro-steps
Surprise Me = playful twist
```

The on-ramp should help the child begin the activity without making the activity feel like a worksheet.

## Current pilot

The first implementation applies only to the three pilot activities:

```text
Build a Paper Tower
The $20 Choice
Make Someone's Day Easier
```

## Data source

On-ramp content lives in:

```text
app/data/module-onramps.js
```

Show Me images live in:

```text
app/assets/onramps/
```

## Image rule

Show Me images are functional examples, not decorative art.

They must follow:

```text
docs/visual-style-guide.md
```

Every image needs:

- local/static file path
- useful alt text
- short lead-in
- short caption

## Fallback behavior

Activities without custom on-ramp data still use the existing fallback module guidance. This allows the app to remain stable while activity-specific content is added in batches.

## Test checklist

After this PR merges and GitHub Pages redeploys:

1. Paper Tower Show Me displays a local image.
2. The $20 Choice Show Me displays a local image.
3. Make Someone's Day Easier Show Me displays a local image.
4. Show Me lead-ins and captions are activity-specific.
5. Tell Me, Let Me Try, Talk Me Through, and Surprise Me are activity-specific for the three pilot activities.
6. Surprise Me has a softer lead-in before the twist.
7. Existing non-pilot activities still show fallback guidance.
8. Focused mission flow still works for the three pilot activities.
9. Badge Center still works.
10. Privacy and Terms links still work.

## Phase line

Do not scale on-ramp images to the remaining activities until the three pilot on-ramps pass for clarity, visual fit, accessibility, and mobile usability.
