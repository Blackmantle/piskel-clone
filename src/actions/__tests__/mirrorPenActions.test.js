import mirrorPenActions from '../mirrorPenActions';
import { getPixelColor, getLinePixels, rgbToHex } from '../../utils';

const canvas = document.createElement('canvas');
canvas.width = 100;
canvas.height = 100;
const ctx = canvas.getContext('2d');

beforeEach(() => ctx.clearRect(0, 0, 100, 100));

describe('Test mirrorPenActions function', () => {
  test('Draw 2 mirrored pixels by X if event is mousedown and if Ctrl and Shift are not pressed', () => {
    mirrorPenActions('mousedown', canvas.width, 1, 1, ctx, '#ff0000', { ctrlKey: false, shiftKey: false });
    const firstPixelColor = rgbToHex(...getPixelColor(1, 1, ctx));
    const secondPixelColor = rgbToHex(...getPixelColor(canvas.width - 2, 1, ctx));

    expect(firstPixelColor).toBe('#ff0000');
    expect(secondPixelColor).toBe('#ff0000');
  });

  test('Draw 2 mirrored pixels by Y if event is mousedown and if Ctrl is pressed', () => {
    mirrorPenActions('mousedown', 100, 1, 1, ctx, '#ff0000', { ctrlKey: true, shiftKey: false });
    const firstPixelColor = rgbToHex(...getPixelColor(1, 1, ctx));
    const secondPixelColor = rgbToHex(...getPixelColor(1, 98, ctx));

    expect(firstPixelColor).toBe('#ff0000');
    expect(secondPixelColor).toBe('#ff0000');
  });

  test('Draw 4 mirrored pixels by XY if event is mousedown and if Shift is pressed', () => {
    mirrorPenActions('mousedown', 100, 1, 1, ctx, '#ff0000', { ctrlKey: false, shiftKey: true });
    const firstPixelColor = rgbToHex(...getPixelColor(1, 1, ctx));
    const secondPixelColor = rgbToHex(...getPixelColor(98, 1, ctx));
    const thirdPixelColor = rgbToHex(...getPixelColor(1, 98, ctx));
    const fourthPixelColor = rgbToHex(...getPixelColor(98, 98, ctx));

    expect(firstPixelColor).toBe('#ff0000');
    expect(secondPixelColor).toBe('#ff0000');
    expect(thirdPixelColor).toBe('#ff0000');
    expect(fourthPixelColor).toBe('#ff0000');
  });

  test('Draw line of mirrored pixels by X if event is mousemove and if Ctrl and Shift are not pressed', () => {
    mirrorPenActions('mousemove', 100, 1, 1, 3, 3, ctx, '#ff0000', { ctrlKey: false, shiftKey: false });

    const pixels = getLinePixels(1, 1, 3, 3);
    const mByXpixels = getLinePixels(98, 1, 96, 3);

    let count = 0;
    pixels.forEach(([x, y]) => {
      const pixelColor = rgbToHex(...getPixelColor(x, y, ctx));
      if (pixelColor === '#ff0000') {
        count++;
      }
    });

    mByXpixels.forEach(([x, y]) => {
      const pixelColor = rgbToHex(...getPixelColor(x, y, ctx));
      if (pixelColor === '#ff0000') {
        count++;
      }
    });

    expect(count).toBe(pixels.length + mByXpixels.length);
  });

  test('Draw line of mirrored pixels by Y if event is mousemove and if Ctrl is pressed', () => {
    mirrorPenActions('mousemove', 100, 1, 1, 3, 3, ctx, '#ff0000', { ctrlKey: true, shiftKey: false });

    const pixels = getLinePixels(1, 1, 3, 3);
    const mByYpixels = getLinePixels(1, 98, 3, 96);

    let count = 0;
    pixels.forEach(([x, y]) => {
      const pixelColor = rgbToHex(...getPixelColor(x, y, ctx));
      if (pixelColor === '#ff0000') {
        count++;
      }
    });

    mByYpixels.forEach(([x, y]) => {
      const pixelColor = rgbToHex(...getPixelColor(x, y, ctx));
      if (pixelColor === '#ff0000') {
        count++;
      }
    });

    expect(count).toBe(pixels.length + mByYpixels.length);
  });

  test('Draw line of mirrored pixels by XY if event is mousemove and if Shift is pressed', () => {
    mirrorPenActions('mousemove', 100, 1, 1, 3, 3, ctx, '#ff0000', { ctrlKey: false, shiftKey: true });

    const pixels = getLinePixels(1, 1, 3, 3);
    const mByXpixels = getLinePixels(98, 1, 96, 3);
    const mByYpixels = getLinePixels(1, 98, 3, 96);
    const mByXYpixels = getLinePixels(98, 98, 96, 96);

    let count = 0;
    pixels.forEach(([x, y]) => {
      const pixelColor = rgbToHex(...getPixelColor(x, y, ctx));
      if (pixelColor === '#ff0000') {
        count++;
      }
    });

    mByXpixels.forEach(([x, y]) => {
      const pixelColor = rgbToHex(...getPixelColor(x, y, ctx));
      if (pixelColor === '#ff0000') {
        count++;
      }
    });

    mByYpixels.forEach(([x, y]) => {
      const pixelColor = rgbToHex(...getPixelColor(x, y, ctx));
      if (pixelColor === '#ff0000') {
        count++;
      }
    });

    mByXYpixels.forEach(([x, y]) => {
      const pixelColor = rgbToHex(...getPixelColor(x, y, ctx));
      if (pixelColor === '#ff0000') {
        count++;
      }
    });

    expect(count).toBe(pixels.length + mByXpixels.length + mByYpixels.length + mByXYpixels.length);
  });
});
