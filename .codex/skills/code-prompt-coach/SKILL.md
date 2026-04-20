---
name: code-prompt-coach
description: Analyze Claude Code session logs or exported coding transcripts to improve prompting habits, tool usage, and workflow efficiency. Use when the user wants coaching based on past AI coding sessions.
---

# Code Prompt Coach

Use this skill to review historical coding-session artifacts and turn them into actionable coaching.

## Workflow

1. Identify the data source:
- default Claude Code logs in `~/.claude/projects/`
- or a user-provided export directory

2. Decide the scope:
- all projects
- one project
- date range
- one specific dimension such as prompt quality, cost, or tool usage

3. Analyze for patterns such as:
- prompts that triggered extra clarification
- repeated failures or retries
- tool overuse or underuse
- session length and iteration count
- hotspots by file or project

4. Produce a coaching report with:
- strongest patterns
- concrete examples
- recommended behavior changes
- a short next-week action plan

## Resources

- `docs/general-analysis-report-public.md`
- `docs/prompt-quality-analysis-report-public.md`
- `docs/tool-usage-analysis-30days-public.md`
- `docs/token-usage-analysis-30days-public.md`
- `docs/productivity_time_patterns_report-public.md`

## Notes

- This skill still targets Claude Code logs as the primary source because that is the dataset bundled with the original skill.
- If the machine has no `~/.claude/projects/`, ask for an export path instead of failing.
