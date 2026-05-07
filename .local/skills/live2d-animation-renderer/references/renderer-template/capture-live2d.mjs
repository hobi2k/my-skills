import { createReadStream, existsSync, mkdirSync, rmSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, relative, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { chromium } from "playwright";

const rendererDir = resolve(import.meta.dirname);
const projectRoot = resolve(process.env.LIVE2D_PROJECT_ROOT ?? resolve(rendererDir, "../../../.."));
const modelDir = resolve(
  process.env.LIVE2D_MODEL_DIR ?? resolve(projectRoot, "<path-to-private-model-source>"),
);
const outputDir = resolve(
  process.env.LIVE2D_OUTPUT_DIR ?? resolve(projectRoot, "<path-to-public-derived-output>"),
);
const framesDir = resolve(rendererDir, "frames");
const fps = 12;
const frames = 48;
const states = ["idle", "working", "talking", "success", "error"];

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".moc3", "application/octet-stream"],
  [".png", "image/png"],
]);

function sendFile(response, filePath) {
  response.writeHead(200, {
    "Content-Type": mimeTypes.get(extname(filePath)) ?? "application/octet-stream",
    "Cache-Control": "no-store",
  });
  createReadStream(filePath).pipe(response);
}

function safeResolve(baseDir, requestPath) {
  const decoded = decodeURIComponent(requestPath);
  const filePath = normalize(resolve(baseDir, decoded.replace(/^\/+/, "")));
  const rel = relative(baseDir, filePath);
  if (rel.startsWith("..") || rel === "") return null;
  return filePath;
}

function startServer() {
  const vendor = {
    "/vendor/live2dcubismcore.min.js": join(
      rendererDir,
      "node_modules/live2dcubismcore/live2dcubismcore.min.js",
    ),
    "/vendor/pixi.min.js": join(
      rendererDir,
      "node_modules/pixi.js/dist/browser/pixi.min.js",
    ),
    "/vendor/cubism4.min.js": join(
      rendererDir,
      "node_modules/pixi-live2d-display/dist/cubism4.min.js",
    ),
    "/render.js": join(rendererDir, "render.js"),
    "/": join(rendererDir, "index.html"),
  };

  const server = createServer((request, response) => {
    const pathname = new URL(request.url ?? "/", "http://127.0.0.1").pathname;
    if (vendor[pathname] && existsSync(vendor[pathname])) {
      sendFile(response, vendor[pathname]);
      return;
    }
    if (pathname.startsWith("/model/")) {
      const filePath = safeResolve(modelDir, pathname.slice("/model/".length));
      if (filePath && existsSync(filePath)) {
        sendFile(response, filePath);
        return;
      }
    }
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  });

  return new Promise((resolveServer) => {
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      resolveServer({ server, url: `http://127.0.0.1:${address.port}/` });
    });
  });
}

function makeGif(stateName) {
  const stateFrameDir = join(framesDir, stateName);
  const palette = join(stateFrameDir, "palette.png");
  const output = join(outputDir, `${stateName}.gif`);
  const framePattern = join(stateFrameDir, "%03d.png");

  const paletteResult = spawnSync(
    "ffmpeg",
    [
      "-y",
      "-framerate",
      String(fps),
      "-i",
      framePattern,
      "-vf",
      "palettegen=reserve_transparent=1",
      palette,
    ],
    { stdio: "inherit" },
  );
  if (paletteResult.status !== 0) throw new Error(`palettegen failed: ${stateName}`);

  const gifResult = spawnSync(
    "ffmpeg",
    [
      "-y",
      "-framerate",
      String(fps),
      "-i",
      framePattern,
      "-i",
      palette,
      "-lavfi",
      "paletteuse=alpha_threshold=128",
      "-loop",
      "0",
      output,
    ],
    { stdio: "inherit" },
  );
  if (gifResult.status !== 0) throw new Error(`gif encode failed: ${stateName}`);
}

async function main() {
  mkdirSync(outputDir, { recursive: true });
  rmSync(framesDir, { recursive: true, force: true });
  mkdirSync(framesDir, { recursive: true });

  const { server, url } = await startServer();
  let browser;
  try {
    browser = await chromium.launch({ headless: true, channel: "chrome" });
  } catch (_error) {
    browser = await chromium.launch({ headless: true });
  }

  try {
    const page = await browser.newPage({
      viewport: { width: 512, height: 512 },
      deviceScaleFactor: 1,
    });
    await page.goto(url, { waitUntil: "networkidle" });
    await page.waitForFunction(
      () => window.__live2dRendererReady || window.__live2dRendererError,
      null,
      { timeout: 30000 },
    );
    const error = await page.evaluate(() => window.__live2dRendererError ?? null);
    if (error) throw new Error(error);

    for (const stateName of states) {
      const stateFrameDir = join(framesDir, stateName);
      mkdirSync(stateFrameDir, { recursive: true });
      for (let frame = 0; frame < frames; frame += 1) {
        await page.evaluate(
          ({ stateName, frame, frames }) =>
            window.__renderLive2DFrame(stateName, frame, frames),
          { stateName, frame, frames },
        );
        await page.screenshot({
          path: join(stateFrameDir, `${String(frame).padStart(3, "0")}.png`),
          omitBackground: true,
        });
      }
      makeGif(stateName);
    }
  } finally {
    await browser?.close();
    server.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
