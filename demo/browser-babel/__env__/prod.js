'use strict';

const {
  burn,
  mixins: { Io },
  loaders: { AssetsUrl, Babel, CssExtract },
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
  },
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
  loaders: [AssetsUrl, Babel, CssExtract],
  plugins: [
    Clean(['dist']),
    Define('production', PROD),
    HtmlGenerator('./src/index.html'),
    Chunk({ name: 'vendor', filename: 'vendor.[hash:8].js' }),
    DevTool(false),
    AssetsGenerator(),
    Analyzer(),
    ProgressBar(),
    Minify(),
    Extract(),
    Md5Hash(),
  ],
});
