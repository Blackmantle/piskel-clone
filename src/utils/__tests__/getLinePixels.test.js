import getLinePixels from '../getLinePixels';

describe('Test getLinePixels function', () => {
  test('All calls should return correct values', () => {
    expect(getLinePixels(0, 0, 5, 5)).toEqual([
      [0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5],
    ]);
    expect(getLinePixels(3, 0, 5, 3)).toEqual([
      [3, 0], [4, 1], [4, 2], [5, 3],
    ]);
    expect(getLinePixels(0, 0, 0, 0)).toEqual([
      [0, 0],
    ]);
    expect(getLinePixels(-5, 1, 5, -5)).toEqual([
      [-5, 1], [-4, 0], [-3, 0],
      [-2, -1], [-1, -1], [0, -2],
      [1, -3], [2, -3], [3, -4],
      [4, -4], [5, -5],
    ]);
  });
});
