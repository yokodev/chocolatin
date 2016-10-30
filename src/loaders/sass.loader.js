'use strict';

const autoprefixer = require('autoprefixer');
const mqPacker = require('css-mqpacker');

const ext = ['.scss'];

const wrapper = {
  postcss: [autoprefixer({ browsers: ['last 2 versions', 'ie > 8'] }), mqPacker()],
};

const pre = {};

const loader = {
  test: /\.scss$/,
  loaders: ['to-string', 'css', 'csscomb', 'postcss', 'sass'],
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
