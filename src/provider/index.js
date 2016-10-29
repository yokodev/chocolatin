'use strict';

const { compose } = require('ramda');
const { build, watcher, serve } = require('../compiler');
const { toState, toWebPack } = require('../state');
const { mixins, loaders, plugins } = require('../apply');

const provide = compose(
  toWebPack,
  plugins,
  loaders,
  mixins,
  toState
);

const burn = compose(build, provide);

const watch = compose(watcher, provide);

const server = compose(serve, provide);

module.exports = { provide, burn, watch, server };
