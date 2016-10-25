'use strict';

const TypedocWebpackPlugin = require('typedoc-webpack-plugin');

const wrapper = config => provider => new TypedocWebpackPlugin(config);

module.exports = wrapper;
