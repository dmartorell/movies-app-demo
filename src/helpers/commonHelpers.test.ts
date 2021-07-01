import { getYearFromDate, getAverageRunTime } from './commonHelpers';

describe('Given a getYearFromDate function', () => {
  describe('When is invoked', () => {
    test('It should return the year', () => {
      const result = getYearFromDate('2020-03-10');
      expect(result).toBe('2020');
    });
  });
});

describe('Given a getAverageRunTime function', () => {
  describe('When is invoked', () => {
    test('It should return the average number of the input', () => {
      const result = getAverageRunTime([36, 30, 51]);
      expect(result).toBe(83);
    });
  });
});
