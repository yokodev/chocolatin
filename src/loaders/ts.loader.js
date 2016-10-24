'use strict';

const ext = ['.ts'];

const wrapper = {
  tslint: {
    emitErrors: true,
    failOnHint: true,
  },
};

const pre = {
  test: /\.ts$/,
  loader: 'tslint',
  exclude: [/node_modules/],
};

const loader = {
  test: /\.ts/,
  loader: 'awesome-typescript-loader',
  exclude: [/node_modules/],
};

const post = {};

module.exports = () => ({
  ext,
  wrapper,
  pre,
  loader,
  post,
});
