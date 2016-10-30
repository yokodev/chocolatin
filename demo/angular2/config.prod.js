'use strict';

const {
  burn,
  mixins: { Io },
  loaders: { AssetsUrl, TypeScriptNg2, HtmlRaw, SassExtract },
  plugins: {
    Clean,
    Define,
    ProgressBar,
    Minify,
    AssetsGenerator,
    HtmlGenerator,
    Chunk,
    DevTool,
    Sass,
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
      { path: './dist', filename: '[name].[hash:8].js' },
      'web'
    ),
  ],
  loaders: [AssetsUrl, TypeScriptNg2, Sass, HtmlRaw],
  plugins: [
    Clean(['dist']),
    Define('production', PROD),
    HtmlGenerator('./src/index.html'),
    DevTool(false),
    Ng2FixContext('./src'),
    Chunk({ name: 'vendor', filename: 'vendor.[hash:8].js' }),
    AssetsGenerator(),
    ProgressBar(),
    Minify(),
    Md5Hash(),
    Extract(),
    ForkChecker(),
  ],
});
