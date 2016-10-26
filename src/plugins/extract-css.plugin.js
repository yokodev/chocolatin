'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { hasLoader } = require('../helpers/help');

const wrapper = (match, filename = '[name].[contenthash:8].css') => provider => {
  provider
    .module
    .rules
    .filter(hasLoader(match, 'css'))
    .forEach(loader => {
      const key = loader.loaders ? 'loaders' : 'loader';

      loader.loader = ExtractTextPlugin.extract(loader[key]);

      delete loader[key];
    });

  return new ExtractTextPlugin(filename);
};

module.exports = wrapper;
