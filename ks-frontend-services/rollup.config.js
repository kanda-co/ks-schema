import typescript from 'rollup-plugin-typescript';
import dts from 'rollup-plugin-dts';
import babel from 'rollup-plugin-babel';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import resolve from 'rollup-plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

const name = require('./package.json').main.replace(/\.js$/, '');

const bundle = (config) => ({
  ...config,
  input: 'src/index.ts',
  external: (id) => !/^[./]/.test(id),
});

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [
  bundle({
    plugins: [
      typescript(),
      nodePolyfills(),
      resolve({
        extensions,
      }),
      commonjs(),
      babel({
        extensions,
        include: ['src/**/*'],
      }),
      typescriptPaths(),
      process.env.NODE_ENV === 'production' && uglify(),
    ],
    output: [
      {
        file: `${name}.js`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `${name}.mjs`,
        format: 'es',
        sourcemap: true,
      },
    ],
    context: 'this',
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `${name}.d.ts`,
      format: 'es',
    },
  }),
];
