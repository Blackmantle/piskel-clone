function getPixelColor(x, y, ctx) {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const offset = (y * imageData.width + x) * 4;

  return imageData.data.slice(offset, offset + 4);
}

export default getPixelColor;
