import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ColorSelect.scss';

function ColorSelect({ initialColor, isPrimary, setPalleteColors }) {
  const [selectedColor, setSelectedColor] = useState(initialColor);

  useEffect(() => {
    setSelectedColor(initialColor);
  }, [initialColor]);

  const onChangeHandler = (e) => {
    const color = e.target.value;
    setSelectedColor(color);

    if (isPrimary) {
      setPalleteColors({ primary: color, secondary: initialColor });
    } else {
      setPalleteColors(prevColors => ({ ...prevColors, secondary: color }));
    }
  };

  return (
    <input
      className="color-select"
      type="color"
      title={`${isPrimary ? 'Primary' : 'Secondary'} ${selectedColor}`}
      value={selectedColor}
      onChange={onChangeHandler}
    />
  );
}

ColorSelect.propTypes = {
  initialColor: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool.isRequired,
  setPalleteColors: PropTypes.func.isRequired,
};

export default ColorSelect;
