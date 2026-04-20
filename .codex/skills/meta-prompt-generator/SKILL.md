---
name: meta-prompt-generator
description: Generate reusable prompt specs and multi-step workflow prompts for coding agents. Use when the user wants a well-structured prompt template instead of immediate implementation.
---

# Meta Prompt Generator

Use this skill when the user wants a reusable prompt artifact that another agent or future session can execute.

## Workflow

1. Clarify the end use:
- one-off task prompt
- reusable team template
- multi-phase agent workflow
- testing or verification prompt

2. Design the prompt structure:
- objective
- inputs
- required phases
- outputs
- validation criteria

3. Include orchestration details only when useful:
- what can run in parallel
- what must be sequential
- what should trigger user confirmation

4. Save or present the final prompt in a reusable markdown format.

## Notes

- In this Codex port, do not assume `.claude/commands/`.
- Default to a repo-local `prompts/` folder or a user-specified destination when saving files.
