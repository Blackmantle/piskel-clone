function getDistance(x0, x1, y0, y1) {
  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);

  return Math.sqrt((dx ** 2) + (dy ** 2));
}

export default getDistance;
