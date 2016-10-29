'use strict';

const WebpackBrowserPlugin = require('webpack-browser-plugin');

const wrapper = (url = 'localhost', port = 3000) => provider => new WebpackBrowserPlugin({ url, port });

module.exports = wrapper;
