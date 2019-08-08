import lightenActions from '../lightenActions';
import { getPixelColor, drawPixel } from '../../utils';

const canvas = document.createElement('canvas');
canvas.width = 100;
canvas.height = 100;
const ctx = canvas.getContext('2d');

describe('Test lightenActions function', () => {
  test('Return false if color of pixel is transparent', () => {
    const res = lightenActions(1, 1, ctx, {});
    expect(res).toBe(false);
  });

  test('Lighten color if Ctrl is not pressed', () => {
    drawPixel(1, 1, ctx, 'rgb(235, 235, 235)');
    lightenActions(1, 1, ctx, { ctrlKey: false });
    const rgba = getPixelColor(1, 1, ctx);

    expect(rgba).toEqual(new Uint8ClampedArray([245, 245, 245, 255]));
  });

  test('Darken color if Ctrl is pressed', () => {
    drawPixel(1, 1, ctx, 'rgb(235, 235, 235)');
    lightenActions(1, 1, ctx, { ctrlKey: true });
    const rgba = getPixelColor(1, 1, ctx);

    expect(rgba).toEqual(new Uint8ClampedArray([225, 225, 225, 255]));
  });
});
