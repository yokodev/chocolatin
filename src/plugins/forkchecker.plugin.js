'use strict';

const { ForkCheckerPlugin } = require('awesome-typescript-loader');

const wrapper = () => provider => new ForkCheckerPlugin();

module.exports = wrapper;
