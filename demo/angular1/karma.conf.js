module.exports = config => {
  const webpack = require('./__env__/test.js');

  const configuration = {
    basePath: '',
    frameworks: ['jasmine'],
    exclude: [],
    files: [{ pattern: './src/**/**.spec.js', watched: false }],
    preprocessors: ['webpack', 'sourcemap'],
    webpack,
    webpackMiddleware: { stats: 'errors-only' },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    customLaunchers: {
      ChromeTravisCi: {
        base: 'Chrome',
        flags: ['--no-sandbox'],
      },
    },
    singleRun: true,
  };

  if (process.env.TRAVIS || process.env.CI) {
    configuration.browsers = ['ChromeTravisCi'];
  }

  config.set(configuration);
};
