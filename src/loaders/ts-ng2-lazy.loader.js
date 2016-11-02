'use strict';

const { TSLINT_NG2 } = require('./static/tslint');

const ext = ['.js', '.ts'];

const wrapper = {
  tslint: {
    emitErrors: true,
    failOnHint: true,
    configuration: TSLINT_NG2,
  },
};

const pre = {
  test: /\.ts$/,
  loader: 'tslint',
  exclude: /node_modules/,
};

const loader = {
  test: /\.ts$/,
  loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader'],
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
