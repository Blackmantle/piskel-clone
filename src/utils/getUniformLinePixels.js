import getDistance from './getDistance';

function getUniformLinePixels(x0, y0, x1, y1) {
  const pixels = [];
  const dx = Math.abs(x1 - x0) + 1;
  const dy = Math.abs(y1 - y0) + 1;
  const sx = (x0 < x1) ? 1 : -1;
  const sy = (y0 < y1) ? 1 : -1;
  const ratio = Math.max(dx, dy) / Math.min(dx, dy);

  let pixelStep = Math.round(ratio);

  if (pixelStep > Math.min(dx, dy)) {
    pixelStep = Infinity;
  }

  const maxDistance = getDistance(x0, x1, y0, y1);

  let x = x0;
  let y = y0;
  let i = 0;
  while (true) {
    i++;

    pixels.push([x, y]);
    if (getDistance(x0, x, y0, y) >= maxDistance) {
      break;
    }

    const isAtStep = i % pixelStep === 0;
    if (dx >= dy || isAtStep) {
      x += sx;
    }

    if (dy >= dx || isAtStep) {
      y += sy;
    }
  }

  return pixels;
}

export default getUniformLinePixels;
