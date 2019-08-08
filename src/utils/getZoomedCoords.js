function getZoomedCoords(x, y, zoom) {
  const zoomedX = Math.floor(x / zoom);
  const zoomedY = Math.floor(y / zoom);

  return [zoomedX, zoomedY];
}

export default getZoomedCoords;
