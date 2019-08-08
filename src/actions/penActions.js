import { drawPixel, getLinePixels } from '../utils';

function penActions(event, ...payload) {
  if (event === 'mousedown') {
    const [x, y, ctx, color] = payload;
    drawPixel(x, y, ctx, color);
  }

  if (event === 'mousemove') {
    const [prevX, prevY, currentX, currentY, ctx, color] = payload;
    const pixels = getLinePixels(prevX, prevY, currentX, currentY);
    pixels.forEach(([x, y]) => drawPixel(x, y, ctx, color));
  }
}

export default penActions;
