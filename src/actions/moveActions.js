function moveActions(prevX, prevY, currentX, currentY, ctx, prevImage) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.putImageData(prevImage, currentX - prevX, currentY - prevY);
}

export default moveActions;
