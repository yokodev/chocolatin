'use strict';

const {
  server,
  mixins: { Io },
  loaders: { AssetsUrl, Babel, CssInline },
  plugins: { Define, NoError, Browser, DevTool, HtmlGenerator, Hmr, Dashboard, Chunk },
} = require('chocolatin');

const { DEV } = require('./metadata');

server({
  mixins: [
    Io(
      {
        vendor: ['webpack-dev-server/client?http://0.0.0.0:3000', 'webpack/hot/only-dev-server', './src/vendor.js'],
        app: ['webpack-dev-server/client?http://0.0.0.0:3000', 'webpack/hot/only-dev-server', './src/index.js', './src/critical.css'],
      },
      { path: '/', filename: '[name].[hash:8].js' },
      'web'
    ),
  ],
  loaders: [AssetsUrl, Babel, CssInline],
  plugins: [
    Define('development', DEV),
    HtmlGenerator('./src/index.html'),
    Chunk({ name: 'vendor', filename: 'vendor.[hash:8].js' }),
    DevTool(true),
    Browser(),
    Hmr(),
    Dashboard(),
    NoError(),
  ],
});
