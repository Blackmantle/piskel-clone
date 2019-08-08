import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Frame.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import { FULL_CANVAS_SIZE } from '../constants';

function Frame({
  id,
  index,
  image,
  frames,
  setFrames,
  activeFrame,
  setActiveFrame,
  canvasSize,
}) {
  const frameRef = useRef();

  useEffect(() => {
    const frameZoom = 100 / canvasSize;
    frameRef.current.style.transform = `scale(${frameZoom})`;
  }, [canvasSize]);

  useEffect(() => {
    if (image) {
      const ctx = frameRef.current.getContext('2d');
      ctx.putImageData(image, 0, 0);
    }

    frames[index].ref = frameRef;
    // eslint-disable-next-line
  }, []);

  const setNewActiveFrame = () => {
    setActiveFrame(frames[index]);
  };

  const deleteFrame = (e) => {
    e.stopPropagation();

    if (activeFrame.id === id) {
      if (index !== frames.length - 1) {
        setActiveFrame(frames[index + 1]);
      } else {
        setActiveFrame(frames[index - 1]);
      }
    }

    const newFrames = [...frames];
    newFrames.splice(index, 1);
    setFrames(newFrames);
  };

  const copyFrame = (e) => {
    e.stopPropagation();

    const ctx = frameRef.current.getContext('2d');
    const copiedImage = ctx.getImageData(0, 0, frameRef.current.width, frameRef.current.height);
    const copiedFrame = { id: Date.now(), image: copiedImage };

    const newFrames = [...frames];
    newFrames.splice(index + 1, 0, copiedFrame);
    setFrames(newFrames);

    setActiveFrame(newFrames[index + 1]);
  };

  return (
    <div className={`frame${activeFrame.id === id ? ' frame--active' : ''}`} onClick={setNewActiveFrame}>
      <canvas
        ref={frameRef}
        className="frame__canvas"
        width={FULL_CANVAS_SIZE}
        height={FULL_CANVAS_SIZE}
      />
      <div className="frame__box frame__id">{index + 1}</div>
      {
        frames.length !== 1
          && (
            <div className="frame__box frame__delete-btn" onClick={deleteFrame}>
              <FontAwesomeIcon icon={solidIcons.faTrashAlt} />
            </div>
          )
      }
      <div className="frame__box frame__copy-btn" onClick={copyFrame}>
        <FontAwesomeIcon icon={solidIcons.faCopy} />
      </div>
    </div>
  );
}

Frame.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  image: PropTypes.object,
  activeFrame: PropTypes.shape({
    id: PropTypes.number,
    index: PropTypes.number,
    ref: PropTypes.object,
  }),
  setActiveFrame: PropTypes.func.isRequired,
  canvasSize: PropTypes.number.isRequired,
  frames: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFrames: PropTypes.func.isRequired,
};

Frame.defaultProps = {
  image: null,
  activeFrame: {
    id: 0,
    index: 0,
    ref: {},
  },
};

export default React.memo(Frame);
