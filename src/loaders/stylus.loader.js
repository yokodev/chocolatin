'use strict';

const autoprefixer = require('autoprefixer');
const mqPacker = require('css-mqpacker');
const cssComb = require('postcss-csscomb');

const ext = ['.styl'];

const wrapper = {
  postcss: [autoprefixer({ browsers: ['last 2 versions', 'ie > 8'] }), mqPacker(), cssComb()],
};

const pre = {};

const loader = {
  test: /\.styl$/,
  loaders: ['to-string', 'css', 'postcss', 'stylus'],
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
