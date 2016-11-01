'use strict';

const {
  burn,
  mixins: { Io },
  loaders: { AssetsUrl, BabelReactStage2, CssExtract },
  plugins: { Clean, Define, ProgressBar, Minify, AssetsGenerator, HtmlGenerator, Chunk, DevTool, Extract, Md5Hash },
} = require('chocolatin');

const { PROD } = require('./metadata');

burn({
  mixins: [
    Io(
      { vendor: ['./src/vendor.js'], app: ['./src/index.jsx', './src/critical.css'] },
      { path: './dist', filename: '[name].[hash:8].js' },
      'web'
    ),
  ],
  loaders: [AssetsUrl, BabelReactStage2, CssExtract],
  plugins: [
    Analyzer(),
    Clean(['dist']),
    Define('production', PROD),
    HtmlGenerator('./src/index.html'),
    DevTool(false),
    Chunk({ name: 'vendor', filename: 'vendor.[hash:8].js' }),
    AssetsGenerator(),
    ProgressBar(),
    Minify(),
    Extract(),
    Md5Hash(),
  ],
});
