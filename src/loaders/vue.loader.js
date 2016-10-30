'use strict';

const autoprefixer = require('autoprefixer');
const mqPacker = require('css-mqpacker');
const cssComb = require('postcss-csscomb');

const ext = ['.vue'];

const wrapper = {
  vue: {
    loaders: {},
    postcss: [autoprefixer({ browsers: ['last 2 versions', 'ie > 8'] }), mqPacker(), cssComb('zen')],
  },
};

const pre = {};

const loader = {
  test: /\.vue$/,
  loader: 'vue',
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
