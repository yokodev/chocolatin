'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const wrapper = (filename = '[name].[contenthash:8].css') => provider => new ExtractTextPlugin(filename);

module.exports = wrapper;
