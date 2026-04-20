---
name: prompt-enhancer
description: Rewrite short coding requests into concrete, repo-aware implementation requirements. Use when the user gives a brief request that needs project context, conventions, or dependency awareness before coding.
---

# Prompt Enhancer

Use this skill when the user request is too short to implement confidently without repo inspection.

## Workflow

1. Inspect key project files:
- package manifests
- framework config
- routing structure
- existing feature folders

2. Detect conventions:
- architecture
- state management
- naming patterns
- test style
- related existing implementations

3. Rewrite the task into a sharper implementation brief containing:
- project context
- scope
- likely file locations
- acceptance criteria
- major risks or assumptions

4. Ask follow-up questions only if a wrong assumption would materially change the implementation.

## Resources

- `references/framework-guides.md`
- `references/enhancement-patterns.md`

## Notes

- After producing the enhanced brief, continue with implementation unless the user clearly asked for planning only.
