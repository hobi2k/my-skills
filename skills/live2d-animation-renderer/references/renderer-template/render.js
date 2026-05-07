// Template: replace MODEL_URL, STATE_PRESETS, and parameter lists with values
// discovered from the target model's .model3.json, .cdi3.json, and .exp3.json.

const MODEL_URL = "/model/<model-file>.model3.json";
const WIDTH = 512;
const HEIGHT = 512;

const STATE_PRESETS = {
  idle: { toggles: {}, amp: 1, mouth: 0.16 },
  working: { toggles: {}, amp: 1.25, mouth: 0.22 },
  talking: { toggles: {}, amp: 1.5, mouth: 0.8, smile: 0.4 },
  success: { toggles: {}, amp: 1.65, mouth: 0.7, smile: 0.75 },
  error: { toggles: {}, amp: 1.1, mouth: 0.34 },
};

const EXTRA_SWAY_PARAMS = [];

function wave(t, phase = 0, speed = 1) {
  return Math.sin((t * speed + phase) * Math.PI * 2);
}

function clamp01(value) {
  return Math.max(0, Math.min(1, value));
}

function buildParamFrame(stateName, frame, total) {
  const preset = STATE_PRESETS[stateName] ?? STATE_PRESETS.idle;
  const t = frame / total;
  const blink = Math.pow(Math.max(0, wave(t * 3.2, 0.08)), 12);
  const mouthPulse = 0.45 + 0.55 * wave(t, 0.1, stateName === "talking" ? 5.6 : 2.2);

  const params = {
    ParamAngleX: 12 * preset.amp * wave(t, 0.02, 1.05),
    ParamAngleY: 7 * preset.amp * wave(t, 0.24, 0.88),
    ParamAngleZ: 7 * preset.amp * wave(t, 0.41, 0.92),
    ParamEyeBallX: 0.45 * wave(t, 0.31, 0.75),
    ParamEyeBallY: 0.28 * wave(t, 0.57, 0.62),
    ParamEyeLOpen: 1 - 0.86 * blink,
    ParamEyeROpen: 1 - 0.86 * blink,
    ParamEyeLSmile: preset.smile ?? 0.08,
    ParamEyeRSmile: preset.smile ?? 0.08,
    ParamMouthForm: preset.smile ?? 0.12,
    ParamMouthOpenY: clamp01((preset.mouth ?? 0.2) * mouthPulse),
    ParamBreath: 0.55 + 0.28 * wave(t, 0.03, 1.15),
    ...preset.toggles,
  };

  EXTRA_SWAY_PARAMS.forEach((id, index) => {
    params[id] = 5.5 * wave(t, index * 0.037, 0.8);
  });

  return params;
}

function setParam(core, id, value) {
  try {
    core.setParameterValueById(id, value, 1);
  } catch (_error) {
    // Marketplace models often include optional VTS-only parameters.
  }
}

function fitModel(model) {
  const scale = Math.min((WIDTH * 0.9) / model.width, (HEIGHT * 0.96) / model.height);
  model.scale.set(scale);
  if (model.anchor) {
    model.anchor.set(0.5, 0.5);
    model.position.set(WIDTH / 2, HEIGHT * 0.54);
  } else {
    model.position.set((WIDTH - model.width) / 2, (HEIGHT - model.height) / 2);
  }
}

async function init() {
  const app = new PIXI.Application({
    width: WIDTH,
    height: HEIGHT,
    backgroundAlpha: 0,
    antialias: true,
    resolution: 1,
    preserveDrawingBuffer: true,
  });
  document.body.appendChild(app.view);
  app.ticker.stop();

  const model = await PIXI.live2d.Live2DModel.from(MODEL_URL, {
    autoInteract: false,
  });
  model.autoUpdate = false;
  app.stage.addChild(model);
  fitModel(model);

  const core = model.internalModel.coreModel;
  window.__renderLive2DFrame = async (stateName, frame, total) => {
    model.update(1000 / 12);
    for (const [id, value] of Object.entries(buildParamFrame(stateName, frame, total))) {
      setParam(core, id, value);
    }
    core.update();
    app.renderer.render(app.stage);
    await new Promise((resolve) => requestAnimationFrame(resolve));
  };
  window.__live2dRendererReady = true;
}

init().catch((error) => {
  window.__live2dRendererError = error instanceof Error ? error.stack : String(error);
  throw error;
});
