---
name: codex
description: Help users run external Codex CLI sessions, batch automations, or resume flows. Use when the user specifically wants codex exec command recipes or out-of-band Codex CLI usage in addition to the current session.
---

# Codex CLI Helper

Use this skill when the user wants to drive the external `codex` CLI, not when ordinary work can be done directly in the current Codex session.

## Workflow

1. Clarify the purpose:
- read-only analysis
- automated edits
- resumed session
- different working directory

2. Choose the command shape:
- `codex exec`
- `codex exec resume --last`

3. Pick explicit options:
- model
- reasoning effort
- sandbox mode
- `--full-auto` only when the user clearly wants automation

4. Show or run the command, then summarize:
- why those flags were chosen
- what the command will do
- what follow-up prompt or resume step is expected

## Quick Reference

- read-only review: `codex exec --sandbox read-only`
- local edits: `codex exec --sandbox workspace-write --full-auto`
- resume prior run: `echo "next prompt" | codex exec resume --last`

## Notes

- Prefer direct work in the current session unless the user explicitly asks for Codex CLI orchestration.
- Resume sessions inherit prior settings; do not add conflicting flags.
