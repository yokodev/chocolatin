'use strict';

const autoprefixer = require('autoprefixer');
const mqPacker = require('css-mqpacker');
const cssComb = require('postcss-csscomb');

const ext = ['.css'];

const wrapper = {
  postcss: [autoprefixer({ browsers: ['last 2 versions', 'ie > 8'] }), mqPacker(), cssComb('zen')],
};

const pre = {};

const loader = {
  test: /\.css$/,
  loaders: ['to-string', 'css', 'postcss'],
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
