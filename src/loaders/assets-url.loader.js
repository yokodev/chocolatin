'use strict';

const ext = [];

const wrapper = {};

const pre = {};

const loader = {
  test: /\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
  loader: 'url',
  query: {
    limit: 10000,
    name: '[name].[hash:7].[ext]',
  },
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
