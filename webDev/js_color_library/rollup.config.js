import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './dev/index.js',
  output: {
    dir: './dev/index',
    format: 'cjs'
  },
  plugins: [commonjs()]
};
