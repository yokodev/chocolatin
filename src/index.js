const { uncurryN } = require('ramda');
const { baseProvider, run, listen, watch } = require('./helpers/help');
const provide = require('./helpers/provider');
const mixins = require('./mixins');
const loaders = require('./loaders');
const plugins = require('./plugins');

/**
 * Public API - WebPack configuration builder
 * Use it in your environment
 * @param {Array<Object>}   mixins
 * @param {Array<Object>}   loaders
 * @param {Array<Function>} plugins
 */
const burn = uncurryN(3, provide(baseProvider));

module.exports = {
  burn,
  listen,
  run,
  watch,
  mixins,
  loaders,
  plugins,
};
