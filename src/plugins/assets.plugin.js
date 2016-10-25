'use strict';

const AssetsPlugin = require('assets-webpack-plugin');

const wrapper = path => provider => new AssetsPlugin({ filename: `${path}assets.json`, prettyPrint: true });

module.exports = wrapper;
