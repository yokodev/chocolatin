'use strict';

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const wrapper = () => provider => process.env.TRAVIS ? () => ({}) : new BundleAnalyzerPlugin();

module.exports = wrapper;
