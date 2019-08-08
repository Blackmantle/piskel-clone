import { drawPixel, getLinePixels, getUniformLinePixels } from '../utils';

function strokeActions(event, ...payload) {
  if (event === 'mousedown') {
    const [x, y, ctx, color] = payload;
    drawPixel(x, y, ctx, color);
  }

  if (event === 'mousemove') {
    const [
      prevX, prevY,
      currentX, currentY,
      ctx, color, prevImage,
      keysPressed,
    ] = payload;

    let pixels;
    if (keysPressed.shiftKey) {
      pixels = getUniformLinePixels(prevX, prevY, currentX, currentY);
    } else {
      pixels = getLinePixels(prevX, prevY, currentX, currentY);
    }

    ctx.putImageData(prevImage, 0, 0);
    pixels.forEach(([x, y]) => drawPixel(x, y, ctx, color));
  }
}

export default strokeActions;
