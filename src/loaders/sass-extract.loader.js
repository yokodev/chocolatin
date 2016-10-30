'use strict';

const autoprefixer = require('autoprefixer');
const mqPacker = require('css-mqpacker');
const cssComb = require('postcss-csscomb');
const { extract } = require('extract-text-webpack-plugin');

const ext = ['.scss'];

const wrapper = {
  postcss: [autoprefixer({ browsers: ['last 2 versions', 'ie > 8'] }), mqPacker(), cssComb('zen')],
};

const pre = {};

const loader = {
  test: /\.scss$/,
  loader: extract(['css', 'postcss', 'sass']),
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
