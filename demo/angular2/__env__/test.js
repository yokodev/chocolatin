'use strict';

const {
  provide,
  loaders: { AssetsUrl, TypeScript, HtmlRaw, Sass },
  plugins: {
    Define,
    DevTool,
    Ng2FixContext,
  },
} = require('chocolatin');

const { TEST } = require('./metadata');

module.exports = provide({
  mixins: [],
  loaders: [AssetsUrl, TypeScript, Sass, HtmlRaw],
  plugins: [
    Define('test', TEST),
    DevTool(true),
    Ng2FixContext('./src'),
  ],
});
