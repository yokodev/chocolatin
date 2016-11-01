'use strict';

const {
  burn,
  mixins: { Io },
  loaders: { AssetsUrl, CssExtract, Js },
  plugins: { Analyzer, Clean, Define, ProgressBar, Minify, AssetsGenerator, HtmlGenerator, Chunk, DevTool, Md5Hash, Extract },
} = require('chocolatin');

const { PROD } = require('./metadata');

burn({
  mixins: [
    Io(
      { vendor: ['./src/vendor.js'], app: ['./src/index.js', './src/critical.css'] },
      { path: './dist', filename: '[name].[hash:8].js' },
      'web'
    ),
  ],
  loaders: [AssetsUrl, CssExtract, Js],
  plugins: [
    Clean(['dist']),
    Define('production', PROD),
    HtmlGenerator('./src/index.html'),
    DevTool(false),
    Chunk({ name: 'vendor', filename: 'vendor.[hash:8].js' }),
    AssetsGenerator(),
    ProgressBar(),
    Analyzer(),
    Minify(),
    Md5Hash(),
    Extract(),
  ],
});
