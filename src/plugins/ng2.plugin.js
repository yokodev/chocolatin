'use strict';

const { ContextReplacementPlugin } = require('webpack');

const wrapper = path => provider =>
  new ContextReplacementPlugin(
    /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
    path
  );

module.exports = wrapper;
