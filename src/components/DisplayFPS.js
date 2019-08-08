import React from 'react';
import PropTypes from 'prop-types';
import './DisplayFPS.scss';

function DisplayFPS({ FPS, setFPS }) {
  const onChangeFPS = (e) => {
    setFPS(Number(e.target.value));
  };

  return (
    <div className="display-fps">
      <input className="display-fps__range" type="range" min="1" max="24" value={FPS} onChange={onChangeFPS} />
      <span className="display-fps__text">{FPS} FPS</span>
    </div>
  );
}

DisplayFPS.propTypes = {
  FPS: PropTypes.number.isRequired,
  setFPS: PropTypes.func.isRequired,
};

export default DisplayFPS;
