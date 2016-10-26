'use strict';

const ext = ['.pug', '.jade'];

const wrapper = {};

const loader = {
  test: /\.(pug|jade)$/,
  loader: 'pug-html-loader',
};

const loader = {};

const post = {};

module.exports = () => ({
  ext,
  wrapper,
  pre,
  loader,
  post,
});
