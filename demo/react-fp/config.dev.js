'use strict';

const {
  server,
  mixins: { Io },
  loaders: { AssetsUrl, JsxFp, CssInline },
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
      { path: './dist', filename: '[name].js' },
      'web'
    ),
  ],
  loaders: [AssetsUrl, JsxFp, CssInline],
  plugins: [
    Define('development', DEV),
    HtmlGenerator('./src/index.html'),
    DevTool(true),
    Chunk({ name: 'vendor', filename: 'vendor.[chunkhash:8].js' }),
    Browser(),
    Hmr(),
    Dashboard(),
    NoError(),
  ],
});
