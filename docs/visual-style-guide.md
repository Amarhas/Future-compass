# Future Compass Visual Style Guide

This guide defines the v1 image direction for Future Compass before Show Me images are added.

## Purpose of images

Images in Future Compass are functional, not decorative.

The primary job of an image is to reduce uncertainty for the child.

```text
Show Me = a visual example of how this activity might look
```

A good Show Me image should answer:

```text
What does this activity look like in action?
```

It should not exist only to make the page prettier.

## v1 style lock

The v1 image style is:

```text
simple, bright, child-friendly digital illustration
```

The style should be:

- playful but not babyish
- clear at phone size
- warm and encouraging
- consistent with the colorful Future Compass UI
- lightly grounded in real objects and actions
- simple enough to scale across many activities

## Relationship to the visual checkpoint

Future Compass previously restored the colorful V2 visual style after the badge-path checkpoint became too plain.

The same rule applies to images:

```text
New benchmark, learning-path, or visual-example features must not make the child-facing UI feel plain, technical, or adult-facing.
```

Images should support the emoji-forward, colorful, mobile-first product feel.

## Realism level

Use stylized illustration, not photorealism.

Preferred:

- rounded shapes
- simple forms
- clean objects
- soft friendly details
- clear action or example

Avoid:

- stock-photo realism
- highly detailed scenes
- dark or serious mood
- corporate training imagery
- overly childish preschool-style art
- images that look like ads

## Character policy

Use mostly object-focused visuals first.

Characters are allowed when a human action is necessary to understand the activity, but they should be simplified and non-identifying.

Preferred character approach:

- simplified figures
- no realistic faces
- no resemblance to real children
- no school logos
- no uniforms unless required later for a specific licensed product
- no private or identifying details

Examples:

- Paper Tower: object-focused paper tower scene
- The $20 Choice: jars, envelopes, or buckets labeled Spend / Save / Give
- Make Someone's Day Easier: simple scene showing a small helpful action

## Color direction

Images should feel compatible with the current app palette.

Preferred:

- bright but not neon
- friendly blue, purple, teal, yellow, warm accent tones
- enough contrast for mobile readability
- white or soft neutral backgrounds
- no muddy low-contrast scenes

Images should not fight the app's gradient hero, clue badges, or card layout.

## Composition rules

Each Show Me image should have:

- one clear subject
- one obvious action or example
- minimal clutter
- readable shape at small phone size
- room for a short caption nearby
- no tiny text that must be read to understand the image

Mobile readability matters more than artistic detail.

## Accessibility rules

Every image must include:

- useful alt text
- a short caption
- enough surrounding text that the image is not required to complete the activity

The app should never depend on image-only instructions.

The image helps; it does not replace text.

## File and asset rules

Images should be local/static assets.

Preferred future structure:

```text
app/assets/onramps/
├── build-paper-tower.svg
├── twenty-dollar-choice.svg
└── make-someones-day-easier.svg
```

Preferred formats:

- SVG when possible for crisp, lightweight, scalable illustrations
- PNG if SVG is not practical
- avoid remote image hosts
- avoid embedded tracking or third-party media

## Privacy and trust rules

Do not use:

- photos of real children
- user-uploaded child photos
- third-party hotlinked images
- images with school names, addresses, logos, or identifying details
- AI-generated images that resemble real children

Keep images packaged with the app whenever possible.

## Show Me image unit

Each Show Me visual should eventually have:

```text
image source
alt text
short lead-in
caption
optional tiny visual tip
```

Example structure:

```javascript
showMe: {
  image: 'assets/onramps/build-paper-tower.svg',
  alt: 'Simple paper tower with a wide base standing on a table',
  leadIn: 'Here is one way a paper tower might look.',
  caption: 'A wide bottom can help the tower stand longer.'
}
```

## AI-assisted asset rule

AI tools may help draft visual concepts, but final assets should be reviewed by a human before release.

Review for:

- age appropriateness
- visual clarity
- consistency with the app style
- no private or identifying details
- no confusing or impossible instructions
- no accidental resemblance to real people
- no copyrighted characters or brands

## Do / Do not examples

Do:

- show a simple example
- keep the subject clear
- use friendly colors
- support the activity action
- keep the image readable on a phone

Do not:

- add decorative clutter
- use stock-looking photos
- imply a child must copy the image exactly
- include real children or identifying details
- make the activity feel like a school worksheet

## First image pilot

The first image rollout should include only the three pilot activities:

```text
Build a Paper Tower
The $20 Choice
Make Someone's Day Easier
```

Do not scale images to all activities until the first three Show Me visuals pass for clarity, tone, accessibility, and visual fit.
