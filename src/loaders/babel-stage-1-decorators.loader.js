'use strict';

const { XO_BABEL } = require('./static/xo');
const { BABEL_STAGE_1_DECORATORS } = require('./static/babel');

const ext = ['.js'];

const wrapper = {
  xo: {
    esnext: true,
    space: true,
    envs: ['node', 'browser'],
    globals: ['METADATA', 'ENV', 'NODE_ENV'],
    parser: 'babel-eslint',
    rules: XO_BABEL,
  },
};

const pre = {
  test: /\.js$/,
  loader: 'xo',
  exclude: /node_modules/,
};

const loader = {
  test: /\.js$/,
  loader: 'babel',
  exclude: /node_modules/,
  query: BABEL_STAGE_1_DECORATORS,
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
