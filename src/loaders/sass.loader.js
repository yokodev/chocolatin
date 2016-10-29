'use strict';

const ext = ['.scss'];

const wrapper = {
  postcss: [
    require('autoprefixer')({ browsers: ['last 2 versions', 'ie > 8'] }),
    require('css-mqpacker')(),
  ],
};

const pre = {};

const loader = {
  test: /\.scss$/,
  loaders: ['css', 'csscomb', 'postcss', 'sass'],
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
