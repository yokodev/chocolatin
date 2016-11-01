'use strict';

const {
  provide,
  loaders: { AssetsUrl, Babel, HtmlRaw, Sass },
  plugins: {
    Define,
    DevTool,
  },
} = require('chocolatin');

const { TEST } = require('./metadata');

module.exports = provide({
  mixins: [],
  loaders: [AssetsUrl, Babel, Sass, HtmlRaw],
  plugins: [
    Define('test', TEST),
    DevTool(true),
  ],
});
