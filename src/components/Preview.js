import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Preview.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import { FULL_CANVAS_SIZE, SHORTCUTS } from '../constants';
import useInterval from '../hooks/useInterval';

function Preview({ frames, activeFrameImage, canvasSize, FPS }) {
  const [imagesList, setImagesList] = useState([]);
  const [styles, setStyles] = useState({
    width: `${FULL_CANVAS_SIZE}px`,
    height: `${FULL_CANVAS_SIZE}px`,
  });
  const previewRef = useRef();
  const previewWrapperRef = useRef();

  useEffect(() => {
    const previewZoom = 200 / canvasSize;
    setStyles(prev => ({ ...prev, transform: `scale(${previewZoom})` }));
  }, [canvasSize]);

  useEffect(() => {
    let list = {};
    const self = list;
    frames.forEach(({ ref }, index) => {
      list.value = ref.current.toDataURL();
      if (index === frames.length - 1) {
        list.next = self;
      } else {
        list.next = {};
      }
      list = list.next;
    });

    setImagesList(list);
  }, [frames, activeFrameImage]);

  useInterval(() => {
    setStyles(prev => ({ ...prev, backgroundImage: `url(${imagesList.value})` }));
    setImagesList(prev => prev.next);
  }, 1000 / FPS);

  const onFullScreen = () => {
    if (!document.fullscreen) {
      previewWrapperRef.current.style.width = `${FULL_CANVAS_SIZE}px`;
      previewWrapperRef.current.style.height = `${FULL_CANVAS_SIZE}px`;
      const previewZoom = FULL_CANVAS_SIZE / canvasSize;
      setStyles(prev => ({ ...prev, transform: `scale(${previewZoom})` }));

      previewRef.current.requestFullscreen();
    } else {
      previewWrapperRef.current.style = null;
      const previewZoom = 200 / canvasSize;
      setStyles(prev => ({ ...prev, transform: `scale(${previewZoom})` }));

      document.exitFullscreen();
    }
  };

  useEffect(() => {
    function keyDownHandler(e) {
      if (e.code === `Key${SHORTCUTS.FULLSCREEN_MODE}`) {
        onFullScreen();
      }
    }

    window.addEventListener('keydown', keyDownHandler);
    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
    // eslint-disable-next-line
  }, [canvasSize]);

  return (
    <div ref={previewRef} className="preview">
      <div ref={previewWrapperRef} className="preview__wrapper">
        <div className="preview__canvas" style={styles} />
        <div
          className="box preview__fullscreen-btn"
          title={`Fullscreen mode (${SHORTCUTS.FULLSCREEN_MODE})`}
          onClick={onFullScreen}
        >
          <FontAwesomeIcon icon={solidIcons.faCompress} />
        </div>
      </div>
    </div>
  );
}

Preview.propTypes = {
  frames: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeFrameImage: PropTypes.object.isRequired,
  canvasSize: PropTypes.number.isRequired,
  FPS: PropTypes.number.isRequired,
};

export default Preview;
