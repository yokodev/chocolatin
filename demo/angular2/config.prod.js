'use strict';

const {
  burn,
  mixins: { Input, Output, Target },
  loaders: { Assets, TypeScript, TsLint, Css, Sass, Html },
  plugins: {
    Clean,
    Define,
    ProgressBar,
    Minify,
    AssetsGenerator,
    HtmlGenerator,
    Chunk,
    DevTool,
    ExtractCss,
    Md5Hash,
    Ng2FixContext,
  },
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
      vendor: ['./src/vendor.ts'],
      app: ['./src/main.browser.ts', './src/critical.scss'],
    }),
    Output('./dist/'),
    Target('web'),
  ],
  [
    Assets(),
    TypeScript(),
    TsLint(),
    Sass(postcss, /critical\.css$/),
    Sass(postcss, /\.scss$/, ['raw']),
    Html(),
  ],
  [
    Clean(['dist']),
    Define('production', PROD),
    AssetsGenerator('./dist/'),
    HtmlGenerator('./src/index.html'),
    DevTool(false),
    Ng2FixContext('./src'),
    ProgressBar(),
    Minify(),
    Chunk(),
    ExtractCss(/critical\.css$/),
    Md5Hash(),
  ]
);
