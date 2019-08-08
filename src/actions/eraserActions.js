import { drawPixel } from '../utils';
import { TRANSPARENT_COLOR } from '../constants';

function eraserActions(x, y, ctx) {
  drawPixel(x, y, ctx, TRANSPARENT_COLOR);
}

export default eraserActions;
