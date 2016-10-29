'use strict';

const ext = ['.js'];

const wrapper = {
  xo: {
    envs: ['node', 'browser'],
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

const loader = {};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
