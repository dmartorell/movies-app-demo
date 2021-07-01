import getYearFromDate from './getYearFromDate';

describe('Given a getYearFromDate function', () => {
  describe('When is invoked', () => {
    test('It should return the year', () => {
      const result = getYearFromDate('2020-03-10');
      expect(result).toBe('2020');
    });
  });
});
