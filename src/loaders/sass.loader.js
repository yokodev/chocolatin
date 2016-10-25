'use strict';

const ext = ['.scss'];

const wrapper = {};

const pre = {};

const loader = {
  test: /\.css$/,
  loaders: ['css', 'csscomb', 'postcss', 'sass'],
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
