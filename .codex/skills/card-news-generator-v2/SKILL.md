---
name: card-news-generator-v2
description: Generate advanced 600x600 card-news series with optional background images and richer styling. Use when the user wants polished social cards with image-backed layouts.
---

# Card News Generator V2

Use this skill when the user wants the card-news workflow plus background-image support or more visual control than the base generator.

## Workflow

1. Gather the required inputs:
- topic
- target audience
- desired number of cards
- output directory

2. Gather V2-specific styling inputs:
- background image folder, if any
- overlay opacity
- fallback solid color
- tone and visual direction

3. Draft the sequence before rendering:
- one key point per card
- concise title and body
- cover, middle value cards, and final close

4. Use the bundled scripts when rendering is requested:
- `generate_card.py`
- `auto_generator.py`
- `interactive_generator.py`

5. Verify the generated set:
- text is readable over images
- image crop looks intentional
- the sequence is visually consistent

## Resources

- `V2_FEATURES.md`: V2 capabilities
- `QUICKSTART_KR.md`: quick usage
- `INTERACTIVE_DEMO.md`: guided generation flow

## Notes

- Prefer V2 over the base skill when background photos matter.
- If the user has no images, fall back to a solid-color workflow rather than blocking.
