import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Canvas.scss';
import { FULL_CANVAS_SIZE } from '../constants';
import * as utils from '../utils';
import * as actions from '../actions';
import actionTypes from '../actions/types';
import useKeysPressed from '../hooks/useKeysPressed';

function Canvas({
  canvasSize,
  setCanvasSize,
  canvasZoom,
  setCanvasZoom,
  activeTool,
  setCanvasMouseCoords,
  palleteColors,
  setPalleteColors,
  activeFrame,
  setActiveFrameImage,
}) {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [prevImage, setPrevImage] = useState();
  const [initialCoords, setInitialCoords] = useState([0, 0]);
  const keysPressed = useKeysPressed();
  const canvasRef = useRef();

  useEffect(() => {
    setCanvasZoom((FULL_CANVAS_SIZE / canvasSize));
    setCanvasMouseCoords(['--', '--']);

    canvasRef.current.style.transform = `scale(${canvasZoom})`;
    // eslint-disable-next-line
  }, [canvasSize, canvasZoom]);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    const frameContext = activeFrame.ref.current.getContext('2d');
    const frameImage = frameContext.getImageData(0, 0, frameContext.canvas.width, frameContext.canvas.height);
    ctx.putImageData(frameImage, 0, 0);
  }, [activeFrame]);

  const onMouseDownHandler = (event) => {
    setIsMouseDown(true);

    const e = event.nativeEvent;
    if (e.which === 2) {
      return;
    }

    const ctx = canvasRef.current.getContext('2d');
    const color = e.which === 1 ? palleteColors.primary : palleteColors.secondary;
    const [x, y] = utils.getZoomedCoords(e.layerX, e.layerY, canvasZoom);
    setInitialCoords([x, y]);

    switch (activeTool) {
      case actionTypes.PEN:
        actions.penActions('mousedown', x, y, ctx, color);
        break;
      case actionTypes.MIRROR_PEN:
        actions.mirrorPenActions('mousedown', canvasSize, x, y, ctx, color, keysPressed);
        break;
      case actionTypes.STROKE:
        actions.strokeActions('mousedown', x, y, ctx, color);
        setPrevImage(ctx.getImageData(0, 0, FULL_CANVAS_SIZE, FULL_CANVAS_SIZE));
        break;
      case actionTypes.CIRCLE:
      case actionTypes.RECTANGLE:
        setPrevImage(ctx.getImageData(0, 0, FULL_CANVAS_SIZE, FULL_CANVAS_SIZE));
        break;
      case actionTypes.MOVE:
        setInitialCoords([x, y]);
        setPrevImage(ctx.getImageData(0, 0, FULL_CANVAS_SIZE, FULL_CANVAS_SIZE));
        break;
      case actionTypes.ERASER:
        actions.eraserActions(x, y, ctx);
        break;
      case actionTypes.DITHERING:
        actions.ditheringActions('mousedown', x, y, ctx, palleteColors);
        break;
      case actionTypes.COLOR_PICKER: {
        const pickedColor = actions.colorPickerActions(x, y, ctx);
        if (pickedColor !== palleteColors.primary) {
          setPalleteColors(prevColors => ({ primary: pickedColor, secondary: prevColors.primary }));
        }
        break;
      }
      case actionTypes.LIGHTEN:
        actions.lightenActions(x, y, ctx, keysPressed);
        break;
      default:
        break;
    }

    const activeFrameContext = activeFrame.ref.current.getContext('2d');
    const canvasImage = ctx.getImageData(0, 0, canvasSize, canvasSize);
    activeFrameContext.putImageData(canvasImage, 0, 0);
  };

  const onMouseMoveHandler = (event) => {
    const e = event.nativeEvent;
    const [currentX, currentY] = utils.getZoomedCoords(e.layerX, e.layerY, canvasZoom);
    setCanvasMouseCoords([currentX, currentY]);

    if (!isMouseDown) {
      return;
    }

    const ctx = canvasRef.current.getContext('2d');
    const color = e.which === 1 ? palleteColors.primary : palleteColors.secondary;
    const coords = [...initialCoords, currentX, currentY];

    switch (activeTool) {
      case actionTypes.PEN:
        setInitialCoords([currentX, currentY]);
        actions.penActions('mousemove', ...coords, ctx, color);
        break;
      case actionTypes.MIRROR_PEN:
        setInitialCoords([currentX, currentY]);
        actions.mirrorPenActions('mousemove', canvasSize, ...coords, ctx, color, keysPressed);
        break;
      case actionTypes.STROKE:
        actions.strokeActions('mousemove', ...coords, ctx, color, prevImage, keysPressed);
        break;
      case actionTypes.CIRCLE:
        actions.circleActions(...coords, ctx, color, prevImage);
        break;
      case actionTypes.RECTANGLE:
        actions.rectangleActions(...coords, ctx, color, prevImage);
        break;
      case actionTypes.MOVE:
        actions.moveActions(...coords, ctx, prevImage);
        break;
      case actionTypes.ERASER:
        actions.eraserActions(currentX, currentY, ctx);
        break;
      case actionTypes.DITHERING:
        setInitialCoords([currentX, currentY]);
        actions.ditheringActions('mousemove', ...coords, ctx, palleteColors);
        break;
      case actionTypes.LIGHTEN:
        actions.lightenActions(currentX, currentY, ctx, keysPressed);
        break;
      default:
        break;
    }

    const activeFrameContext = activeFrame.ref.current.getContext('2d');
    const canvasImage = ctx.getImageData(0, 0, canvasSize, canvasSize);
    activeFrameContext.putImageData(canvasImage, 0, 0);
  };

  const onDrawEnd = () => {
    const activeFrameContext = activeFrame.ref.current.getContext('2d');
    const activeFrameImage = activeFrameContext.getImageData(0, 0, canvasSize, canvasSize);
    setActiveFrameImage(activeFrameImage);
    setIsMouseDown(false);
  };

  const onWheelHandler = (e) => {
    const zoom = e.nativeEvent.deltaY > 0 ? 1 : -1;

    if ((canvasSize > 1 && canvasSize < FULL_CANVAS_SIZE)
        || (canvasSize === 1 && zoom > 0)
        || (canvasSize === FULL_CANVAS_SIZE && zoom < 0)
    ) {
      setCanvasSize(prevSize => prevSize + zoom);
    }
  };

  return (
    <div
      className="canvas-wrapper"
      style={{
        width: `${FULL_CANVAS_SIZE}px`,
        height: `${FULL_CANVAS_SIZE}px`,
      }}
    >
      <canvas
        ref={canvasRef}
        className="canvas"
        width={FULL_CANVAS_SIZE}
        height={FULL_CANVAS_SIZE}
        onMouseDown={onMouseDownHandler}
        onMouseMove={onMouseMoveHandler}
        onMouseUp={onDrawEnd}
        onMouseLeave={() => {
          onDrawEnd();
          setCanvasMouseCoords(['--', '--']);
        }}
        onWheel={onWheelHandler}
        onContextMenu={e => e.preventDefault()}
      />
    </div>
  );
}

Canvas.propTypes = {
  canvasSize: PropTypes.number.isRequired,
  setCanvasSize: PropTypes.func.isRequired,
  canvasZoom: PropTypes.number.isRequired,
  setCanvasZoom: PropTypes.func.isRequired,
  activeTool: PropTypes.string.isRequired,
  palleteColors: PropTypes.shape({
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired,
  }).isRequired,
  setPalleteColors: PropTypes.func.isRequired,
  setCanvasMouseCoords: PropTypes.func.isRequired,
  activeFrame: PropTypes.shape({
    id: PropTypes.number,
    index: PropTypes.number,
    ref: PropTypes.object,
  }),
  setActiveFrameImage: PropTypes.func.isRequired,
};

Canvas.defaultProps = {
  activeFrame: {
    id: 0,
    index: 0,
    ref: {},
  },
};

export default Canvas;
