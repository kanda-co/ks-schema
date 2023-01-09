import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import liveReload from 'vite-plugin-live-reload';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: '**/*.tsx',
    }),
    tsconfigPaths(),
    liveReload(
      './node_modules/@kanda-libs/ks-frontend-services/dist/index.esm.js',
    ),
  ],
  server: {
    fs: {
      allow: ['..'],
    },
    port: 8001,
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
  define: {
    'process.env': {
      REACT_APP_GET_ADDRESS_API_KEY: 'byJL3HWLC0a39cnl5OKNBA31556',
      REACT_APP_ENV: 'qa',
      REACT_APP_HOME_URL: 'http://localhost:8001/',
      REACT_APP_LOGIN_URL: 'http://localhost:8001/login',
      REACT_APP_AMPLITUDE_SERVER_URL: 'https://story.kanda.co.uk/chapter',
    },
    exports: '{}',
    global: '{}',
  },
});
