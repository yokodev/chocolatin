'use strict';

const {
  burn,
  mixins: { Input, Output, Target },
  loaders: { Assets, Ng2TypeScript, TsLint, Sass, Html },
  plugins: {
    Clean,
    Define,
    ProgressBar,
    Minify,
    AssetsGenerator,
    HtmlGenerator,
    Chunk,
    DevTool,
    Md5Hash,
    Ng2FixContext,
    ForkChecker,
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
    Ng2TypeScript(),
    TsLint(),
    Sass(postcss, /\.scss$/, ['to-string']),
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
    Chunk({ name: ['vendor']}),
    Md5Hash(),
    ForkChecker(),
  ]
);
