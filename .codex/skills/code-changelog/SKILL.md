---
name: code-changelog
description: Maintain a running code-change log in a reviews directory. Use when the user wants human-readable change notes, implementation summaries, or a lightweight browsable history of AI-assisted edits.
---

# Code Changelog

Use this skill when the user wants durable change records beyond a final chat reply.

## Workflow

1. Create or reuse a `reviews/` directory in the working project.
2. After each meaningful change, write a new markdown entry containing:
- request or problem statement
- files changed
- main implementation decisions
- verification performed
- open follow-ups

3. Name files with sortable timestamps such as:
- `reviews/2026-04-20_15-30_auth-flow.md`

4. Keep an index file if the user wants a browsable archive:
- `reviews/README.md`
- `reviews/SUMMARY.md`

5. If the user wants a quick local viewer, serve the folder:
- `python3 -m http.server 4000`

## Resources

- `README.txt`: original longer guide and viewer concept

## Notes

- This port is guidance-first. There is no bundled Codex-specific helper script in this folder.
- Prefer concise, decision-oriented entries over raw terminal dumps.
