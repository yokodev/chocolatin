'use strict';

const {
  burn,
  mixins: { Input, Output, Target, Watch },
  loaders: { TypeScript },
  plugins: { Define, NoError },
} = require('chocolatin');

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
  ],
  [
    Define('development'),
    NoError(),
  ]
);
