'use strict';

const { notEmpty, flipCall, sort, mapProp } = require('../');

describe('#notEmpty', () => {
  it('should filter list without empty item', () => {
    expect(notEmpty([1, 2, '', {}]).length).toBe(2)
  });
});

describe('#flipCall', () => {
  it('should take data and return a function to be applied', () => {
    const fixture = n => {
      n.a = 'test';

      return n;
    };

    const flipCallFixture = flipCall({ b: 'test' });

    expect(flipCallFixture(fixture)).toEqual({ a: 'test', b: 'test' });
  });
});

describe('#sort', () => {
  it('should return 1 if left is greater than right', () => {
    expect(sort('a', 'b')).toBe(1);
    expect(sort(1, 2)).toBe(1);
  });

  it('should return -1 if left is less than right', () => {
    expect(sort('b', 'a')).toBe(-1);
    expect(sort(2, 1)).toBe(-1);
  });

  it('should return 0 if right and left is equal', () => {
    expect(sort('b', 'b')).toBe(0);
    expect(sort(0, 0)).toBe(0);
  });
});

describe('#mapProp', () => {
  it('should map prop value on new list when array of object supplied', () => {
    expect(mapProp('abc')([{ abc: 1 }, { abc: 2 }]).length).toBe(2);
    expect(mapProp('abc')([{ abc: 1 }, { abc: 2 }])[0]).toBe(1);
    expect(mapProp('abc')([{ abc: 1 }, { abc: 2 }])[1]).toBe(2);
  });
});
