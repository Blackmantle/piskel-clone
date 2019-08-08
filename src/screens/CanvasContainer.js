import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CanvasContainer.scss';
import Canvas from '../components/Canvas';
import InputCanvasSize from '../components/tools/InputCanvasSize';

function CanvasContainer({ canvasSize, setCanvasSize, ...rest }) {
  const [canvasZoom, setCanvasZoom] = useState(1);
  const [canvasMouseCoords, setCanvasMouseCoords] = useState([0, 0]);

  const [x, y] = canvasMouseCoords;
  return (
    <div className="canvas-container">
      <Canvas
        canvasSize={canvasSize}
        setCanvasSize={setCanvasSize}
        canvasZoom={canvasZoom}
        setCanvasZoom={setCanvasZoom}
        canvasMouseCoords={canvasMouseCoords}
        setCanvasMouseCoords={setCanvasMouseCoords}
        {...rest}
      />
      <div className="canvas-info">
        <InputCanvasSize canvasSize={canvasSize} setCanvasSize={setCanvasSize} />
        <span>{`[${canvasSize}x${canvasSize}]`}</span>
        <span>{`${x}:${y}`}</span>
      </div>
    </div>
  );
}

CanvasContainer.propTypes = {
  canvasSize: PropTypes.number.isRequired,
  setCanvasSize: PropTypes.func.isRequired,
};

export default CanvasContainer;
