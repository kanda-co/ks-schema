import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import sourcemaps from "rollup-plugin-sourcemaps";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import copy from "rollup-plugin-copy";
import postcss from "rollup-plugin-postcss";
import reactSvg from "rollup-plugin-react-svg";
import execute from "rollup-plugin-shell";
import dotenv from "rollup-plugin-dotenv";

export function createRollupConfig(options, callback) {
  const name = options.name;
  // A file with the extension ".mjs" will always be treated as ESM, even when pkg.type is "commonjs" (the default)
  // https://nodejs.org/docs/latest/api/packages.html#packages_determining_module_system
  const extName = options.format === "esm" ? "mjs" : "js";
  const outputName = "dist/" + [name, options.format, extName].join(".");

  const config = {
    input: options.input,
    output: {
      file: outputName,
      format: options.format,
      name: "ReactHookForm",
      sourcemap: true,
      globals: {
        react: "React",
        clsx: "clsx",
        "react-loading-skeleton": "Skeleton",
        "@kanda-libs/ks-design-library": "@kanda-libs/ks-design-library",
        "react-hook-form": "react-hook-form",
        "react-number-format": "react-number-format",
        "lodash.get": "lodash.get",
      },
      exports: "named",
    },
    plugins: [
      dotenv(),
      reactSvg(),
      postcss({
        extensions: [".css"],
      }),
      external(),
      typescript({
        tsconfig: options.tsconfig,
        clean: true,
        typescript: require("ttypescript"),
      }),
      options.format === "umd" &&
        commonjs({
          include: /\/node_modules\//,
        }),
      sourcemaps(),
      // options.format !== "esm" &&
      //   terser({
      //     output: { comments: false },
      //     compress: {
      //       drop_console: false,
      //     },
      //   }),
      copy({
        targets: [
          { src: "src/styles/library.css", dest: "dist" },
          { src: "src/styles/fonts", dest: "dist" },
        ],
      }),
      // Generate widget types
      // execute(
      //   "./node_modules/.bin/dts-bundle-generator -o dist/widget.d.ts src/generated/widget/index.tsx"
      // ),
      // Generate index.d.ts file
      execute(
        "./node_modules/.bin/dts-bundle-generator --external-inlines=./generated -o dist/index.d.ts src/index.ts"
      ),
    ].filter(Boolean),
  };

  return callback ? callback(config) : config;
}
