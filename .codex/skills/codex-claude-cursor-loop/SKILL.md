---
name: codex-claude-cursor-loop
description: Coordinate a three-agent workflow across Codex, Claude Code, and Cursor. Use when the user wants Codex to orchestrate planning, external implementation, and independent review loops.
---

# Codex-Claude-Cursor Loop

Use this skill only when the user explicitly wants a multi-agent workflow. In this port, Codex should orchestrate the process rather than assume Claude is the primary actor.

## Workflow

1. Plan the task in Codex:
- define architecture
- split work into reviewable chunks
- identify validation checkpoints

2. Hand off as needed:
- Claude for alternate planning or review
- Cursor for implementation or parallel execution

3. Keep the loop tight:
- send only the task slice needed
- request specific outputs, not open-ended brainstorming
- bring results back into Codex for synthesis

4. After each round, record:
- what changed
- what each agent found
- what remains unresolved

## Best Uses

- complex features with risky implementation details
- large UI or product work where Cursor is doing hands-on coding
- situations where Codex should remain the final integrator

## Notes

- Do not delegate the immediate blocking step if Codex can do it directly.
- Use this workflow sparingly; it adds coordination overhead.
