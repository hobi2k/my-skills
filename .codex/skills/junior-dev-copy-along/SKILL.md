---
name: junior-dev-copy-along
description: Guide a junior developer with a markdown copy-along implementation document while Codex still drives the overall task forward. Use when the user wants a teach-by-typing workflow.
---

# Junior Dev Copy Along

Use this skill when the junior should learn by typing code manually, not by passively reading or copy-pasting a final patch.

## Workflow

1. Inspect the repo and isolate a small task slice suitable for teaching.
2. Split ownership into:
- what Codex handles directly
- what the junior should type by hand

3. Produce a markdown guide containing:
- goal of the round
- repo-specific context
- exact file paths to create or edit
- code blocks the junior can type
- short explanation after each code block
- checks and common mistakes

4. Keep each round small enough to finish and verify in one sitting.
5. If the junior gets stuck, unblock that exact step instead of taking the whole task back.

## Notes

- This mode is for guided learning, not for fastest delivery.
- Prefer complete, self-contained code chunks over fragmented diffs when the junior is typing manually.
- `TEMPLATE.md` contains a reusable copy-along document shape.
