'use strict';

const TypeScript = require('./ts.loader.js');
const Assets = require('./assets.loader.js');
const Babel = require('./babel.loader.js');
const Css = require('./css.loader.js');
const EsLint = require('./eslint.loader.js');
const Json = require('./json.loader.js');

module.exports = {
  TypeScript,
  Assets,
  Babel,
  Css,
  EsLint,
  Json,
};
