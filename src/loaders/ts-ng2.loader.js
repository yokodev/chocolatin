'use strict';

const ext = ['.js', '.ts', '.tsx'];

const wrapper = {
  tslint: {
    emitErrors: true,
    failOnHint: true,
  },
};

const pre = {
  test: /\.(ts|tsx)$/,
  loader: 'tslint',
  exclude: /node_modules/,
};

const loader = {
  test: /\.(ts|tsx)$/,
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
