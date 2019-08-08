import strokeActions from '../strokeActions';
import { getPixelColor, getLinePixels, getUniformLinePixels, rgbToHex } from '../../utils';

const canvas = document.createElement('canvas');
canvas.width = 100;
canvas.height = 100;
const ctx = canvas.getContext('2d');
const prevImage = ctx.getImageData(0, 0, 100, 100);

beforeEach(() => ctx.clearRect(0, 0, 100, 100));

describe('Test strokeActions function', () => {
  test('Draw 1 pixel if event is mousedown', () => {
    strokeActions('mousedown', 1, 1, ctx, '#ff0000');
    const pixelColor = rgbToHex(...getPixelColor(1, 1, ctx));

    expect(pixelColor).toBe('#ff0000');
  });

  test('Draw line if event is mousemove and Shift is not pressed', () => {
    strokeActions('mousemove', 1, 1, 5, 5, ctx, '#ff0000', prevImage, { isShift: false });

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

  test('Draw uniform line if event is mousemove and Shift is pressed', () => {
    strokeActions('mousemove', 0, 0, 5, 5, ctx, '#ff0000', prevImage, { isShift: true });

    let count = 0;
    const pixels = getUniformLinePixels(0, 0, 5, 5);
    pixels.forEach(([x, y]) => {
      const pixelColor = rgbToHex(...getPixelColor(x, y, ctx));
      if (pixelColor === '#ff0000') {
        count++;
      }
    });

    expect(count).toBe(pixels.length);
  });
});
