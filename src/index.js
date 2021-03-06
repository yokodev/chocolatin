'use strict';

const { provide, burn, watch, server } = require('./provider');
const mixins = require('./mixins');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
  provide,
  burn,
  watch,
  server,
  mixins,
  loaders,
  plugins,
};
