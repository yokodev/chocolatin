'use strict';

const {
  burn,
  mixins: { Io },
  loaders: { Babel },
  plugins: { Clean, Define, ProgressBar, Minify },
} = require('chocolatin');

const { PROD } = require('./metadata');

burn({
  mixins: [
    Io({ app: ['./src/index.js'] }, { path: './dist', filename: '[name].js' }, 'node'),
  ],
  loaders: [Babel],
  plugins: [
    Clean(['dist']),
    Define('production', PROD),
    ProgressBar(),
    Minify(),
  ],
});
