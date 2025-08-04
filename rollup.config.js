import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';

export default {
  input: 'src/lib/index.js',
  output: [
    {
      file: 'lib/index.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: 'lib/index.esm.js',
      format: 'esm',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx']
    }),
    resolve({
      browser: true,
      extensions: ['.js', '.jsx']
    }),
    commonjs({
      include: /node_modules/
    }),
    postcss({
      extract: true,
      minimize: true
    }),
    image()
  ],
  external: ['react', 'react-dom', 'react-icons', 'react-router-dom']
};