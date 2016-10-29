'use strict';

const {
  burn,
  mixins: { Io },
  loaders: { AssetsUrl, CssExtract, Js },
  plugins: { Clean, Define, ProgressBar, Minify, AssetsGenerator, HtmlGenerator, Chunk, DevTool, Md5Hash, Extract },
} = require('chocolatin');

const { PROD } = require('./metadata');

burn({
  mixins: [
    Io(
      { vendor: ['./src/vendor.js'], app: ['./src/index.js', './src/critical.css'] },
      { path: './dist', filename: '[name].js' },
      'web'
    ),
  ],
  loaders: [AssetsUrl, CssExtract, Js],
  plugins: [
    Clean(['dist']),
    Define('production', PROD),
    HtmlGenerator('./src/index.html'),
    DevTool(false),
    Chunk({ name: 'vendor.[chunkhash:8].js' }),
    AssetsGenerator(),
    ProgressBar(),
    Minify(),
    Md5Hash(),
    Extract(),
  ],
});
