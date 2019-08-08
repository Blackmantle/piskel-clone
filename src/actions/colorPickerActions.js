import { rgbToHex, getPixelColor } from '../utils';

function colorPickerActions(x, y, ctx) {
  const pickedColor = rgbToHex(...getPixelColor(x, y, ctx));

  return pickedColor;
}

export default colorPickerActions;
