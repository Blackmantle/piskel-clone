import getOrderedRectangleCoordinates from './getOrderedRectangleCoordinates';

function getCirclePixels(x0, y0, x1, y1) {
  const coords = getOrderedRectangleCoordinates(x0, y0, x1, y1);
  const pixels = [];
  const xC = Math.round((coords.x0 + coords.x1) / 2);
  const yC = Math.round((coords.y0 + coords.y1) / 2);
  const evenX = (coords.x0 + coords.x1) % 2;
  const evenY = (coords.y0 + coords.y1) % 2;
  const rX = coords.x1 - xC;
  const rY = coords.y1 - yC;

  let x;
  let y;
  let angle;

  for (x = coords.x0; x <= xC; x++) {
    angle = Math.acos((x - xC) / rX);
    y = Math.round(rY * Math.sin(angle) + yC);
    pixels.push([x - evenX, y]);
    pixels.push([x - evenX, 2 * yC - y - evenY]);
    pixels.push([2 * xC - x, y]);
    pixels.push([2 * xC - x, 2 * yC - y - evenY]);
  }

  for (y = coords.y0; y <= yC; y++) {
    angle = Math.asin((y - yC) / rY);
    x = Math.round(rX * Math.cos(angle) + xC);
    pixels.push([x, y - evenY]);
    pixels.push([2 * xC - x - evenX, y - evenY]);
    pixels.push([x, 2 * yC - y]);
    pixels.push([2 * xC - x - evenX, 2 * yC - y]);
  }

  return pixels;
}

export default getCirclePixels;
