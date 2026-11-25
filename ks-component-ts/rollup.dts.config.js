import dts from "rollup-plugin-dts";
import alias from "@rollup/plugin-alias";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dtsResolver = nodeResolve({
  extensions: [".d.ts", ".ts", ".js"],
});

export default {
  input: "dist/index.d.ts", // Back to the clean, original entry point
  output: [{ file: "dist/index.d.ts", format: "es" }],
  plugins: [
    alias({
      entries: [
        { find: /^~\/(.*)/, replacement: path.resolve(__dirname, "dist/$1") },
        {
          find: "generated/components/schemas",
          replacement: path.resolve(
            __dirname,
            "dist/generated/components/schemas",
          ),
        },
      ],
      customResolver: dtsResolver,
    }),
    dtsResolver,
    dts({
      compilerOptions: {
        skipLibCheck: true,
      },
    }),
    // AUTOMATION: Automatically turn all local bundled types into public exports
    {
      name: "force-export-all",
      writeBundle() {
        const dtsPath = path.resolve(__dirname, "dist/index.d.ts");
        if (fs.existsSync(dtsPath)) {
          let content = fs.readFileSync(dtsPath, "utf8");

          // Regex captures any line starting exactly with interface, type, or declare
          // and prefixes it with 'export ' (ignoring items already exported)
          content = content.replace(
            /^(interface|type|declare)\b/gm,
            "export $1",
          );

          fs.writeFileSync(dtsPath, content);
          console.log(
            "✨ Successfully exposed all bundled interfaces and types!",
          );
        }
      },
    },
  ],
  external: [
    "react",
    "react-hook-form",
    "@reduxjs/toolkit",
    "@kanda-libs/ks-design-library",
    "@kanda-libs/ks-frontend-services",
    /\.css$/,
  ],
};
