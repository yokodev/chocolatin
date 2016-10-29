'use strict';

const {
  burn,
  mixins: { Io },
  loaders: { TypeScript },
  plugins: { Clean, Define, ProgressBar, Minify, ForkChecker },
} = require('chocolatin');

const { PROD } = require('./metadata');

burn({
  mixins: [
    Io({ app: ['./src/index.ts'] }, { path: './dist', filename: '[name].js', }, 'node'),
  ],
  loaders: [TypeScript],
  plugins: [
    Clean(['dist']),
    Define('production', PROD),
    ProgressBar(),
    Minify(),
    ForkChecker(),
  ]
});
