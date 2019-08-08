import getCirclePixels from '../getCirclePixels';

describe('Test getCirclePixels function', () => {
  test('All calls should return correct values', () => {
    expect(getCirclePixels(1, 1, 5, 5)).toEqual([
      [1, 3], [1, 3], [5, 3],
      [5, 3], [2, 5], [2, 1],
      [4, 5], [4, 1], [3, 5],
      [3, 1], [3, 5], [3, 1],
      [3, 1], [3, 1], [3, 5],
      [3, 5], [5, 2], [1, 2],
      [5, 4], [1, 4], [5, 3],
      [1, 3], [5, 3], [1, 3],
    ]);
  });
});
