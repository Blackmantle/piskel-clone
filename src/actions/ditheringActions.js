import { drawPixel, getLinePixels } from '../utils';

function ditheringActions(event, ...payload) {
  if (event === 'mousedown') {
    const [x, y, ctx, colors] = payload;

    const usePrimaryColor = (x + y) % 2;
    if (usePrimaryColor) {
      drawPixel(x, y, ctx, colors.primary);
    } else {
      drawPixel(x, y, ctx, colors.secondary);
    }
  }

  if (event === 'mousemove') {
    const [prevX, prevY, currentX, currentY, ctx, colors] = payload;

    const pixels = getLinePixels(prevX, prevY, currentX, currentY);
    pixels.forEach(([x, y]) => {
      const usePrimaryColor = (x + y) % 2;
      if (usePrimaryColor) {
        drawPixel(x, y, ctx, colors.primary);
      } else {
        drawPixel(x, y, ctx, colors.secondary);
      }
    });
  }
}

export default ditheringActions;
