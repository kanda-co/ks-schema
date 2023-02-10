import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import liveReload from "vite-plugin-live-reload";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    liveReload(
      "./node_modules/@kanda-libs/ks-component-ts/dist/(index.esm.js | index.d.ts)"
    ),
  ],
  server: {
    fs: {
      allow: [".."],
    },
    port: 8000,
  },
  optimizeDeps: {
    include: ["cropperjs"],
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
    global: "window",
  },
});
