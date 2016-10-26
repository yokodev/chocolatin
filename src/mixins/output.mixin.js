'use strict';

const wrapper = (path, filename = '[name].[chunkhash:8].js', publicPath = '/', libraryTarget = 'umd') => ({
  output: {
    path,
    filename,
    publicPath,
    libraryTarget,
  },
});

module.exports = wrapper;
