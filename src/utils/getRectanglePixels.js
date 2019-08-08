import getOrderedRectangleCoordinates from './getOrderedRectangleCoordinates';

function getRectanglePixels(x0, y0, x1, y1) {
  const rectangle = getOrderedRectangleCoordinates(x0, y0, x1, y1);
  const pixels = [];

  for (let x = rectangle.x0; x <= rectangle.x1; x++) {
    for (let y = rectangle.y0; y <= rectangle.y1; y++) {
      if (
        x > rectangle.x1 - 1 || x < rectangle.x0 + 1
        || y > rectangle.y1 - 1 || y < rectangle.y0 + 1
      ) {
        pixels.push([x, y]);
      }
    }
  }

  return pixels;
}

export default getRectanglePixels;
