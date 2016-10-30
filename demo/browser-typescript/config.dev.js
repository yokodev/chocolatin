'use strict';

const {
  server,
  mixins: { Io },
  loaders: { AssetsUrl, TypeScript, CssInline },
  plugins: { Define, NoError, Browser, DevTool, HtmlGenerator, Hmr, Dashboard, ForkChecker, Chunk },
} = require('chocolatin');

const { DEV } = require('./metadata');

server({
  mixins: [
    Io(
      {
        vendor: ['webpack-dev-server/client?http://0.0.0.0:3000', 'webpack/hot/only-dev-server', './src/vendor.ts'],
        app: ['webpack-dev-server/client?http://0.0.0.0:3000', 'webpack/hot/only-dev-server', './src/index.ts', './src/critical.css'],
      },
      { path: '/', filename: '[name].js' },
      'web'
    ),
  ],
  loaders: [AssetsUrl, TypeScript, CssInline],
  plugins: [
    Define('development', DEV),
    HtmlGenerator('./src/index.html'),
    Chunk({ name: 'vendor', filename: 'vendor.[chunkhash:8].js' }),
    DevTool(true),
    Browser(),
    Hmr(),
    Dashboard(),
    NoError(),
    ForkChecker(),
  ],
});
