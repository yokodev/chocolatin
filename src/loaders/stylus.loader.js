'use strict';

const autoprefixer = require('autoprefixer');
const mqPacker = require('css-mqpacker');

const ext = ['.stylus'];

const wrapper = {
  postcss: [autoprefixer({ browsers: ['last 2 versions', 'ie > 8'] }), mqPacker()],
};

const pre = {};

const loader = {
  test: /\.stylus$/,
  loaders: ['to-string', 'css', 'csscomb', 'postcss', 'stylus'],
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
