'use strict';

const ext = ['.stylus'];

const wrapper = {};

const pre = {};

const loader = {
  test: /\.stylus$/,
  loaders: ['raw', 'css', 'csscomb', 'postcss', 'stylus'],
};

const post = {};

/**
 * PostCSS example :
 [
 require('autoprefixer')({ browsers: ['last 2 versions', 'ie > 8'] }),
 require('css-mqpacker')(),
 ]
 */
module.exports = (postcss = []) => ({
  ext,
  wrapper: Object.assign(wrapper, { postcss: [...postcss] }),
  pre,
  loader,
  post,
});
