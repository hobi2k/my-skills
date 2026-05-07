# Live2D Renderer Template

Use this template to render reusable UI animations from any Live2D Cubism model
package without recording the user's desktop.

## Placement

- Source model: any private/non-public `<source-dir>` allowed by the license.
- Reproducible renderer: `<project-root>/.codex/live2d/<model-id>/renderer`, `<project-root>/tools/live2d/<model-id>/renderer`, or another documented tool folder.
- Final derivative assets: the app's public/static asset folder, for example `<project-root>/frontend/public/assets/<category>/<model-id>`.
- Do not put raw `.moc3`, texture atlases, or marketplace source zips under public/static folders unless redistribution is explicitly allowed.

## Dependencies

Create an isolated renderer package and install dependencies there:

```bash
npm install pixi.js@6 pixi-live2d-display@0.4.0 live2dcubismcore playwright
```

Do not run this install in the application root unless the user explicitly wants renderer dependencies there.

## Configuration

Prefer environment variables over editing paths in scripts:

```bash
LIVE2D_PROJECT_ROOT=/path/to/project \
LIVE2D_MODEL_DIR=/path/to/private/model-source \
LIVE2D_OUTPUT_DIR=/path/to/project/public-or-static-assets/live2d/model-id \
npm run capture
```

Then update `render.js`:

- `MODEL_URL`: path to the `.model3.json` relative to `LIVE2D_MODEL_DIR`
- `STATE_PRESETS`: expressions/parameter toggles for the target model
- `EXTRA_SWAY_PARAMS`: optional hair/accessory/cloth parameters discovered from `.cdi3.json`

## Animation Requirements

Drive model parameters directly. A valid render should move at least:

- head/body angle
- eye open/eye ball
- mouth form/open
- breathing
- hair, accessories, or other physics-style parameters when available
- expression/toggle parameters from `.exp3.json` or `.motion3.json` when useful

Avoid fake animation that only shakes a flat screenshot.

## QA Checklist

- `file <output-dir>/*` reports the expected image/video format.
- Frame hashes differ between frame `000` and a mid-frame for every state.
- At least one generated frame per state is visually inspected.
- Scratch frames are removed or intentionally ignored.
- Application root `package.json` has no renderer dependency churn unless explicitly intended.
