---
name: card-news-generator
description: Generate square card-news slide copy and image assets for social posts. Use when the user wants a 600x600 card series, Instagram carousel content, or educational social slides.
---

# Card News Generator

Use this skill when the user wants a short multi-card social series rather than a full article or landing page.

## Workflow

1. Collect the minimum inputs:
- topic
- target audience
- card count, default `5-7`
- background color or mood
- output directory

2. Draft the card sequence before generating images:
- one idea per card
- title under about 20 Korean characters when possible
- body short enough to fit a square canvas
- keep the whole set coherent from intro to closing CTA

3. Confirm style constraints:
- solid color or simple background
- informative, promotional, or storytelling tone
- whether the user wants only copy or final image files too

4. If images are requested, inspect and run the bundled generators:
- `generate_card.py`
- `auto_generator.py`
- `interactive_generator.py`

5. Save outputs in a predictable folder and report:
- generated files
- any missing fonts or dependency issues
- whether manual copy editing is still recommended

## Resources

- `QUICKSTART_KR.md`: fast usage examples
- `COMPLETE_GUIDE_KR.md`: detailed workflow
- `generate_card.py`: primary generator
- `fonts/Cafe24Ssurround-v2.0.ttf`: bundled title font

## Notes

- Prefer drafting copy first, then rendering images.
- If script flags are unclear, inspect the script or run its help output before execution.
- If the user only wants content, skip image generation and return polished card copy.
