'use strict';

const AssetsFile = require('./assets-file.loader.js');
const AssetsUrl = require('./assets-url.loader.js');
const Babel = require('./babel.loader.js');
const Css = require('./css.loader.js');
const CssExtract = require('./css-extract.loader.js');
const CssInline = require('./css-inline.loader.js');
const Html = require('./html.loader.js');
const HtmlRaw = require('./html-raw.loader.js');
const IstanbulInstrumenter = require('./istanbul-instrumenter.loader.js');
const Js = require('./js.loader.js');
const Json = require('./json.loader.js');
const Jsx = require('./jsx.loader.js');
const JsxFp = require('./jsx-fp.loader.js');
const Pug = require('./pug.loader.js');
const Sass = require('./sass.loader.js');
const SassExtract = require('./sass-extract.loader.js');
const SassInline = require('./sass-inline.loader.js');
const Stylus = require('./stylus.loader.js');
const StylusExtract = require('./stylus-extract.loader.js');
const StylusInline = require('./stylus-inline.loader.js');
const TypeScript = require('./ts.loader.js');
const TypeScriptNg2 = require('./ts-ng2.loader.js');
const Vue = require('./vue.loader.js');

module.exports = {
  AssetsFile,
  AssetsUrl,
  Babel,
  Css,
  CssExtract,
  CssInline,
  Html,
  HtmlRaw,
  IstanbulInstrumenter,
  Js,
  Json,
  Jsx,
  JsxFp,
  Pug,
  Sass,
  SassExtract,
  SassInline,
  Stylus,
  StylusExtract,
  StylusInline,
  TypeScript,
  TypeScriptNg2,
  Vue,
};
