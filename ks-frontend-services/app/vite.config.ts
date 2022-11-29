import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    fs: {
      allow: ['..'],
    },
    port: 8000,
  },
  optimizeDeps: {
    include: ['@kanda-libs/ks-frontend-services'],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
  define: {
    'process.env': {
      REACT_APP_GET_ADDRESS_API_KEY: 'byJL3HWLC0a39cnl5OKNBA31556',
    },
    exports: '{}',
    global: '{}',
  },
});
