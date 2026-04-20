---
name: workthrough
description: Document completed development work in a structured markdown walkthrough. Use after meaningful implementation, bug fixes, refactors, or setup work when the user wants durable written documentation.
---

# Workthrough

Use this skill after implementation work, especially when the final chat reply is not enough as long-term project memory.

## Workflow

1. Capture the task context:
- request
- prior problem state
- approach taken

2. Record the implementation:
- files changed
- key code decisions
- noteworthy tradeoffs

3. Record validation:
- tests
- builds
- manual checks
- remaining risks

4. Save the document under `workthrough/` with a descriptive filename.

## Resources

- `TEMPLATE.md`
- `EXAMPLES.md`
- `QUICKSTART.md`

## Notes

- Prefer a clear human-readable narrative over a raw changelog.
- Use this version when the user wants a fuller, more explanatory document.
