---
name: codex-claude-loop
description: Run a two-agent engineering loop between Codex and Claude Code. Use when the user wants one model to implement and the other to critique, compare plans, or validate risky changes.
---

# Codex-Claude Loop

In this Codex port, Codex acts as the conductor and can hand off plan or review prompts to Claude when the user wants a dual-model workflow.

## Workflow

1. Create a clear implementation plan in the current Codex session.
2. Prepare a concise handoff prompt for Claude containing:
- goal
- constraints
- plan or diff to review
- exact questions to answer

3. Compare Claude feedback against the current implementation.
4. Apply or reject feedback with explicit reasoning.
5. Repeat the loop for major fixes or security-sensitive work.

## Best Uses

- complex refactors
- security-sensitive logic
- feature plans with many edge cases
- independent second opinions before merge

## Notes

- Treat Claude as an external reviewer or collaborator, not as a hidden dependency.
- Preserve a short written summary after each loop so the user can track decisions.
