import { drawPixel, getRectanglePixels } from '../utils';

function rectangleActions(prevX, prevY, currentX, currentY, ctx, color, prevImage) {
  const pixels = getRectanglePixels(prevX, prevY, currentX, currentY);
  ctx.putImageData(prevImage, 0, 0);
  pixels.forEach(([x, y]) => drawPixel(x, y, ctx, color));
}

export default rectangleActions;
