'use strict';

const {
  burn,
  mixins: { Input, Output, Target },
  loaders: { Babel, EsLint },
  plugins: { Clean, Define, ProgressBar, Minify },
} = require('chocolatin');

const { PROD } = require('./metadata');

// Mixins, Loaders and Plugins
module.exports = burn(
  [
    Input({ index: ['./src/index.js'] }),
    Output('./dist/'),
    Target('node'),
  ],
  [
    Babel(),
    EsLint(),
  ],
  [
    Clean(['dist']),
    Define('production', PROD),
    ProgressBar(),
    Minify(),
  ]
);
