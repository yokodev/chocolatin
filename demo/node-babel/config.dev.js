'use strict';

const {
  burn,
  mixins: { Input, Output, Target, Watch },
  loaders: { Babel, EsLint },
  plugins: { Define, NoError },
} = require('chocolatin');

const { DEV } = require('./metadata');

// Mixins, Loaders and Plugins
module.exports = burn(
  [
    Input({ index: ['./src/index.js'] }),
    Output('./dist/'),
    Target('node'),
    Watch(),
  ],
  [
    Babel(),
    EsLint(),
  ],
  [
    Define('development', DEV),
    NoError(),
  ]
);
