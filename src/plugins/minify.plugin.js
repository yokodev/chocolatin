'use strict';

const { optimize: { UglifyJsPlugin } } = require('webpack');

const wrapper = (mangle = true) => provider =>
  new UglifyJsPlugin({
    mangle,
    compress: {
      warnings: false,
    },
    comments: false,
  });

module.exports = wrapper;
