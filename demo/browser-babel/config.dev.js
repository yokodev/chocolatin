'use strict';

const {
  burn,
  mixins: { Input, Output, Server },
  loaders: { Assets, Babel, Css, EsLint },
  plugins: { Define, NoError, Browser, DevTool, HtmlGenerator, Hmr, Dashboard, InlineCss },
} = require('chocolatin');

const { DEV } = require('./metadata');

// Mixins, Loaders and Plugins
module.exports = burn(
  [
    Input({
      vendor: ['webpack-dev-server/client?http://0.0.0.0:3003', 'webpack/hot/only-dev-server', './src/vendor.js'],
      app: ['webpack-dev-server/client?http://0.0.0.0:3003', 'webpack/hot/only-dev-server', './src/index.js', './src/critical.css'],
    }),
    Output('/tmp/', '[name].js', 'http://localhost:3003/'),
    Server('localhost', 3003),
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