'use strict';

const ext = ['.js', '.ts', '.tsx'];

const wrapper = {};

const pre = {};

const loader = {
  test: /\.(ts|tsx)$/,
  loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
};

const post = {};

module.exports = () => ({
  ext,
  wrapper,
  pre,
  loader,
  post,
});
