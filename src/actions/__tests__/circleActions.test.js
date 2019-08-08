import circleActions from '../circleActions';
import { getCirclePixels, getPixelColor, rgbToHex } from '../../utils';

const canvas = document.createElement('canvas');
canvas.width = 100;
canvas.height = 100;
const ctx = canvas.getContext('2d');
const prevImage = ctx.getImageData(0, 0, 100, 100);

describe('Test circleActions function', () => {
  test('All circle pixels color should be equal', () => {
    circleActions(1, 1, 5, 5, ctx, '#ff0000', prevImage);

    let count = 0;
    const pixels = getCirclePixels(1, 1, 5, 5);
    pixels.forEach(([x, y]) => {
      const pixelColor = rgbToHex(...getPixelColor(x, y, ctx));
      if (pixelColor === '#ff0000') {
        count++;
      }
    });

    expect(count).toBe(pixels.length);
  });
});
