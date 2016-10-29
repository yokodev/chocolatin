'use strict';

const { optimize: { CommonsChunkPlugin } } = require('webpack');

const wrapper = chunk => provider => new CommonsChunkPlugin(chunk);

module.exports = wrapper;
