const { build } = require("esbuild");
const svgrPlugin = require("esbuild-plugin-svgr");
const chokidar = require("chokidar");
const liveServer = require("live-server");

(async () => {
  const builder = await build({
    bundle: true,
    // Defines env variables for bundled JavaScript; here `process.env.NODE_ENV`
    // is propagated with a fallback.
    define: {
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
    },
    entryPoints: ["./index.ts"],
    plugins: [
      svgrPlugin(),
    ],
    // Uses incremental compilation (see `chokidar.on`).
    incremental: true,
    // Removes whitespace, etc. depending on `NODE_ENV=...`.
    minify: process.env.NODE_ENV === "production",
    outfile: "public/script.js",
    sourcemap: true,
  });
  // `chokidar` watcher source changes.
  chokidar
    // Watches TypeScript and React TypeScript.
    .watch("src/**/*.{ts,tsx}", {
      interval: 0, // No delay
    })
    // Rebuilds esbuild (incrementally -- see `build.incremental`).
    .on("all", () => {
      builder.rebuild();
    });
  // `liveServer` local server for hot reload.
  liveServer.start({
    // Opens the local server on start.
    open: true,
    port:8080,
    // Uses `public` as the local server folder.
    root: "public",
  });
})();
