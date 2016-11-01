'use strict';

const {
  watch,
  mixins: { Io },
  loaders: { TypeScript },
  plugins: { Define, NoError, ForkChecker },
} = require('chocolatin');

const { DEV } = require('./metadata');

watch({
  mixins: [
    Io({ app: ['./src/index.ts'] }, { path: './dist', filename: '[name].js', }, 'node'),
  ],
  loaders: [TypeScript],
  plugins: [
    Define('development', DEV),
    NoError(),
    ForkChecker(),
  ],
});
