const { build } = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');
const { dependencies } = require('./package.json');
const { exec } = require('child_process');

const handleYalcPublish = () => {
  // @ts-ignore
  exec('yalc publish', (e, stdout) => {
    console.log('New version of package published to yalc');
    // @ts-ignore
    exec('cd ./app && yalc update', (e, stdout) => {
      console.log('App now using new version of package from yalc');
    });
  });
};

const entryFile = './src/index.ts';
const shared = {
  bundle: true,
  entryPoints: [entryFile],
  // Treat all dependencies in package.json as externals to keep bundle size to a minimum
  external: Object.keys(dependencies),
  plugins: [nodeExternalsPlugin()],
  logLevel: 'info',
  minify: true,
  sourcemap: true,
  watch: process.env.DEV_WATCH === 'true' && {
    // @ts-ignore
    onRebuild(error) {
      if (error) console.error('watch build failed:', error);
      else console.log('watch build succeeded');
      handleYalcPublish();
    },
  },
};

build({
  ...shared,
  format: 'esm',
  outfile: './dist/index.esm.js',
  target: ['esnext', 'node12.22.0'],
}).finally(handleYalcPublish);
