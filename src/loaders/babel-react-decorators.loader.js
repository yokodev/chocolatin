'use strict';

const { XO_BABEL } = require('./static/xo');
const { BABEL_REACT_DECORATORS } = require('./static/babel');

const ext = ['.js', '.jsx'];

const wrapper = {
  xo: {
    esnext: true,
    space: true,
    envs: ['node', 'browser'],
    plugins: ['react'],
    globals: ['METADATA', 'ENV', 'NODE_ENV'],
    parser: 'babel-eslint',
    rules: XO_BABEL,
  },
};

const pre = {
  test: /\.(js|jsx)$/,
  loader: 'xo',
  exclude: /node_modules/,
};

const loader = {
  test: /\.(js|jsx)$/,
  loader: 'babel',
  exclude: /node_modules/,
  query: BABEL_REACT_DECORATORS,
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
