import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ExportMenu.scss';
import { getGIF, getAPNG } from '../utils';
import { EXPORT_FILE_NAME } from '../constants';

function ExportMenu({ frames, canvasSize, FPS, userAccessToken }) {
  const [selectedFileType, setSelectedFileType] = useState('GIF');

  function resizeFrameContexts(framesToResize) {
    const resizedFrameContexts = [];

    framesToResize.forEach(({ ref }) => {
      const resizedFrame = document.createElement('canvas');
      const ctx = resizedFrame.getContext('2d');
      resizedFrame.width = canvasSize;
      resizedFrame.height = canvasSize;
      ctx.drawImage(ref.current, 0, 0);

      resizedFrameContexts.push(ctx);
    });

    return resizedFrameContexts;
  }

  const changeFileType = (e) => {
    setSelectedFileType(e.target.value);
  };

  const onDownload = () => {
    const resizedFrameContexts = resizeFrameContexts(frames);

    switch (selectedFileType) {
      case 'APNG': {
        const APNG = getAPNG(resizedFrameContexts, canvasSize, FPS);
        APNG.download(EXPORT_FILE_NAME);
        break;
      }
      default: {
        const GIF = getGIF(resizedFrameContexts, FPS);
        GIF.download(EXPORT_FILE_NAME);
      }
    }
  };

  const uploadToGoogleDrive = () => {
    const resizedFrameContexts = resizeFrameContexts(frames);

    let body;
    switch (selectedFileType) {
      case 'APNG': {
        const APNG = getAPNG(resizedFrameContexts, canvasSize, FPS);
        body = APNG;
        break;
      }
      default: {
        const GIF = getGIF(resizedFrameContexts, FPS);
        body = GIF.getUint8Array();
      }
    }

    fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=media', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userAccessToken}`,
      },
      body,
    });
  };

  return (
    <div className="export-menu">
      <div className="export-menu__wrapper">
        <div className="export-menu__btn download-btn" onClick={onDownload}>Download</div>
        <select className="select-file-type" value={selectedFileType} onChange={changeFileType}>
          <option value="GIF">as GIF</option>
          <option value="APNG">as APNG</option>
        </select>
      </div>
      <div className="export-menu__btn" onClick={uploadToGoogleDrive}>Upload to Google Drive</div>
    </div>
  );
}

ExportMenu.propTypes = {
  frames: PropTypes.arrayOf(PropTypes.object).isRequired,
  canvasSize: PropTypes.number.isRequired,
  FPS: PropTypes.number.isRequired,
  userAccessToken: PropTypes.string,
};

ExportMenu.defaultProps = {
  userAccessToken: '',
};

export default ExportMenu;
