'use strict';

const ext = ['.pug', '.jade'];

const wrapper = {};

const pre = {};

const loader = {
  test: /\.(pug|jade)$/,
  loader: 'pug-html-loader',
};

const post = {};

module.exports = () => ({
  ext,
  wrapper,
  pre,
  loader,
  post,
});
