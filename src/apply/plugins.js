'use strict';

const { LoaderOptionsPlugin } = require('webpack');
const { compose, map, merge, mergeAll, flatten } = require('ramda');
const { flipCall, notEmpty, mapProp } = require('../helpers');
const { commitState } = require('../state');

const chain = state => compose(notEmpty, flatten, map(flipCall(state)));

const wrap = compose(mergeAll, notEmpty, mapProp('wrapper'));

const apply = commitState(({ state, configuration: { plugins, loaders } }) =>
  ({
    state: {
      plugins: [
        ...chain(state)(plugins),
        new LoaderOptionsPlugin({
          minimize: true,
          options: merge({ context: process.cwd() }, wrap(loaders)),
        }),
      ],
    },
  })
);

module.exports = { chain, wrap, apply };
