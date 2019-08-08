import getRectanglePixels from '../getRectanglePixels';

describe('Test getRectanglePixels function', () => {
  test('All calls should return correct values', () => {
    expect(getRectanglePixels(1, 1, 5, 5)).toEqual([
      [1, 1], [1, 2], [1, 3],
      [1, 4], [1, 5], [2, 1],
      [2, 5], [3, 1], [3, 5],
      [4, 1], [4, 5], [5, 1],
      [5, 2], [5, 3], [5, 4],
      [5, 5],
    ]);
  });
});
