'use strict';

const ext = ['.js', '.ts'];

const wrapper = {
  tslint: {
    emitErrors: true,
    failOnHint: true,
  },
};

const pre = {
  test: /\.ts$/,
  loader: 'tslint',
  exclude: /node_modules/,
};

const loader = {
  test: /\.ts$/,
  loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
