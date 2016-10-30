'use strict';

const {
  burn,
  mixins: { Io },
  loaders: { AssetsUrl, JsxFp, CssExtract },
  plugins: { Clean, Define, ProgressBar, Minify, AssetsGenerator, HtmlGenerator, Chunk, DevTool, Extract, Md5Hash },
} = require('chocolatin');

const { PROD } = require('./metadata');

burn({
  mixins: [
    Io(
      { vendor: ['./src/vendor.js'], app: ['./src/index.jsx', './src/critical.css'] },
      { path: './dist', filename: '[name].js' },
      'web'
    ),
  ],
  loaders: [AssetsUrl, JsxFp, CssExtract],
  plugins: [
    Clean(['dist']),
    Define('production', PROD),
    HtmlGenerator('./src/index.html'),
    DevTool(false),
    Chunk({ name: 'vendor', filename: 'vendor.[chunkhash:8].js' }),
    AssetsGenerator(),
    ProgressBar(),
    Minify(),
    Extract(),
    Md5Hash(),
  ],
});
