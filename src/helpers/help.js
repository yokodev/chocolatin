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
  pipe,
} = require('ramda');

const notEmpty = filter(complement(isEmpty));

const flipCall = flip(curry(call));

const sort = cond([
  [lt, always(1)],
  [gt, always(-1)],
  [T, always(0)],
]);

const mapProp = pipe(map, prop);

const hasLoader = seek => loader =>
  loader.loaders ? loader.loaders.includes(seek) : loader.loader === seek;

const baseProvider = () => ({
  entry: {},
  output: {},
  resolve: {
    extensions: [],
  },
  externals: [],
  module: {
    loaders: [],
  },
  plugins: [],
  devServer: {},
});

const devServerProvider = publicPath => ({
  headers: { 'Access-Control-Allow-Origin': '*' },
  hot: true,
  historyApiFallback: true,
  compress: true,
  quiet: true,
  noInfo: false,
  stats: { colors: true },
  publicPath,
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
