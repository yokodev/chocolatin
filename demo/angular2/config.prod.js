'use strict';

const {
  burn,
  mixins: { Io },
  loaders: { AssetsUrl, TypeScriptNg2, HtmlRaw },
  plugins: {
    Clean,
    Define,
    ProgressBar,
    Minify,
    AssetsGenerator,
    HtmlGenerator,
    Chunk,
    DevTool,
    Md5Hash,
    Ng2FixContext,
    ForkChecker,
  },
} = require('chocolatin');

const { PROD } = require('./metadata');

burn({
  mixins: [
    Io(
      { vendor: ['./src/vendor.ts'], app: ['./src/main.browser.ts', './src/critical.scss'] },
      { path: './dist', filename: '[name].js' },
      'web'
    ),
  ],
  loaders: [AssetsUrl, TypeScriptNg2, HtmlRaw],
  plugins: [
    Clean(['dist']),
    Define('production', PROD),
    HtmlGenerator('./src/index.html'),
    DevTool(false),
    Ng2FixContext('./src'),
    Chunk({ name: ['vendor'] }),
    AssetsGenerator(),
    ProgressBar(),
    Minify(),
    Md5Hash(),
    ForkChecker(),
  ],
});
