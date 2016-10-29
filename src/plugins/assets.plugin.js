'use strict';

const AssetsPlugin = require('assets-webpack-plugin');

const wrapper = () => provider => new AssetsPlugin({ filename: `${provider.output.path}assets.json` });

module.exports = wrapper;
