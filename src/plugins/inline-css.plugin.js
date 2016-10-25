'use strict';

const { hasLoader } = require('../helpers/help');

const wrapper = () => provider => {
  provider
    .module
    .rules
    .filter(hasLoader('css'))
    .forEach(loader => {
      loader.loaders = ['style', ...loader[loader.loaders ? 'loaders' : 'loader']];
    });

  return () => ({});
};

module.exports = wrapper;
