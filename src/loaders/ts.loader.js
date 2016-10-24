'use strict';

const ext = ['.ts'];

const wrapper = {};

const pre = {
  test: /\.ts$/,
  loader: 'tslint',
};

const loader = {
  test: /\.ts/,
  loader: 'awesome-typescript-loader',
  exclude: [/node_modules/],
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
