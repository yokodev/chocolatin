'use strict';

const CleanWebpackPlugin = require('clean-webpack-plugin');

const wrapper = paths => provider =>
  new CleanWebpackPlugin([...paths], { root: process.cwd(), verbose: true });

module.exports = wrapper;
