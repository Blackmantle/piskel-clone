import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PreviewContainer.scss';
import Preview from '../components/Preview';
import DisplayFPS from '../components/DisplayFPS';
import ExportMenu from './ExportMenu';
import { INITIAL_FPS } from '../constants';

function PreviewContainer({ canvasSize, userAccessToken, frames, activeFrameImage }) {
  const [FPS, setFPS] = useState(INITIAL_FPS);

  return (
    <div className="preview-container">
      <Preview
        frames={frames}
        activeFrameImage={activeFrameImage}
        FPS={FPS}
        canvasSize={canvasSize}
      />
      <DisplayFPS FPS={FPS} setFPS={setFPS} />
      <ExportMenu
        frames={frames}
        canvasSize={canvasSize}
        FPS={FPS}
        userAccessToken={userAccessToken}
      />
    </div>
  );
}

PreviewContainer.propTypes = {
  canvasSize: PropTypes.number.isRequired,
  userAccessToken: PropTypes.string,
  frames: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeFrameImage: PropTypes.object.isRequired,
};

PreviewContainer.defaultProps = {
  userAccessToken: '',
};

export default PreviewContainer;
