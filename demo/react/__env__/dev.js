'use strict';

const {
  server,
  mixins: { Io },
  loaders: { AssetsUrl, BabelReactStage2, CssInline },
  plugins: { Define, NoError, Browser, DevTool, HtmlGenerator, Hmr, Dashboard, Chunk },
} = require('chocolatin');

const { DEV } = require('./metadata');

server({
  mixins: [
    Io(
      {
        vendor: ['webpack-dev-server/client?http://0.0.0.0:3000', 'webpack/hot/only-dev-server', './src/vendor.js'],
        app: ['webpack-dev-server/client?http://0.0.0.0:3000', 'webpack/hot/only-dev-server', './src/index.jsx', './src/critical.css'],
      },
      { path: '/', filename: '[name].[hash:8].js' },
      'web'
    ),
  ],
  loaders: [AssetsUrl, BabelReactStage2, CssInline],
  plugins: [
    Define('development', DEV),
    HtmlGenerator('./src/index.html'),
    DevTool(true),
    Chunk({ name: 'vendor', filename: 'vendor.[hash:8].js' }),
    Browser(),
    Hmr(),
    Dashboard(),
    NoError(),
  ],
});
