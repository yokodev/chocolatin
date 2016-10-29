'use strict';

const {
  filter,
  isEmpty,
  complement,
  cond,
  lt,
  gt,
  T,
  always,
  flip,
  curry,
  call,
  map,
  prop,
} = require('ramda');

const notEmpty = filter(complement(isEmpty));

const flipCall = flip(curry(call));

const sort = cond([
  [lt, always(1)],
  [gt, always(-1)],
  [T, always(0)],
]);

const mapProp = x => map(prop(x));

module.exports = {
  notEmpty,
  flipCall,
  sort,
  mapProp,
};
