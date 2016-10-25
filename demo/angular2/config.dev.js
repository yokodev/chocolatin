'use strict';

const {
  burn,
  mixins: { Input, Output, Server, Target },
  loaders: { Assets, TypeScript, Css, Sass },
  plugins: { Define, NoError, Browser, DevTool, HtmlGenerator, Hmr, Dashboard, InlineCss },
} = require('chocolatin');

const { DEV } = require('./metadata');

const postcss = [
  require('autoprefixer')({ browsers: ['last 2 versions', 'ie > 8'] }),
  require('css-mqpacker')(),
];

// Mixins, Loaders and Plugins
module.exports = burn(
  [
    Input({
      _polyfills: ['./src/polyfills.ts'],
      vendor: ['./src/vendor.ts'],
      app: ['./src/main.browser.ts', './src/critical.scss'],
    }),
    Output('/tmp/', '[name].js', 'http://localhost:3003/'),
    Server('localhost', 3003),
    Target('web'),
  ],
  [
    Assets(),
    TypeScript(),
    Css(postcss),
    Sass(postcss),
  ],
  [
    Browser('http://localhost', 3003),
    Define('development', DEV),
    HtmlGenerator('./src/index.html'),
    DevTool(true),
    Hmr(),
    Dashboard(),
    InlineCss(),
    NoError(),
  ]
);
