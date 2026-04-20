---
name: web-to-markdown
description: Convert web pages into markdown files for archiving, note-taking, or AI context preparation. Use when the user wants a URL captured as readable markdown, an AI-optimized context file, or both.
---

# Web to Markdown

Use this skill when the output should be a saved markdown artifact, not just a spoken summary.

## Workflow

1. Collect the URL and desired output mode:
- readable markdown
- AI-optimized markdown
- both

2. Decide the destination:
- return inline only
- save to the current directory
- save to a user-specified path

3. Fetch the content using the best available option:
- built-in web tools when available
- browser automation if the page is heavily client-rendered
- external fetchers only with user approval

4. Convert and save:
- `.md` for normal reading
- `.context.md` for structured AI context when requested

5. Report:
- saved file paths
- whether dynamic content was incomplete
- whether the result is suited for reading, RAG, or both

## Resources

- `AI_OPTIMIZATION.md`
- `QUICKSTART.md`
- `EXAMPLES.md`

## Notes

- Do not assume Claude-specific `WebFetch`.
- If browser rendering is required and no browser tool is available, explain the limitation clearly.
