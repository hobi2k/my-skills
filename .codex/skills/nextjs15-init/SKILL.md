---
name: nextjs15-init
description: Scaffold a new Next.js 15 application with a modern project structure and optional full-stack defaults. Use when the user wants a new Next.js starter rather than changes to an existing app.
---

# Next.js 15 Init

Use this skill when the user wants a fresh Next.js project with a deliberate starter architecture.

## Workflow

1. Collect inputs:
- project folder
- project name
- domain or product type
- stack preset

2. Scaffold the app with `create-next-app`.
3. Apply a project shape that matches the chosen domain:
- app routes
- shared components
- validation layer
- state or data-fetching pattern
- optional database or auth setup

4. Install only the libraries required by the chosen preset.
5. Verify with linting and build or dev startup if the environment allows.

## Resources

- `references/setup-guide.md`

## Notes

- Keep the starter lean by default.
- Prefer repo conventions over boilerplate if the user asks to initialize inside an existing monorepo.
