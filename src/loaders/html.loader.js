'use strict';

const ext = ['.html'];

const wrapper = {};

const pre = {};

const loader = {
  test: /\.html$/,
  loaders: ['raw'],
  exclude: `${process.cwd()}/src/index.html`,
};

const post = {};

module.exports = () => ({
  ext,
  wrapper,
  pre,
  loader,
  post,
});
