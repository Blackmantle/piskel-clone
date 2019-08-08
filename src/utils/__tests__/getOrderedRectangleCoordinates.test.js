import getOrderedRectangleCoordinates from '../getOrderedRectangleCoordinates';

describe('Test getOrderedRectangleCoordinates function', () => {
  test('All calls should return correct values', () => {
    expect(getOrderedRectangleCoordinates(0, 0, 1, 1)).toEqual({ x0: 0, x1: 1, y0: 0, y1: 1 });
  });
});
