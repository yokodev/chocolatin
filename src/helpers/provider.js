'use strict';

const { notEmpty, mapProp, flipCall } = require('./help');
const { LoaderOptionsPlugin } = require('webpack');
const {
  pipe,
  reduce,
  flatten,
  uniq,
  mergeAll,
  map,
} = require('ramda');

const ext = pipe(
  mapProp('ext'),
  flatten,
  uniq,
  reduce(({ resolve: { extensions } }, key) =>
    ({ resolve: { extensions: [...extensions, key] } }), { resolve: { extensions: [] } }
  )
);

const wrap = pipe(
  mapProp('wrapper'),
  notEmpty,
  mergeAll
);

const pre = pipe(
  mapProp('pre'),
  notEmpty,
  reduce((loaders, obj) => [...loaders, Object.assign(obj, { enforce: 'pre' })], [])
);

const loader = pipe(
  mapProp('loader'),
  notEmpty,
  reduce((loaders, obj) => [...loaders, obj], [])
);

const post = pipe(
  mapProp('post'),
  notEmpty,
  reduce((loaders, obj) => [...loaders, Object.assign(obj, { enforce: 'post' })], [])
);

const applyLoaders = loaders => provider =>
  mergeAll([
    provider,
    ext(loaders),
    {
      module: {
        rules: [...pre(loaders), ...loader(loaders), ...post(loaders)],
      },
    },
  ]);

const applyMixins = mixins => provider => mergeAll([provider, ...mixins]);

const parsePlugins = provider => pipe(map(flipCall(provider)), flatten, notEmpty);

const applyPlugins = (options, plugins) => provider =>
  mergeAll([provider, {
    plugins: [
      ...parsePlugins(provider)(plugins),
      new LoaderOptionsPlugin({
        minimize: true,
        options: Object.assign({ context: process.cwd() }, options),
      }),
    ],
  }]);

const provide = provider => mixins => loaders => plugins =>
  applyPlugins(wrap(loaders), plugins)(applyLoaders(loaders)(applyMixins(mixins)(provider)));

module.exports = provide;
