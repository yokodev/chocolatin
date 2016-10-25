'use strict';

const ext = ['.json'];

const wrapper = {};

const pre = {};

const loader = {
  test: /\.json$/,
  loader: 'file',
};

const post = {};

module.exports = () => ({
  ext,
  wrapper,
  pre,
  loader,
  post,
});
