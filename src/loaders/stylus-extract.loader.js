'use strict';

const autoprefixer = require('autoprefixer');
const mqPacker = require('css-mqpacker');
const cssComb = require('postcss-csscomb');
const { extract } = require('extract-text-webpack-plugin');

const ext = ['.stylus'];

const wrapper = {
  postcss: [autoprefixer({ browsers: ['last 2 versions', 'ie > 8'] }), mqPacker(), cssComb()],
};

const pre = {};

const loader = {
  test: /\.stylus$/,
  loader: extract(['css', 'postcss', 'stylus']),
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
