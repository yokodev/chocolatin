'use strict';

const {
  server,
  mixins: { Io },
  loaders: { AssetsUrl, BabelStage2Decorators, StylusInline, CssInline, HtmlRaw },
  plugins: {
    Define,
    NoError,
    Browser,
    DevTool,
    HtmlGenerator,
    Hmr,
    Dashboard,
    Chunk,
  },
} = require('chocolatin');

const { DEV } = require('./metadata');

server({
  mixins: [
    Io(
      {
        vendor: ['webpack-dev-server/client?http://0.0.0.0:3000', 'webpack/hot/only-dev-server', './src/vendor.js'],
        app: ['webpack-dev-server/client?http://0.0.0.0:3000', 'webpack/hot/only-dev-server', './src/main.browser.js', './src/critical.css'],
      },
      { path: '/', filename: '[name].[hash:8].js' },
      'web'
    ),
  ],
  loaders: [AssetsUrl, BabelStage2Decorators, StylusInline, CssInline, HtmlRaw],
  plugins: [
    Define('development', DEV),
    HtmlGenerator('./src/index.html'),
    DevTool(true),
    Chunk({ name: 'vendor', filename: '[name].[hash:8].js' }),
    Browser(),
    Hmr(),
    Dashboard(),
    NoError(),
  ],
});
