import { drawPixel, getCirclePixels } from '../utils';

function circleActions(prevX, prevY, currentX, currentY, ctx, color, prevImage) {
  const pixels = getCirclePixels(prevX, prevY, currentX, currentY);
  ctx.putImageData(prevImage, 0, 0);
  pixels.forEach(([x, y]) => drawPixel(x, y, ctx, color));
}

export default circleActions;
