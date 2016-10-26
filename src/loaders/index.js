'use strict';

const TypeScript = require('./ts.loader.js');
const TsLint = require('./tslint.loader.js');
const Assets = require('./assets.loader.js');
const Babel = require('./babel.loader.js');
const Css = require('./css.loader.js');
const EsLint = require('./eslint.loader.js');
const Json = require('./json.loader.js');
const Sass = require('./sass.loader.js');
const Stylus = require('./stylus.loader.js');
const Html = require('./html.loader.js');
const StringCss = require('./stringcss.loader.js');
const StringSass = require('./stringsass.loader.js');

module.exports = {
  TypeScript,
  TsLint,
  Assets,
  Babel,
  Css,
  EsLint,
  Json,
  Sass,
  Stylus,
  Html,
  StringCss,
  StringSass,
};
