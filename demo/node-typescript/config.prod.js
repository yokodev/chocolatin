'use strict';

const {
  burn,
  mixins: { Input, Output, Target },
  loaders: { TypeScript, TsLint },
  plugins: { Clean, Define, ProgressBar, Minify, ForkChecker },
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
    TsLint(),
  ],
  [
    Clean(['dist']),
    Define('production', PROD),
    ProgressBar(),
    Minify(),
    ForkChecker(),
  ]
);
