'use strict';

const { reduce, flatten, uniq, merge, compose } = require('ramda');
const { mapProp, notEmpty } = require('../helpers');
const { commitState } = require('../state');

const ext = compose(uniq, flatten, mapProp('ext'));

const pre = compose(
  reduce((loaders, n) => [...loaders, merge(n, { enforce: 'pre' })], []),
  notEmpty,
  mapProp('pre')
);

const loader = compose(
  reduce((loaders, n) => [...loaders, n], []),
  notEmpty,
  mapProp('loader')
);

const post = compose(
  reduce((loaders, n) => [...loaders, merge(n, { enforce: 'post' })], []),
  notEmpty,
  mapProp('post')
);

const apply = commitState(({ configuration: { loaders } }) =>
  ({
    state: {
      resolve: {
        extensions: ext(loaders),
      },
      module: {
        rules: [
          ...pre(loaders),
          ...loader(loaders),
          ...post(loaders),
        ],
      },
    },
  })
);

module.exports = { ext, pre, loader, post, apply };
