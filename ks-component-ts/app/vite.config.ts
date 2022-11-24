import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    fs: {
      allow: [".."],
    },
    port: 8000,
  },
  // optimizeDeps: {
  //   esbuildOptions: {
  //     plugins: [esbuildCommonjs(["@kanda-libs/ks-component-ts"])],
  //   },
  // },
  optimizeDeps: {
    include: ["@kanda-libs/ks-component-ts", "react-cropper"],
  },
  build: {
    commonjsOptions: {
      include: [
        /@kanda-libs\/ks-component-ts/,
        /react-cropper/,
        /node_modules/,
      ],
    },
  },
  define: {
    "process.env": "{}",
    exports: "{}",
    global: "{}",
  },
});
