import { drawPixel, getLinePixels } from '../utils';

function mirrorPenActions(event, ...payload) {
  if (event === 'mousedown') {
    const [
      canvasSize,
      x, y,
      ctx, color,
      keysPressed,
    ] = payload;

    const mirroredX = canvasSize - x - 1;
    const mirroredY = canvasSize - y - 1;

    drawPixel(x, y, ctx, color);

    if (!keysPressed.ctrlKey && !keysPressed.shiftKey) {
      drawPixel(mirroredX, y, ctx, color);
      return;
    }

    if (keysPressed.ctrlKey) {
      drawPixel(x, mirroredY, ctx, color);
      return;
    }

    if (keysPressed.shiftKey) {
      drawPixel(mirroredX, y, ctx, color);
      drawPixel(x, mirroredY, ctx, color);
      drawPixel(mirroredX, mirroredY, ctx, color);
    }
  }

  if (event === 'mousemove') {
    const [
      canvasSize,
      prevX, prevY,
      currentX, currentY,
      ctx, color,
      keysPressed,
    ] = payload;

    const prevMirroredX = canvasSize - prevX - 1;
    const prevMirroredY = canvasSize - prevY - 1;
    const curMirroredX = canvasSize - currentX - 1;
    const curMirroredY = canvasSize - currentY - 1;

    const pixels = getLinePixels(prevX, prevY, currentX, currentY);
    pixels.forEach(([x, y]) => drawPixel(x, y, ctx, color));

    const mByXpixels = getLinePixels(prevMirroredX, prevY, curMirroredX, currentY);
    if (!keysPressed.ctrlKey && !keysPressed.shiftKey) {
      mByXpixels.forEach(([x, y]) => drawPixel(x, y, ctx, color));
      return;
    }

    const mByYpixels = getLinePixels(prevX, prevMirroredY, currentX, curMirroredY);
    if (keysPressed.ctrlKey) {
      mByYpixels.forEach(([x, y]) => drawPixel(x, y, ctx, color));
      return;
    }

    const mByXYpixels = getLinePixels(prevMirroredX, prevMirroredY, curMirroredX, curMirroredY);
    if (keysPressed.shiftKey) {
      mByXpixels.forEach(([x, y]) => drawPixel(x, y, ctx, color));
      mByYpixels.forEach(([x, y]) => drawPixel(x, y, ctx, color));
      mByXYpixels.forEach(([x, y]) => drawPixel(x, y, ctx, color));
    }
  }
}

export default mirrorPenActions;
