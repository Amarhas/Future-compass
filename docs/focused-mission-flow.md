# Focused Mission Flow

Future Compass activities should not overwhelm children by presenting all guidance at once.

The focused mission flow applies a learner-paced sequence to scaffolded activities.

## Why this exists

A module should mean more than a visual box. In Future Compass, a module should provide:

```text
one focused idea
one action or decision
one intentional pause
one clear way forward
```

This supports the existing product rule that Future Compass should feel playful, focused, and child-friendly rather than like a long worksheet.

## Current pilot

This phase applies only to:

```text
Build a Paper Tower
```

The remaining activities should not be converted until the Paper Tower flow passes testing for tone, clarity, motivation, and parent usefulness.

## Flow structure

The current focused flow contains seven child-facing cards:

```text
1. Mission
2. Why this matters
3. What you are practicing
4. Before you start
5. Try it
6. Notice the clues
7. Level-up or reflect
```

## Navigation

The child can move through the flow using:

- Back
- Next
- Skip to Try It
- step dots

Swipe-only navigation should not be required because it may not be discoverable or accessible enough.

## Desktop and mobile control order

Desktop keeps the standard trailing-primary order:

```text
Back → Skip to Try It → Next
```

Mobile stacks the primary action first:

```text
Next → Back → Skip to Try It
```

This keeps the main action visible above the bottom navigation on phone screens.

## Copy polish rule

Child-facing cards should not expose internal design labels such as “why should I care?” card. Internal design language can be useful in planning documents, but the app should speak directly to the child.

## Starter nudge rule

Cards that ask a child to begin work should include a small starter nudge when the task could otherwise feel too open-ended. The nudge should help the child start without turning the activity into a full tutorial.

## Adult view

The grown-up research and coaching notes remain in the Adult view. They should not crowd the child-facing mission flow.

## Test checklist

After this PR is merged and GitHub Pages redeploys:

1. Open the hosted app URL on a phone.
2. Confirm Today opens on the Paper Tower activity.
3. Confirm only one focused mission card appears at a time.
4. Tap Next through all seven cards.
5. Tap Back and confirm it returns to the prior card.
6. Tap Skip to Try It and confirm it moves to the Try It card.
7. Confirm mobile button order is Next, Back, Skip.
8. Confirm desktop button order is Back, Skip, Next.
9. Confirm Step 2 no longer says “why should I care?” card.
10. Confirm Steps 4, 5, and 6 include starter nudges.
11. Confirm the Try It and Reflect jump buttons move to the right part of the page.
12. Confirm the activity still feels colorful and playful.
13. Confirm other activities still work without the focused flow.
14. Confirm Adult view still shows the grown-up coaching note.

## Phase line

Do not scale the translation layer to additional activities until the focused Paper Tower flow passes.
