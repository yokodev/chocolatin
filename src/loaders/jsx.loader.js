'use strict';

const ext = ['.js', '.jsx'];

const wrapper = {
  xo: {
    esnext: true,
    space: true,
    envs: ['node', 'browser'],
    plugins: ['react'],
    globals: ['METADATA', 'ENV', 'NODE_ENV'],
    rules: {
      'object-curly-spacing': 0,
      'import/no-unresolved': 0,
      'import/no-unassigned-import': 0,
    },
  },
};

const pre = {
  test: /\.(js|jsx)$/,
  loader: 'xo',
  exclude: /node_modules/,
};

const loader = {
  test: /\.(js|jsx)$/,
  loader: 'babel',
  exclude: /node_modules/,
  query: {
    presets: [
      ['es2015', { 'modules': false }],
      'stage-2',
      'react',
    ],
    plugins: ['react-hot-loader/babel', 'transform-runtime'],
  },
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
