# Module Foundation

Future Compass activities should become modules, not just step lists.

The goal is to help a child who does not know where to start by offering several entry points into the same activity.

## Research-aligned stance

Future Compass should not label a child as a fixed type of learner.

Avoid:

> You are a visual learner.

Prefer:

> How do you want to start today?

This supports flexibility while still giving children multiple ways to engage with an activity.

## Module lead-ins

Each module should support these entry paths:

| Entry path | Purpose |
|---|---|
| Show Me 👀 | visual orientation or example |
| Tell Me 🎧 | short verbal explanation |
| Let Me Try 👐 | low-friction hands-on start |
| Talk Me Through It 💬 | scaffolding prompts |
| Surprise Me 🎲 | reduces decision burden |

## Module flow

```text
Start Here
↓
Pick an entry path
↓
Do the challenge
↓
Reflect
↓
Earn badge evidence
↓
See next suggested challenge
```

## Module data shape

```json
{
  "id": "build-paper-tower",
  "title": "Build a Paper Tower",
  "ageBand": "10-12",
  "badges": ["Builder", "Fixer", "Investigator"],
  "leadIns": {
    "showMe": "Look for shapes that are wide at the bottom or folded for strength.",
    "tellMe": "You are going to build, test, and improve a tower.",
    "tryIt": "Grab paper and tape. Build anything that stands for 10 seconds.",
    "talkMeThrough": ["What part might fall first?", "What shape feels strongest?"],
    "surpriseMe": "Try folding one sheet into triangles before building."
  },
  "steps": [],
  "reflection": [],
  "evidenceRules": []
}
```

## Design rule

Module lead-ins should reduce friction, not add school-like workload.

The child should feel:

> I can start this.

Not:

> I have to study this before I am allowed to play.
