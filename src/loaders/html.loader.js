'use strict';

const ext = ['.html'];

const wrapper = {};

const pre = {};

const loader = {
  test: /\.html$/,
  loaders: 'html',
  exclude: /index\.html$/,
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
