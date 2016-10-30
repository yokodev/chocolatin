'use strict';

const autoprefixer = require('autoprefixer');
const mqPacker = require('css-mqpacker');

const ext = ['.css'];

const wrapper = {
  postcss: [autoprefixer({ browsers: ['last 2 versions', 'ie > 8'] }), mqPacker()],
};

const pre = {};

const loader = {
  test: /\.css$/,
  loaders: ['style', 'css', 'csscomb', 'postcss'],
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
