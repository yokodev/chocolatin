'use strict';

const wrapper = (path, filename = '[name].[chunkhash:8].js', publicPath = '/') => ({
  output: {
    path,
    filename,
    publicPath,
  },
});

module.exports = wrapper;
