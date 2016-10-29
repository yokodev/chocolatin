'use strict';

const ext = ['.stylus'];

const wrapper = {
  postcss: [
    require('autoprefixer')({ browsers: ['last 2 versions', 'ie > 8'] }),
    require('css-mqpacker')(),
  ],
};

const pre = {};

const loader = {
  test: /\.stylus$/,
  loaders: ['inline', 'css', 'csscomb', 'postcss', 'stylus'],
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
