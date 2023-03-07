const { build } = require("esbuild");
const { dependencies } = require("./package.json");
const svgrPlugin = require("esbuild-plugin-svgr");
const copyStaticFiles = require("esbuild-copy-static-files");
const { nodeExternalsPlugin } = require("esbuild-node-externals");
const { exec } = require("child_process");

const handleYalcPublish = () => {
  // @ts-ignore
  exec("yarn build:types", (e, stdout) => {});
  exec("yalc publish", (e, stdout) => {
    console.log("New version of package published to yalc");
    // @ts-ignore
    exec("cd ./app && yalc update", (e, stdout) => {
      console.log("App now using new version of package from yalc");
      if (process.env.DEV_DASHBOARD === "true") {
        // @ts-ignore
        exec(
          "yarn --cwd ../../ks-dashboard-frontend yalc:update && yarn --cwd ../../ks-dashboard-frontend",
          (e, stdout) => {
            console.log("Dashboard updated");
          }
        );
      }
    });
  });
};

const DEV_WATCH = process.env.DEV_WATCH === "true";

const entryFile = "./src/index.ts";
const shared = {
  bundle: true,
  entryPoints: [entryFile],
  // Treat all dependencies in package.json as externals to keep bundle size to a minimum
  external: Object.keys(dependencies),
  plugins: [
    svgrPlugin(),
    copyStaticFiles({
      src: "./src/styles/library.css",
      dest: "./dist/library.css",
    }),
    copyStaticFiles({
      src: "./src/styles/fonts",
      dest: "./dist/fonts",
    }),
    nodeExternalsPlugin(),
  ],
  logLevel: "info",
  minify: !DEV_WATCH,
  sourcemap: true,
  watch: DEV_WATCH && {
    // @ts-ignore
    onRebuild(error) {
      if (error) console.error("watch build failed:", error);
      else console.log("watch build succeeded");
      // @ts-ignore
      handleYalcPublish();
    },
  },
};

build({
  ...shared,
  format: "esm",
  outfile: "./dist/index.esm.js",
  target: ["esnext", "node12.22.0"],
}).finally(handleYalcPublish);
