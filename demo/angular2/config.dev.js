'use strict';

const {
  burn,
  mixins: { Input, Output, Server, Target },
  loaders: { Assets, TypeScript, TsLint, Sass, Html },
  plugins: { Define, NoError, Browser, DevTool, HtmlGenerator, Hmr, Dashboard, Ng2FixContext, Chunk },
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
      vendor: ['webpack-dev-server/client?http://0.0.0.0:3003', 'webpack/hot/only-dev-server', './src/vendor.ts'],
      app: ['webpack-dev-server/client?http://0.0.0.0:3003', 'webpack/hot/only-dev-server', './src/main.browser.ts', './src/critical.scss'],
    }),
    Output('/tmp/', '[name].js', 'http://localhost:3003/'),
    Server('localhost', 3003),
    Target('web'),
  ],
  [
    Assets(),
    TypeScript(),
    TsLint(),
    Sass(postcss, /\.scss$/, ['to-string']),
    Html(),
  ],
  [
    Browser('http://localhost', 3003),
    Define('development', DEV),
    HtmlGenerator('./src/index.html'),
    DevTool(true),
    Ng2FixContext('./src'),
    Chunk({ name: ['vendor']}),
    Hmr(),
    Dashboard(),
    NoError(),
  ]
);
