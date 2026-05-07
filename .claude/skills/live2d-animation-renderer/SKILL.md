---
name: live2d-animation-renderer
description: Use when creating, replacing, QAing, or packaging UI animations from any Live2D Cubism model package. Covers safe asset inventory, license-aware placement, headless browser rendering to GIF/PNG/WebM, parameter/expression-driven motion, validation, and cleanup. Use for BOOTH/nizima/Live2D zips, .model3.json/.moc3/.exp3.json/.physics3.json, mascot loaders, app UI animations, or reusable Live2D render pipelines. Not tied to any specific model or project.
metadata:
  short-description: Render reusable Live2D UI animations
---

# Live2D Animation Renderer

## Core Rules

- Do not record the user's desktop unless they explicitly approve that interruption. Prefer headless browser rendering.
- Do not hard-code a model name, project name, or app path into the skill output. Use placeholders such as `<model-id>`, `<project-root>`, `<source-dir>`, and `<output-dir>`.
- Do not leave reusable assets in disposable scratch folders. Use scratch only for temporary frames and remove it before finalizing.
- Keep raw marketplace/model sources out of public web folders unless the license explicitly permits redistributing source files.
- Put only derivative app assets in public/static output folders: GIF, PNG sequence, WebM, APNG, sprite sheet, or app-specific JSON metadata.
- Generate animation by driving Live2D parameters, expressions, physics, or model motions. Do not fake motion by shaking a flat screenshot.
- Keep motion natural: inspect available parameter ranges and avoid overdriving hair, accessories, eyes, mouth, or expression toggles.
- Preserve reproducibility: keep a renderer workspace/template near the project or in a documented tool folder, but avoid installing renderer dependencies into the app root unless requested.

## Workflow

1. Inspect the source package:
   - list `.model3.json`, `.moc3`, texture folders, `.physics3.json`, `.cdi3.json`, `.exp3.json`, `.motion3.json`, README/license files.
   - choose a stable ASCII `<model-id>` for filesystem paths, independent of the display name.
   - document license limits before copying anything into an app-public folder.
2. Read model metadata:
   - `.model3.json`: model file, texture paths, physics, expressions, motions.
   - `.cdi3.json` when present: human-readable parameter names.
   - `.exp3.json` / `.motion3.json` when present: expression and motion options.
3. Decide output states and format:
   - Common UI states: `idle`, `working`, `talking`, `success`, `error`.
   - App-specific states are allowed, but keep names generic enough for reuse.
   - Prefer transparent GIF/APNG for simple loaders, WebM for heavier motion, PNG sequences for game engines.
4. Build animation presets:
   - `idle`: breath, blink, light head/body motion, subtle hair/accessory sway.
   - `working`: faster but controlled head/body motion, eye tracking, subtle mouth movement.
   - `talking`: mouth open/form animation, eye movement, light head/body motion.
   - `success`: smile/cheek/eye-smile expression, upbeat head/body/accessory movement.
   - `error`: worried/brow/mouth stress expression if available, small parameter tension, no broken-looking jitter.
5. Render headlessly:
   - copy `references/renderer-template` into an isolated renderer directory.
   - set `LIVE2D_PROJECT_ROOT`, `LIVE2D_MODEL_DIR`, and `LIVE2D_OUTPUT_DIR`, or edit the placeholders.
   - install dependencies inside that renderer directory.
   - run the capture script.
6. Verify:
   - output files exist in the intended app/static directory.
   - frame count, dimensions, and transparency are expected.
   - compare frame hashes or pixel diffs for nonzero motion in each state.
   - visually inspect at least one representative frame or generated animation per state.
7. Cleanup:
   - remove frame caches and scratch folders.
   - remove old derivative assets no longer referenced.
   - confirm no accidental app-root dependency churn.

## References

- Read `references/renderer-template/README.md` before creating or updating a renderer.
- Copy and adapt `references/renderer-template` only when a reproducible renderer is needed.
