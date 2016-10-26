'use strict';

const ext = ['.js', '.ts', '.tsx'];

const wrapper = {};

const pre = {};

const loader = {
  test: /\.(ts|tsx)$/,
  loader: 'awesome-typescript-loader',
};

const post = {};

module.exports = () => ({
  ext,
  wrapper,
  pre,
  loader,
  post,
});
