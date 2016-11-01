import TestService from '../test.service';

describe('TestService', () => {
  describe('increment', () => {
    it('should add 1 to my number', () => {
      const fixture = new TestService();

      expect(fixture.increment(1)).toEqual(2);
    });

    it('should decrement 1 to my number', () => {
      const fixture = new TestService();

      expect(fixture.decrement(1)).toEqual(0);
    });
  });
});
