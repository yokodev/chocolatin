'use strict';

const ext = [];

const wrapper = {};

const pre = {};

const loader = {
  test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf|wav)(\?.*)?$/,
  loader: 'file',
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
