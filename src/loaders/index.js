'use strict';

const AssetsFile = require('./assets-file.loader.js');
const AssetsUrl = require('./assets-url.loader.js');
const Babel = require('./babel.loader.js');
const Css = require('./css.loader.js');
const CssInline = require('./css-inline.loader.js');
const Html = require('./html.loader.js');
const HtmlRaw = require('./html-raw.loader.js');
const Js = require('./js.loader.js');
const Json = require('./json.loader.js');
const Jsx = require('./jsx.loader.js');
const Pug = require('./pug.loader.js');
const Sass = require('./sass.loader.js');
const SassInline = require('./sass-inline.loader.js');
const Stylus = require('./stylus.loader.js');
const StylusInline = require('./stylus-inline.loader.js');
const TypeScript = require('./ts.loader.js');
const TypeScriptNg2 = require('./ts-ng2.loader.js');

module.exports = {
  AssetsFile,
  AssetsUrl,
  Babel,
  Css,
  CssInline,
  Html,
  HtmlRaw,
  Js,
  Json,
  Jsx,
  Pug,
  Sass,
  SassInline,
  Stylus,
  StylusInline,
  TypeScript,
  TypeScriptNg2,
};
