'use strict';

const {
  provide,
  loaders: { AssetsUrl, TypeScriptNg2, HtmlRaw, Sass },
  plugins: {
    Define,
    DevTool,
    Ng2FixContext,
  },
} = require('chocolatin');

const { TEST } = require('./metadata');

module.exports = provide({
  mixins: [],
  loaders: [AssetsUrl, TypeScriptNg2, Sass, HtmlRaw],
  plugins: [
    Define('test', TEST),
    DevTool(true),
    Ng2FixContext('./src'),
  ],
});
