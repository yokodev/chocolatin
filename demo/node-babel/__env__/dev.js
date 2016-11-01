'use strict';

const {
  watch,
  mixins: { Io },
  loaders: { BabelStage2 },
  plugins: { Define, NoError },
} = require('chocolatin');

const { DEV } = require('./metadata');

watch({
  mixins: [
    Io({ app: ['./src/index.js'] }, { path: './dist', filename: '[name].js' }, 'node'),
  ],
  loaders: [BabelStage2],
  plugins: [
    Define('development', DEV),
    NoError(),
  ],
});
