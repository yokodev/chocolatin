'use strict';

const ext = ['.stylus'];

const wrapper = {};

const pre = {};

const loader = {
  test: /\.stylus$/,
  loaders: ['css', 'csscomb', 'postcss', 'stylus'],
};

const post = {};

/**
 * PostCSS example :
 [
   require('autoprefixer')({ browsers: ['last 2 versions', 'ie > 8'] }),
   require('css-mqpacker')(),
 ]
 */
module.exports = (postcss = [], test = /\.stylus/, more = []) => ({
  ext,
  wrapper: Object.assign(wrapper, { postcss: [...postcss] }),
  pre,
  loader: Object.assign(loader, { test, loaders: [...more, ...loader.loaders] }),
  post,
});
