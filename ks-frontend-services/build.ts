import { build, type BuildFailure, type LogLevel } from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';
import { exec } from 'child_process';
import packageConfig from './package.json' assert { type: 'json' };

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
  external: Object.keys(packageConfig.dependencies),
  plugins: [nodeExternalsPlugin()],
  logLevel: 'info' as LogLevel,
  minify: true,
  sourcemap: true,
  watch: process.env.DEV_WATCH === 'true' && {
    // @ts-ignore
    onRebuild(error: BuildFailure | null) {
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
