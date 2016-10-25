'use strict';

const { devServerProvider } = require('../helpers/help');

const wrapper = (host, port, publicPath, devServer = devServerProvider(host, port, publicPath)) => ({ devServer });

module.exports = wrapper;
