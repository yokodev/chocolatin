'use strict';

const {
  burn,
  mixins: { Io },
  loaders: { Js },
  plugins: { Analyzer, Clean, Define, ProgressBar, Minify },
} = require('chocolatin');

const { PROD } = require('./metadata');

burn({
  mixins: [
    Io({ app: ['./src/index.js'] }, { path: './dist', filename: '[name].js' }, 'node'),
  ],
  loaders: [Js],
  plugins: [
    Clean(['dist']),
    Define('production', PROD),
    ProgressBar(),
    Analyzer(),
    Minify(),
  ],
});
