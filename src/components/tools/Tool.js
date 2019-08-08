import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Tool.scss';

function Tool({ activeTool, setActiveTool, type, shortcut, title, icon }) {
  useEffect(() => {
    function keyDownHandler(e) {
      if (e.code === `Key${shortcut}`) {
        setActiveTool(type);
      }
    }

    window.addEventListener('keydown', keyDownHandler);
    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
    // eslint-disable-next-line
  }, [shortcut, type]);

  const onClickHandler = () => {
    setActiveTool(type);
  };

  return (
    <div className={`tool${activeTool === type ? ' tool--active' : ''}`} title={title} onClick={onClickHandler}>
      {icon}
    </div>
  );
}

Tool.propTypes = {
  activeTool: PropTypes.string.isRequired,
  setActiveTool: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  shortcut: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default Tool;
