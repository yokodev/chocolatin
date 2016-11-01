'use strict';

const { generator } = require('../babel');

describe('#generator', () => {
  it('should return an initial babel configuration if nullary', () => {
    expect(generator()).toEqual(
      {
        presets: [
          ['es2015', { 'modules': false }],
        ],
        plugins: ['transform-runtime'],
      }
    );
  });

  it('should return a babel configuration with presets if unary', () => {
    expect(generator(['stage-2'])).toEqual(
      {
        presets: [
          ['es2015', { 'modules': false }],
          'stage-2',
        ],
        plugins: ['transform-runtime'],
      }
    );
  });

  it('should return a babel configuration with presets & plugins if binary', () => {
    expect(generator(['stage-2'], ['transform-decorators-legacy'])).toEqual(
      {
        presets: [
          ['es2015', { 'modules': false }],
          'stage-2',
        ],
        plugins: ['transform-runtime', 'transform-decorators-legacy'],
      }
    );
  });
});
