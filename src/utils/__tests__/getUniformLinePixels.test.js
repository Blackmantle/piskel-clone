import getUniformLinePixels from '../getUniformLinePixels';

describe('Test getUniformLinePixels function', () => {
  test('All calls should return correct values', () => {
    expect(getUniformLinePixels(1, 1, 5, 5)).toEqual([
      [1, 1], [2, 2], [3, 3], [4, 4], [5, 5],
    ]);
    expect(getUniformLinePixels(0, 0, 0, 5)).toEqual([
      [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
    ]);
    expect(getUniformLinePixels(-5, 1, 5, -5)).toEqual([
      [-5, 1], [-4, 1], [-3, 0],
      [-2, 0], [-1, -1], [0, -1],
      [1, -2], [2, -2], [3, -3],
      [4, -3], [5, -4], [6, -4],
    ]);
  });
});
