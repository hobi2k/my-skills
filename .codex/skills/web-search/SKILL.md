---
name: web-search
description: Run text, news, or image search through the bundled DuckDuckGo-based helper script. Use when the user wants search results with region or time filters and built-in browsing is unavailable or not enough.
---

# Web Search

Use this skill when the user needs filtered search results that are easier to script or save than built-in browsing.

## Workflow

1. Determine search mode:
- text
- news
- images

2. Choose filters:
- result count
- region
- safe search
- time period

3. Run the bundled helper:
- global install example: `python3 ~/.codex/skills/web-search/scripts/search.py ...`
- repo-local example: `python3 .codex/skills/web-search/scripts/search.py ...`

4. Summarize the results in user-friendly form instead of dumping raw JSON unless the user asked for raw output.

## Common Examples

- text: `python3 .codex/skills/web-search/scripts/search.py -q "React 19" -t text -n 5`
- news: `python3 .codex/skills/web-search/scripts/search.py -q "AI" -t news -r kr-kr -p w -n 10`
- images: `python3 .codex/skills/web-search/scripts/search.py -q "modern dashboard UI" -t images -n 5`

## Notes

- If network access is restricted, explain that the script may require approval or a less sandboxed environment.
- Prefer built-in browsing for simple factual lookups when it is available and sufficient.
