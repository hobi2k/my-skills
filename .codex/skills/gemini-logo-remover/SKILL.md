---
name: gemini-logo-remover
description: Clean up small corner overlays or AI-generated markers in user-owned images with inpainting techniques. Use when the user wants to retouch an image they are authorized to edit.
---

# Gemini Logo Remover

Use this skill for small retouching tasks on user-owned or user-authorized images where inpainting is appropriate.

## Workflow

1. Confirm the input image path and output path.
2. Identify the unwanted region:
- exact coordinates if provided
- or an approximate corner-based region

3. Use OpenCV inpainting:
- build a mask
- inpaint the selected area
- save a new file instead of overwriting the original by default

4. Review the result:
- look for visible artifacts
- retry with a smaller or better-shaped mask if needed

## Notes

- Works best for small overlays on simple backgrounds.
- Do not assume the same logo position on every image; inspect first.
- If OpenCV is missing, explain the dependency and install only with user approval.
