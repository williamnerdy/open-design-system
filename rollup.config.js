import scss from 'rollup-plugin-scss';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    scss(),
    external(),
    resolve(),
    typescript({
      clean: true,
      rollupCommonJSResolveHack: true,
      exclude: ['**/*.spec.tsx', '**/*.stories.tsx']
    }),
    commonjs({
      include: ['node_modules/**']
    })
  ]
};
