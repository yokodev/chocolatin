'use strict';

const ext = ['.js'];

const wrapper = {
  xo: {
    space: true,
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
