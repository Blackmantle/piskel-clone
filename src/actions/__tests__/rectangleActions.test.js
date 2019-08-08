import rectangleActions from '../rectangleActions';
import { getRectanglePixels, getPixelColor, rgbToHex } from '../../utils';

const canvas = document.createElement('canvas');
canvas.width = 100;
canvas.height = 100;
const ctx = canvas.getContext('2d');
const prevImage = ctx.getImageData(0, 0, 100, 100);

describe('Test rectangleActions function', () => {
  test('All rectangle pixels color should be equal', () => {
    rectangleActions(1, 1, 5, 5, ctx, '#ff0000', prevImage);

    let count = 0;
    const pixels = getRectanglePixels(1, 1, 5, 5);
    pixels.forEach(([x, y]) => {
      const pixelColor = rgbToHex(...getPixelColor(x, y, ctx));
      if (pixelColor === '#ff0000') {
        count++;
      }
    });

    expect(count).toBe(pixels.length);
  });
});
