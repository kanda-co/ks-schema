const { build } = require("esbuild");
const { dependencies } = require("./package.json");
const svgrPlugin = require("esbuild-plugin-svgr");
const copyStaticFiles  = require("esbuild-copy-static-files");
const { nodeExternalsPlugin } = require('esbuild-node-externals');

const entryFile = "./src/index.ts";
const shared = {
  bundle: true,
  entryPoints: [entryFile],
  // Treat all dependencies in package.json as externals to keep bundle size to a minimum
  external: Object.keys(dependencies),
  plugins: [
    svgrPlugin(),
    copyStaticFiles({
      src: './src/styles/library.css',
      dest: './dist/library.css',
    }),
    copyStaticFiles({
      src: './src/styles/fonts',
      dest: './dist/fonts',
    }),
    nodeExternalsPlugin()
  ],
  logLevel: "info",
  minify: true,
  sourcemap: true,
};

build({
  ...shared,
  format: "esm",
  outfile: "./dist/index.esm.js",
  target: ["esnext", "node12.22.0"],
});

