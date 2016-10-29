const { mergeWithKey, prop, merge } = require('ramda');

const initialState = () => ({
  context: process.cwd(),
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

const toState = configuration => ({
  configuration,
  state: initialState(),
});

const toWebPack = prop('state');

const reduceState = (k, l, r) => k === 'state' || k === 'configuration' ? merge(l, r) : l;

const commitState = next => prev => mergeWithKey(reduceState, prev, next(prev));

module.exports = { initialState, toState, toWebPack, reduceState, commitState };
