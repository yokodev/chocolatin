'use strict';

const {
  burn,
  mixins: { Input, Output, Target },
  loaders: { Assets, TypeScript, TsLint, Css },
  plugins: { Clean, Define, ProgressBar, Minify, AssetsGenerator, HtmlGenerator, Chunk, DevTool, ExtractCss, Md5Hash },
} = require('chocolatin');

const { PROD } = require('./metadata');

// Mixins, Loaders and Plugins
module.exports = burn(
  [
    Input({
      vendor: ['./src/vendor.ts'],
      app: ['./src/index.ts', './src/critical.css'],
    }),
    Output('./dist/'),
    Target('web'),
  ],
  [
    Assets(),
    TypeScript(),
    TsLint(),
    Css([
      require('autoprefixer')({ browsers: ['last 2 versions', 'ie > 8'] }),
      require('css-mqpacker')(),
    ]),
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
    ExtractCss(/\.css$/),
    Md5Hash(),
  ]
);
