'use strict';

const {
  burn,
  mixins: { Input, Output },
  loaders: { Assets, Babel, Css, EsLint },
  plugins: { Clean, Define, ProgressBar, Minify, AssetsGenerator, HtmlGenerator, Chunk, DevTool, ExtractCss },
} = require('chocolatin');

const { PROD } = require('./metadata');

// Mixins, Loaders and Plugins
module.exports = burn(
  [
    Input({
      vendor: ['./src/vendor.js'],
      app: ['./src/index.js', './src/critical.css'],
    }),
    Output('./dist/'),
  ],
  [
    Assets(),
    Babel(),
    Css([
      require('autoprefixer')({ browsers: ['last 2 versions', 'ie > 8'] }),
      require('css-mqpacker')(),
    ]),
    EsLint(),
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