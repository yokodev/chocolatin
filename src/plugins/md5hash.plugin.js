'use strict';

const WebpackMd5Hash = require('webpack-md5-hash');

const wrapper = () => provider => new WebpackMd5Hash();

module.exports = wrapper;
