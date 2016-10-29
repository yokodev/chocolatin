'use strict';

const AssetsGenerator = require('./assets.plugin.js');
const Browser = require('./browser.plugin.js');
const Chunk = require('./chunk.plugin.js');
const Clean = require('./clean.plugin.js');
const Copy = require('./copy.plugin.js');
const Dashboard = require('./dashboard.plugin.js');
const Define = require('./define.plugin.js');
const DevTool = require('./dev-tool.plugin.js');
const ForkChecker = require('./forkchecker.plugin.js');
const Hmr = require('./hmr.plugin.js');
const HtmlGenerator = require('./html.plugin.js');
const Md5Hash = require('./md5hash.plugin.js');
const Minify = require('./minify.plugin.js');
const Ng2FixContext = require('./ng2.plugin.js');
const NoError = require('./no-error.plugin.js');
const ProgressBar = require('./progress-bar.plugin.js');
const Provide = require('./provide.plugin.js');
const TypeDoc = require('./typedoc.plugin.js');

module.exports = {
  AssetsGenerator,
  Browser,
  Chunk,
  Clean,
  Copy,
  Dashboard,
  Define,
  DevTool,
  ForkChecker,
  Hmr,
  HtmlGenerator,
  Md5Hash,
  Minify,
  Ng2FixContext,
  NoError,
  ProgressBar,
  Provide,
  TypeDoc,
};
