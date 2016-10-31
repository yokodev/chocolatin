'use strict';

const ext = ['.js', '.ts'];

const wrapper = {};

const pre = {};

const loader = {
  test: /\.(js|ts)$/,
  loader: 'istanbul-instrumenter-loader',
  exclude: [/\.(e2e|spec)\.ts$/, /node_modules/],
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
