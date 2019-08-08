import colorPickerActions from '../colorPickerActions';
import { drawPixel } from '../../utils';

const canvas = document.createElement('canvas');
canvas.width = 100;
canvas.height = 100;
const ctx = canvas.getContext('2d');

describe('Test colorPickerActions function', () => {
  test('Return correct color of picked pixel', () => {
    drawPixel(1, 1, ctx, '#ff0000');
    const pickedColor = colorPickerActions(1, 1, ctx);
    expect(pickedColor).toBe('#ff0000');
  });
});
