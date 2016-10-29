'use strict';

const mixins = require('./mixins');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
  mixins: mixins.apply,
  loaders: loaders.apply,
  plugins: plugins.apply,
};
