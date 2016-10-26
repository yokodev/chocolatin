'use strict';

const ext = ['.js', '.ts', '.tsx'];

const wrapper = {
  tslint: {
    emitErrors: true,
    failOnHint: true,
    ressourcePath: './src',
  },
};

const pre = {
  test: /\.(ts|tsx)$/,
  loader: 'tslint',
  exclude: /node_modules/,
};

const loader = {};

const post = {};

module.exports = () => ({
  ext,
  wrapper,
  pre,
  loader,
  post,
});
