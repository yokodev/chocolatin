'use strict';

const { mergeAll } = require('ramda');
const { commitState } = require('../state');

const apply = commitState(({ configuration: { mixins } }) => ({ state: mergeAll(mixins) }));

module.exports = { apply };
