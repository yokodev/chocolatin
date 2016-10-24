'use strict';

const Clean = require('./clean.plugin.js');
const Define = require('./define.plugin.js');
const NoError = require('./no-error.plugin.js');
const ProgressBar = require('./progress-bar.plugin.js');
const Minify = require('./minify.plugin.js');
const AssetsGenerator = require('./assets.plugin.js');
const Browser = require('./browser.plugin.js');
const Chunk = require('./chunk.plugin.js');
const Dashboard = require('./dashboard.plugin.js');
const DevTool = require('./dev-tool.plugin.js');
const ExtractCss = require('./extract-css.plugin.js');
const Hmr = require('./hmr.plugin.js');
const Html = require('./html.plugin.js');
const InlineCss = require('./inline-css.plugin.js');
const Provide = require('./provide.plugin.js');

module.exports = {
  Clean,
  Define,
  NoError,
  ProgressBar,
  Minify,
  AssetsGenerator,
  Browser,
  Chunk,
  Dashboard,
  DevTool,
  ExtractCss,
  Hmr,
  Html,
  InlineCss,
  Provide,
};
