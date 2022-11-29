const { build } = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');
// const copyStaticFiles = require('esbuild-copy-static-files');
const { dependencies } = require('./package.json');

const entryFile = './src/index.ts';
const shared = {
  bundle: true,
  entryPoints: [entryFile],
  // Treat all dependencies in package.json as externals to keep bundle size to a minimum
  external: Object.keys(dependencies),
  plugins: [
    // copyStaticFiles({
    //   src: './generated/dist/index.d.ts',
    //   dest: './dist/index.d.ts',
    // }),
    nodeExternalsPlugin(),
  ],
  logLevel: 'info',
  minify: true,
  sourcemap: true,
};

build({
  ...shared,
  format: 'esm',
  outfile: './dist/index.esm.js',
  target: ['esnext', 'node12.22.0'],
});
