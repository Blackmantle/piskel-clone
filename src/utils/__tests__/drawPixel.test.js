import drawPixel from '../drawPixel';
import getPixelColor from '../getPixelColor';

const canvas = document.createElement('canvas');
canvas.width = 100;
canvas.height = 100;
const ctx = canvas.getContext('2d');

describe('Test drawPixel function', () => {
  test('All calls should return correct values', () => {
    drawPixel(5, 5, ctx, '#ff0000');
    expect(getPixelColor(5, 5, ctx)).toEqual(new Uint8ClampedArray([255, 0, 0, 255]));
  });
});
