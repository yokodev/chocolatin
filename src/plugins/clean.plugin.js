'use strict';

const CleanWebpackPlugin = require('clean-webpack-plugin');

const wrapper = (dir, root = './') => provider =>
  new CleanWebpackPlugin([...dir], {
    root,
    verbose: true,
  });

module.exports = wrapper;
