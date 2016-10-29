'use strict';

const ext = ['.js', '.jsx'];

const wrapper = {
  babel: {
    babelrc: '.babelrc',
  },
};

const pre = {
  test: /\.js$/,
  loader: 'xo',
  exclude: /node_modules/,
};

const loader = {
  test: /\.(js|jsx)$/,
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
