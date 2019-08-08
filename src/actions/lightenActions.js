import { rgbToHex, getPixelColor, drawPixel } from '../utils';

function lightenActions(x, y, ctx, keysPressed) {
  const pickedColor = getPixelColor(x, y, ctx);

  if (pickedColor[3] === 0) {
    return false;
  }

  if (keysPressed.ctrlKey) {
    pickedColor[0] -= 10;
    pickedColor[1] -= 10;
    pickedColor[2] -= 10;
  } else {
    pickedColor[0] += 10;
    pickedColor[1] += 10;
    pickedColor[2] += 10;
  }

  drawPixel(x, y, ctx, rgbToHex(...pickedColor));

  return true;
}

export default lightenActions;
