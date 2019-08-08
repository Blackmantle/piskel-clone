import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PiskelCloneApp.scss';
import * as constants from '../constants';
import ToolMenu from './ToolMenu';
import FrameList from './FrameList';
import CanvasContainer from './CanvasContainer';
import PreviewContainer from './PreviewContainer';

function PiskelCloneApp({ userAccessToken }) {
  const [activeTool, setActiveTool] = useState(constants.INITIAL_TOOL);
  const [canvasSize, setCanvasSize] = useState(constants.INITIAL_CANVAS_SIZE);
  const [palleteColors, setPalleteColors] = useState({
    primary: constants.INITIAL_PRIMARY_COLOR,
    secondary: constants.INITIAL_SECONDARY_COLOR,
  });
  const [frames, setFrames] = useState([{ id: Date.now() }]);
  const [activeFrame, setActiveFrame] = useState(frames[0]);
  const [activeFrameImage, setActiveFrameImage] = useState({});

  return (
    <div className="piskel-clone-app">
      <ToolMenu
        activeTool={activeTool}
        setActiveTool={setActiveTool}
        palleteColors={palleteColors}
        setPalleteColors={setPalleteColors}
      />
      <FrameList
        frames={frames}
        setFrames={setFrames}
        activeFrame={activeFrame}
        setActiveFrame={setActiveFrame}
        canvasSize={canvasSize}
      />
      <CanvasContainer
        canvasSize={canvasSize}
        setCanvasSize={setCanvasSize}
        activeTool={activeTool}
        palleteColors={palleteColors}
        setPalleteColors={setPalleteColors}
        activeFrame={activeFrame}
        setActiveFrameImage={setActiveFrameImage}
      />
      <PreviewContainer
        frames={frames}
        activeFrameImage={activeFrameImage}
        canvasSize={canvasSize}
        userAccessToken={userAccessToken}
      />
    </div>
  );
}

PiskelCloneApp.propTypes = {
  userAccessToken: PropTypes.string,
};

PiskelCloneApp.defaultProps = {
  userAccessToken: '',
};

export default PiskelCloneApp;
