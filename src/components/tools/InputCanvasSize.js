import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './InputCanvasSize.scss';
import { FULL_CANVAS_SIZE } from '../../constants';

function InputCanvasSize({ canvasSize, setCanvasSize }) {
  const [inputValue, setInputValue] = useState(canvasSize);

  useEffect(() => {
    setInputValue(canvasSize);
  }, [canvasSize]);

  const onChangeHandler = (e) => {
    const { value } = e.target;

    if (value > 0 && value <= FULL_CANVAS_SIZE) {
      setInputValue(value);
      setCanvasSize(Number(value));
    }
  };

  return (
    <input className="input-canvas-size" value={inputValue} onChange={onChangeHandler} />
  );
}

InputCanvasSize.propTypes = {
  canvasSize: PropTypes.number.isRequired,
  setCanvasSize: PropTypes.func.isRequired,
};

export default InputCanvasSize;
