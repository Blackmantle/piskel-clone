import rgbToHex from '../rgbToHex';

describe('Test rgbToHex function', () => {
  test('All calls should return correct values', () => {
    expect(rgbToHex(255, 0, 0)).toBe('#ff0000');
  });
});
