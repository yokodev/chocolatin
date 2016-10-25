'use strict';

const {
  burn,
  mixins: { Input, Output },
  loaders: { EsLint },
  plugins: { Clean, Define, ProgressBar, Minify, Assets, Chunk, DevTool, ExtractCss, HtmlGenerator },
} = require('chocolatin');

const { PROD } = require('./metadata');

// Mixins, Loaders and Plugins
module.exports = burn(
  [
    Input({
      vendor: ['./src/vendor.js'],
      app: ['./src/index.js', './src/critical.css'],
    }),
    Output('./dist/'),
  ],
  [
    EsLint(),
  ],
  [
    Clean(['dist']),
    Define('production', PROD),
    Assets('./dist/'),
    DevTool(false),
    ProgressBar(),
    Minify(),
    Chunk(),
    ExtractCss(),
    HtmlGenerator(),
  ]
);
