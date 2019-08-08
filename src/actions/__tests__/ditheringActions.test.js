import ditheringActions from '../ditheringActions';
import { getPixelColor, getLinePixels, rgbToHex } from '../../utils';

const canvas = document.createElement('canvas');
canvas.width = 100;
canvas.height = 100;
const ctx = canvas.getContext('2d');

const colors = {
  primary: '#ff0000',
  secondary: '#ffffff',
};

beforeEach(() => ctx.clearRect(0, 0, 100, 100));

describe('Test ditheringActions function', () => {
  test('Draw 1 pixel in primary color if event is mousedown and position is odd', () => {
    ditheringActions('mousedown', 1, 2, ctx, colors);
    const pixelColor = rgbToHex(...getPixelColor(1, 2, ctx));

    expect(pixelColor).toBe('#ff0000');
  });

  test('Draw 1 pixel in secondary color if event is mousedown and position is even', () => {
    ditheringActions('mousedown', 1, 1, ctx, colors);
    const pixelColor = rgbToHex(...getPixelColor(1, 1, ctx));

    expect(pixelColor).toBe('#ffffff');
  });

  test('Draw line in primary and secondary colors if event is mousemove', () => {
    ditheringActions('mousemove', 1, 1, 4, 4, ctx, colors);

    let count = 0;
    const pixels = getLinePixels(1, 1, 4, 4);
    pixels.forEach(([x, y]) => {
      const usePrimaryColor = (x + y) % 2;
      const pixelColor = rgbToHex(...getPixelColor(x, y, ctx));
      if (usePrimaryColor) {
        if (pixelColor === '#ff0000') {
          count++;
        }
      } else if (pixelColor === '#ffffff') {
        count++;
      }
    });

    expect(count).toBe(pixels.length);
  });
});
