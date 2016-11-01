'use strict';

const {
  burn,
  mixins: { Io },
  loaders: { AssetsUrl, TypeScript, CssExtract },
  plugins: {
    Analyzer,
    Clean,
    Define,
    ProgressBar,
    Minify,
    AssetsGenerator,
    HtmlGenerator,
    Chunk,
    DevTool,
    Extract,
    Md5Hash,
    ForkChecker,
  },
} = require('chocolatin');

const { PROD } = require('./metadata');

burn({
  mixins: [
    Io(
      { vendor: ['./src/vendor.ts'], app: ['./src/index.ts', './src/critical.css'] },
      { path: './dist', filename: '[name].[hash:8].js' },
      'web'
    ),
  ],
  loaders: [AssetsUrl, TypeScript, CssExtract],
  plugins: [
    Clean(['dist']),
    Define('production', PROD),
    HtmlGenerator('./src/index.html'),
    Chunk({ name: 'vendor', filename: 'vendor.[hash:8].js' }),
    DevTool(false),
    AssetsGenerator(),
    ProgressBar(),
    Minify(),
    Extract(),
    Md5Hash(),
    Analyzer(),
    Extract(),
    ForkChecker(),
  ],
});
