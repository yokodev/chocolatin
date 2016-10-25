'use strict';

var CopyWebpackPlugin = require('copy-webpack-plugin');

const wrapper = data => provider => new CopyWebpackPlugin(data);

module.exports = wrapper;
