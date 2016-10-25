'use strict';

const {
  burn,
  mixins: { Input, Output, Target },
  loaders: { Assets, TypeScript, Css, Sass },
  plugins: { Clean, Define, ProgressBar, Minify, AssetsGenerator, HtmlGenerator, Chunk, DevTool, ExtractCss },
} = require('chocolatin');

const { PROD } = require('./metadata');

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
    Output('./dist/'),
    Target('web'),
  ],
  [
    Assets(),
    TypeScript(),
    Css(postcss),
    Sass(postcss),
  ],
  [
    Clean(['dist']),
    Define('production', PROD),
    AssetsGenerator('./dist/'),
    HtmlGenerator('./src/index.html'),
    DevTool(false),
    ProgressBar(),
    Minify(),
    Chunk(),
    ExtractCss(),
  ]
);
