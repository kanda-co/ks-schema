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
    include: ["@kanda-libs/ks-component-ts", "react-cropper", "cropperjs"],
  },
  build: {
    commonjsOptions: {
      include: [
        /@kanda-libs\/ks-component-ts/,
        /react-cropper/,
        /cropperjs/,
        /node_modules/,
      ],
    },
  },
  define: {
    "process.env": {
      REACT_APP_GET_ADDRESS_API_KEY: "byJL3HWLC0a39cnl5OKNBA31556",
    },
    exports: "{}",
    global: "{}",
  },
});
