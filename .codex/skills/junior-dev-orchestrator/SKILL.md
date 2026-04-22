---
name: junior-dev-orchestrator
description: Route a junior mentoring request into copy-along, spec-coach, or review-mode, and propose multi-step learning flows when helpful. Use when the user wants one educational entry point instead of choosing the mode manually.
---

# Junior Dev Orchestrator

Use this skill as the top-level router for junior mentoring work.

## Routing Rules

- choose `junior-dev-copy-along` when guided typing and pattern imitation are best
- choose `junior-dev-spec-coach` when independent implementation is the goal
- choose `junior-dev-review-mode` when the junior already wrote code and needs coaching feedback

## Multi-Step Flows

- `spec-coach -> review-mode` for independent implementation followed by educational review
- `copy-along -> review-mode` for guided onboarding followed by reinforcement review

## Workflow

1. Assess the task and the junior's current level.
2. Pick the best mode and explain why.
3. If useful, recommend the next mode after this round.
4. Continue by producing output in the selected child skill's format.

## Notes

- Respect explicit user preference if they already named a mode.
- Optimize for learning outcome, not just delivery speed.
- `TEMPLATE.md` contains the routing summary format.
