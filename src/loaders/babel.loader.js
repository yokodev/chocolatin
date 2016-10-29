'use strict';

const ext = ['.js'];

const wrapper = {
  babel: {
    babelrc: '.babelrc',
  },
  xo: {
    space: true,
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
