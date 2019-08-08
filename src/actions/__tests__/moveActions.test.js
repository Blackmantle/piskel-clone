import moveActions from '../moveActions';
import { getPixelColor, rgbToHex, drawPixel } from '../../utils';

const canvas = document.createElement('canvas');
canvas.width = 100;
canvas.height = 100;
const ctx = canvas.getContext('2d');

describe('Test moveActions function', () => {
  test('Pixel should be moved', () => {
    drawPixel(5, 5, ctx, '#ff0000');
    drawPixel(6, 4, ctx, '#ffffff');

    const prevImage = ctx.getImageData(0, 0, 100, 100);
    moveActions(1, 1, 5, 5, ctx, prevImage);

    const firstMovedPixelColor = rgbToHex(...getPixelColor(9, 9, ctx));
    const secondMovedPixelColor = rgbToHex(...getPixelColor(10, 8, ctx));

    expect(getPixelColor(5, 5, ctx)).toEqual(new Uint8ClampedArray([0, 0, 0, 0]));
    expect(getPixelColor(6, 4, ctx)).toEqual(new Uint8ClampedArray([0, 0, 0, 0]));
    expect(firstMovedPixelColor).toBe('#ff0000');
    expect(secondMovedPixelColor).toBe('#ffffff');
  });
});
