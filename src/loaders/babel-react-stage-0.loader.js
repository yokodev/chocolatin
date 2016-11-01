'use strict';

const { XO_BABEL } = require('./static/xo');
const { BABEL_STAGE_0_REACT } = require('./static/babel');

const ext = ['.js', '.jsx'];

const wrapper = {
  xo: {
    esnext: true,
    space: true,
    envs: ['node', 'browser'],
    plugins: ['react'],
    globals: ['METADATA', 'ENV', 'NODE_ENV'],
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
  query: BABEL_STAGE_0_REACT,
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
