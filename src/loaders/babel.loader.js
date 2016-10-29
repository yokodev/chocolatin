'use strict';

const ext = ['.js'];

const wrapper = {
  babel: {
    babelrc: '.babelrc',
  },
  xo: {
    envs: ['node', 'browser'],
    esnext: true,
    space: true,
    rules: {
      'object-curly-spacing': 0,
      'import/no-unresolved': 0,
      'import/no-unassigned-import': 0,
    },
  },
};

const pre = {
  test: /\.js$/,
  loader: 'xo',
  exclude: /node_modules/,
};

const loader = {
  test: /\.js$/,
  loader: 'babel',
  exclude: /node_modules/,
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
