'use strict';

const {
  burn,
  mixins: { Io },
  loaders: { BabelStage2 },
  plugins: { Analyzer, Clean, Define, ProgressBar, Minify },
} = require('chocolatin');

const { PROD } = require('./metadata');

burn({
  mixins: [
    Io({ app: ['./src/index.js'] }, { path: './dist', filename: '[name].js' }, 'node'),
  ],
  loaders: [BabelStage2],
  plugins: [
    Clean(['dist']),
    Define('production', PROD),
    Analyzer(),
    ProgressBar(),
    Minify(),
  ],
});
