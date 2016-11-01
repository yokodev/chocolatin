'use strict';

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const wrapper = () => provider => process.env.TRAVIS || process.env.CI ? () => ({}) : new BundleAnalyzerPlugin();

module.exports = wrapper;
