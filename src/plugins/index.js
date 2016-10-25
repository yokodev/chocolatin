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
const HtmlGenerator = require('./html.plugin.js');
const InlineCss = require('./inline-css.plugin.js');
const Provide = require('./provide.plugin.js');
const Copy = require('./copy.plugin.js');
const TypeDoc = require('./typedoc.plugin.js');
const Md5Hash = require('./md5hash.plugin.js');

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
  HtmlGenerator,
  InlineCss,
  Provide,
  Copy,
  TypeDoc,
  Md5Hash,
};
