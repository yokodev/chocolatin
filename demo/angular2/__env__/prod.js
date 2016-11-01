'use strict';

const {
  burn,
  mixins: { Io },
  loaders: { AssetsUrl, TypeScriptNg2, HtmlRaw, Sass, CssExtract },
  plugins: {
    Analyzer,
    Clean,
    Define,
    ProgressBar,
    Minify,
    AssetsGenerator,
    HtmlGenerator,
    Chunk,
    Extract,
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
      { vendor: ['./src/vendor.ts'], app: ['./src/main.browser.ts', './src/critical.css'] },
      { path: './dist', filename: '[name].[hash:8].js' },
      'web'
    ),
  ],
  loaders: [AssetsUrl, TypeScriptNg2, Sass, CssExtract, HtmlRaw],
  plugins: [
    Clean(['dist']),
    Define('production', PROD),
    HtmlGenerator('./src/index.html'),
    DevTool(false),
    Ng2FixContext('./src'),
    Chunk({ name: 'vendor', filename: '[name].[hash:8].js' }),
    AssetsGenerator(),
    ProgressBar(),
    Analyzer(),
    Minify(),
    Extract(),
    Md5Hash(),
    ForkChecker(),
  ],
});
