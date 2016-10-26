'use strict';

const webpack = require('webpack');
const path = require('path');
const {
  filter,
  isEmpty,
  complement,
  cond,
  lt,
  gt,
  T,
  always,
  flip,
  curry,
  call,
  map,
  prop,
} = require('ramda');

const notEmpty = filter(complement(isEmpty));

const flipCall = flip(curry(call));

const sort = cond([
  [lt, always(1)],
  [gt, always(-1)],
  [T, always(0)],
]);

const mapProp = x => map(prop(x));

const hasLoader = seek => loader =>
  loader.loaders ? loader.loaders.includes(seek) && !loader.loaders.includes('raw') : loader.loader === seek;

const baseProvider = () => ({
  entry: {},
  output: {},
  resolve: {
    extensions: [],
  },
  externals: [],
  module: {
    rules: [],
  },
  plugins: [],
  devServer: {},
});

const devServerProvider = (host, port) => ({
  headers: { 'Access-Control-Allow-Origin': '*' },
  historyApiFallback: true,
  compress: true,
  quiet: false,
  noInfo: false,
  stats: { colors: true },
  publicPath: `http://${host}:${port}`,
  host,
  port,
});

const watchProvider = () => ({ aggregateTimeout: 300, poll: true });

module.exports = {
  notEmpty,
  flipCall,
  sort,
  mapProp,
  hasLoader,
  baseProvider,
  devServerProvider,
  watchProvider,
};
