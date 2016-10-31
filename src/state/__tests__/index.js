'use strict';

const { initialState, toState, toWebPack, reduceState, commitState } = require('../');
const { mergeWithKey, merge } = require('ramda');

const configuration = { mixins: [], loaders: [], plugins: [] };

describe('#initialState', () => {
  it('should return an initial state object', () => {
    expect(initialState()).toBeInstanceOf(Object);
  });
});

describe('#toState', () => {
  it('should take configuration and return an object with configuration and initial state', () => {
    expect(toState(configuration)).toEqual({
      configuration,
      state: initialState(),
    });
  });
});

describe('#toWebPack', () => {
  it('should transform state to WebPack configuration', () => {
    const state = toState(configuration);

    expect(toWebPack(state)).toEqual(initialState());
  });
});

describe('#reduceState', () => {
  it('should transform previous state with new state without mutation', () => {
    const prev = toState({ mixins: [], loaders: [], plugins: [] });

    expect(mergeWithKey(reduceState, prev, { state: { a: 123 } }))
      .toEqual({
        configuration,
        state: merge({ a: 123 }, initialState()),
      });
  });
});

describe('#commitState', () => {
  it('should commit action to transform state', () => {
    const action = commitState(() => ({ state: { a: 123 } }));

    expect(action(toState(configuration)))
      .toEqual({
        configuration,
        state: merge({ a: 123 }, initialState()),
      });
  });
});
