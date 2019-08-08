import componentToHex from '../componentToHex';

describe('Test componentToHex function', () => {
  test('All calls should return correct values', () => {
    expect(componentToHex(0)).toBe('00');
    expect(componentToHex(255)).toBe('ff');
  });
});
