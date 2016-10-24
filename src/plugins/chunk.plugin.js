'use strict';

const { optimize: { CommonsChunkPlugin } } = require('webpack');

const wrapper =
  (chunky = { name: 'vendor', minChunks: Infinity, filename: 'vendor.[chunkhash:8].js', }) =>
    provider =>
      new CommonsChunkPlugin(chunky);

module.exports = wrapper;
