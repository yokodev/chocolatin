'use strict';

const {
  burn,
  mixins: { Io },
  loaders: { AssetsUrl, BabelStage2Decorators, SassExtract, CssExtract, HtmlRaw },
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
  },
} = require('chocolatin');

const { PROD } = require('./metadata');

burn({
  mixins: [
    Io(
      { vendor: ['./src/vendor.js'], app: ['./src/main.browser.js', './src/critical.css'] },
      { path: './dist', filename: '[name].[hash:8].js' },
      'web'
    ),
  ],
  loaders: [AssetsUrl, BabelStage2Decorators, SassExtract, CssExtract, HtmlRaw],
  plugins: [
    Clean(['dist']),
    Define('production', PROD),
    HtmlGenerator('./src/index.html'),
    DevTool(false),
    Chunk({ name: 'vendor', filename: '[name].[hash:8].js' }),
    AssetsGenerator(),
    ProgressBar(),
    Minify(false), // Disable mangle
    Analyzer(),
    Extract(),
    Md5Hash(),
  ],
});
