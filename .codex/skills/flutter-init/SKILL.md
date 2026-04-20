---
name: flutter-init
description: Scaffold a new Flutter project with a modern structure and optional Clean Architecture conventions. Use when the user wants a new Flutter app or a structured Flutter starter.
---

# Flutter Init

Use this skill when the user wants a new Flutter project rather than an edit to an existing app.

## Workflow

1. Collect inputs:
- folder name
- package or app name
- domain type
- stack preset

2. Scaffold the project with `flutter create`.
3. Apply the chosen structure:
- domain folders
- state management setup
- models and validation approach
- storage or API layer choices

4. Add only the dependencies the user actually needs.
5. Run validation commands such as formatting, analysis, and tests when available.

## Resources

- `references/setup-guide.md`

## Notes

- Keep the generated starter intentional; avoid installing every optional package by default.
- If Flutter is not installed, stop early and report the missing dependency.
