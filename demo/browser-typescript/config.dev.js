'use strict';

const {
  burn,
  mixins: { Input, Output, Server, Target },
  loaders: { Assets, TypeScript, TsLint, Css },
  plugins: { Define, NoError, Browser, DevTool, HtmlGenerator, Hmr, Dashboard, ForkChecker },
} = require('chocolatin');

const { DEV } = require('./metadata');

// Mixins, Loaders and Plugins
module.exports = burn(
  [
    Input({
      vendor: ['webpack-dev-server/client?http://0.0.0.0:3003', 'webpack/hot/only-dev-server', './src/vendor.ts'],
      app: ['webpack-dev-server/client?http://0.0.0.0:3003', 'webpack/hot/only-dev-server', './src/index.ts', './src/critical.css'],
    }),
    Output('/tmp/', '[name].js', 'http://localhost:3003/'),
    Server('localhost', 3003),
    Target('web'),
  ],
  [
    Assets(),
    TypeScript(),
    TsLint(),
    Css([
      require('autoprefixer')({ browsers: ['last 2 versions', 'ie > 8'] }),
      require('css-mqpacker')(),
    ], /\.css$/, ['style']),
  ],
  [
    Browser('http://localhost', 3003),
    Define('development', DEV),
    HtmlGenerator('./src/index.html'),
    DevTool(true),
    Hmr(),
    Dashboard(),
    NoError(),
    ForkChecker(),
  ]
);
