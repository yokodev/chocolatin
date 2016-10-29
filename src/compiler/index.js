'use strict';

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const { forEach } = require('ramda');

const eachLog = forEach(console.log);

const eachWarn = forEach(console.warn);

const onError = (err, stats) => {
  if (err) {
    console.error(err.stack || err);

    if (err.details) {
      console.error(err.details);
    }

    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    eachLog(info.errors);
  }

  if (stats.hasWarnings()) {
    eachWarn(warnings);
  }

  console.log('[CHOCOLATIN] Build completed');
};

const build = provider => webpack(provider).run(onError);

const watcher = provider => webpack(provider).watch({ poll: true }, onError);

const serve = provider => new WebpackDevServer(webpack(provider), {}).listen(3000);

module.exports = { eachLog, eachWarn, onError, build, watcher, serve };
