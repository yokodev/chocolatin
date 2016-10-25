'use strict';

const {
  burn,
  mixins: { Input, Output, Target },
  loaders: { EsLint },
  plugins: { Clean, Define, ProgressBar, Minify, Assets, Chunk, DevTool, ExtractCss, Html },
} = require('chocolatin');

const { PROD } = require('./metadata');

// Mixins, Loaders and Plugins
module.exports = burn(
  [
    Input({
      vendor: ['./src/vendor.js'],
      app: ['./src/index.js', './src/critical.css'],
    ),
    Output('./dist/'),
    Target('node'),
  ],
  [
    EsLint(),
  ],
  [
    Clean(['dist']),
    Define('production', PROD),
    ProgressBar(),
    Minify(),
    Assets('./dist/'),
    Chunk(),
    DevTool(false),
    ExtractCss(),
    Html(),
  ]
);
