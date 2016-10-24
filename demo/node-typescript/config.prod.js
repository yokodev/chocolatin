'use strict';

const {
  burn,
  mixins: { Input, Output, Target },
  loaders: { TypeScript },
  plugins: { Clean, Define, ProgressBar, Minify },
} = require('chocolatin');

const { PROD } = require('./metadata');

// Mixins, Loaders and Plugins
module.exports = burn(
  [
    Input({ index: ['./src/index.ts'] }),
    Output('./dist/'),
    Target('node'),
  ],
  [
    TypeScript(),
  ],
  [
    Clean(['dist']),
    Define('production', PROD),
    ProgressBar(),
    Minify(),
  ]
);