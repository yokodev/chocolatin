'use strict';

const {
  server,
  mixins: { Io },
  loaders: { AssetsUrl, TypeScriptNg2, HtmlRaw },
  plugins: { Define, NoError, Browser, DevTool, HtmlGenerator, Hmr, Dashboard, Ng2FixContext, Chunk, ForkChecker },
} = require('chocolatin');

const { DEV } = require('./metadata');

server({
  mixins: [
    Io(
      {
        vendor: ['webpack-dev-server/client?http://0.0.0.0:3000', 'webpack/hot/only-dev-server', './src/vendor.ts'],
        app: ['webpack-dev-server/client?http://0.0.0.0:3000', 'webpack/hot/only-dev-server', './src/main.browser.ts', './src/critical.scss'],
      },
      { path: '/', filename: '[name].[hash:8].js' },
      'web'
    ),
  ],
  loaders: [AssetsUrl, TypeScriptNg2, HtmlRaw],
  plugins: [
    Define('development', DEV),
    HtmlGenerator('./src/index.html'),
    DevTool(true),
    Ng2FixContext('./src'),
    Chunk({ name: 'vendor', filename: 'vendor.[hash:8].js' }),
    Browser(),
    Hmr(),
    Dashboard(),
    NoError(),
    ForkChecker(),
  ],
});
