import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

const external = ['react', 'react-dom', 'prop-types'];

const plugins = [
  resolve(),
  postcss({
    use: ['sass'],
    plugins: [autoprefixer()],
    inject: false,
    extract: false,
    modules: false,
  }),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
    presets: [
      ['@babel/preset-env', {
        targets: '> 0.25%, not dead',
        modules: false,
      }],
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
    ],
  }),
  terser(),
];

export default [
  {
    input: 'src/facebook-with-button.js',
    output: {
      file: 'dist/facebook-login-with-button.mjs',
      format: 'es',
      sourcemap: false,
    },
    external,
    plugins,
  },
  {
    input: 'src/facebook.js',
    output: {
      file: 'dist/facebook-login-render-props.mjs',
      format: 'es',
      sourcemap: false,
    },
    external,
    plugins,
  },
];
