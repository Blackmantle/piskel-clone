import penActions from '../penActions';
import { getPixelColor, getLinePixels, rgbToHex } from '../../utils';

const canvas = document.createElement('canvas');
canvas.width = 100;
canvas.height = 100;
const ctx = canvas.getContext('2d');

beforeEach(() => ctx.clearRect(0, 0, 100, 100));

describe('Test penActions function', () => {
  test('Draw 1 pixel if event is mousedown', () => {
    penActions('mousedown', 1, 1, ctx, '#ff0000');
    const pixelColor = rgbToHex(...getPixelColor(1, 1, ctx));

    expect(pixelColor).toBe('#ff0000');
  });

  test('Draw line if event is mousemove', () => {
    penActions('mousemove', 1, 1, 5, 5, ctx, '#ff0000');

    let count = 0;
    const pixels = getLinePixels(1, 1, 5, 5);
    pixels.forEach(([x, y]) => {
      const pixelColor = rgbToHex(...getPixelColor(x, y, ctx));
      if (pixelColor === '#ff0000') {
        count++;
      }
    });

    expect(count).toBe(pixels.length);
  });
});
