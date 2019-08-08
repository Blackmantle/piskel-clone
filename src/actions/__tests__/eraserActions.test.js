import eraserActions from '../eraserActions';
import { drawPixel, getPixelColor } from '../../utils';

const canvas = document.createElement('canvas');
canvas.width = 100;
canvas.height = 100;
const ctx = canvas.getContext('2d');

describe('Test eraserActions function', () => {
  test('Draw transparent pixel in target position', () => {
    drawPixel(1, 1, ctx, '#ff0000');
    eraserActions(1, 1, ctx);
    const isTransparent = getPixelColor(1, 1, ctx)[3] === 0;

    expect(isTransparent).toBe(true);
  });
});
