function drawPixel(x, y, ctx, color) {
  ctx.clearRect(x, y, 1, 1);
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
}

export default drawPixel;
