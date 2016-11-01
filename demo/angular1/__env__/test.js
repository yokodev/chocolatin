'use strict';

const {
  provide,
  loaders: { AssetsUrl, BabelStage2Decorators, HtmlRaw, Sass },
  plugins: {
    Define,
    DevTool,
  },
} = require('chocolatin');

const { TEST } = require('./metadata');

module.exports = provide({
  mixins: [],
  loaders: [AssetsUrl, BabelStage2Decorators, Sass, HtmlRaw],
  plugins: [
    Define('test', TEST),
    DevTool(true),
  ],
});
