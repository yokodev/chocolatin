'use strict';

const wrapper = (entry, output, target = 'web', externals = {}) => ({ entry, output, target, externals });

module.exports = wrapper;
