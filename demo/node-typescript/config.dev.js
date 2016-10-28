'use strict';

const {
  burn,
  mixins: { Input, Output, Target, Watch },
  loaders: { TypeScript, TsLint },
  plugins: { Define, NoError, ForkChecker },
} = require('chocolatin');

const { DEV } = require('./metadata');

// Mixins, Loaders and Plugins
module.exports = burn(
  [
    Input({ index: ['./src/index.ts'] }),
    Output('./dist/'),
    Target('node'),
    Watch(),
  ],
  [
    TypeScript(),
    TsLint(),
  ],
  [
    Define('development', DEV),
    NoError(),
    ForkChecker(),
  ]
);
