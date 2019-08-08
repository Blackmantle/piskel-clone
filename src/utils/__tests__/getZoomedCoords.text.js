import getZoomedCoords from '../getZoomedCoords';

describe('Test getZoomedCoords function', () => {
  test('All calls should return correct values', () => {
    expect(getZoomedCoords(10, 5, 5)).toEqual([2, 1]);
  });
});
