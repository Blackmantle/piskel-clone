import React from 'react';
import PropTypes from 'prop-types';
import './FrameList.scss';
import Frame from '../components/Frame';

function FrameList({ frames, setFrames, setActiveFrame, ...rest }) {
  const addNewFrame = () => {
    const newFrame = { id: Date.now() };
    setFrames(prevFrames => [...prevFrames, newFrame]);
    setActiveFrame(newFrame);
  };

  return (
    <div className="frames">
      <div className="frames__wrapper">
        {
          frames.map(({ id, image = null }, index) => (
            <Frame
              key={id}
              id={id}
              index={index}
              image={image}
              frames={frames}
              setFrames={setFrames}
              setActiveFrame={setActiveFrame}
              {...rest}
            />
          ))
        }
      </div>
      <button className="frames__add-new-btn" type="button" onClick={addNewFrame}>Add new frame</button>
    </div>
  );
}

FrameList.propTypes = {
  frames: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFrames: PropTypes.func.isRequired,
  setActiveFrame: PropTypes.func.isRequired,
};

export default FrameList;
