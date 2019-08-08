import React from 'react';
import PropTypes from 'prop-types';
import './ToolMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as regularIcons from '@fortawesome/free-regular-svg-icons';
import Tool from '../components/tools/Tool';
import ColorSelect from '../components/tools/ColorSelect';
import actionTypes from '../actions/types';
import { SHORTCUTS } from '../constants';

function ToolMenu({ palleteColors, setPalleteColors, ...props }) {
  return (
    <div className="tool-menu-container">
      <div className="tool-menu">
        <Tool
          type={actionTypes.PEN}
          shortcut={SHORTCUTS.PEN}
          title={`Pen tool (${SHORTCUTS.PEN})`}
          icon={<FontAwesomeIcon icon={solidIcons.faPencilAlt} />}
          {...props}
        />
        <Tool
          type={actionTypes.MIRROR_PEN}
          shortcut={SHORTCUTS.MIRROR_PEN}
          title={`Mirror pen tool (${SHORTCUTS.MIRROR_PEN})\nHold (Ctrl) to use horizontal axis\nHold (Shift) to use horizontal and vertical axis`}
          icon={<FontAwesomeIcon icon={solidIcons.faPencilRuler} />}
          {...props}
        />
        <Tool
          type={actionTypes.STROKE}
          shortcut={SHORTCUTS.STROKE}
          title={`Stroke tool (${SHORTCUTS.STROKE})\nHold (Shift) to draw straight lines`}
          icon={<FontAwesomeIcon icon={solidIcons.faGripLinesVertical} />}
          {...props}
        />
        <Tool
          type={actionTypes.RECTANGLE}
          shortcut={SHORTCUTS.RECTANGLE}
          title={`Rectangle tool (${SHORTCUTS.RECTANGLE})`}
          icon={<FontAwesomeIcon icon={regularIcons.faSquare} />}
          {...props}
        />
        <Tool
          type={actionTypes.CIRCLE}
          shortcut={SHORTCUTS.CIRCLE}
          title={`Circle tool (${SHORTCUTS.CIRCLE})`}
          icon={<FontAwesomeIcon icon={regularIcons.faCircle} />}
          {...props}
        />
        <Tool
          type={actionTypes.MOVE}
          shortcut={SHORTCUTS.MOVE}
          title={`Move tool (${SHORTCUTS.MOVE})`}
          icon={<FontAwesomeIcon icon={solidIcons.faArrowsAlt} />}
          {...props}
        />
        <Tool
          type={actionTypes.ERASER}
          shortcut={SHORTCUTS.ERASER}
          title={`Eraser tool (${SHORTCUTS.ERASER})`}
          icon={<FontAwesomeIcon icon={solidIcons.faEraser} />}
          {...props}
        />
        <Tool
          type={actionTypes.COLOR_PICKER}
          shortcut={SHORTCUTS.COLOR_PICKER}
          title={`Color picker tool (${SHORTCUTS.COLOR_PICKER})`}
          icon={<FontAwesomeIcon icon={solidIcons.faEyeDropper} />}
          {...props}
        />
        <Tool
          type={actionTypes.DITHERING}
          shortcut={SHORTCUTS.DITHERING}
          title={`Dithering tool (${SHORTCUTS.DITHERING})`}
          icon={<FontAwesomeIcon icon={solidIcons.faChessBoard} />}
          {...props}
        />
        <Tool
          type={actionTypes.LIGHTEN}
          shortcut={SHORTCUTS.LIGHTEN}
          title={`Lighten tool (${SHORTCUTS.LIGHTEN})\nHold (Ctrl) to darken`}
          icon={<FontAwesomeIcon icon={solidIcons.faAdjust} />}
          {...props}
        />
      </div>
      <div className="pallete-container">
        <ColorSelect
          initialColor={palleteColors.primary}
          setPalleteColors={setPalleteColors}
          isPrimary
        />
        <ColorSelect
          initialColor={palleteColors.secondary}
          setPalleteColors={setPalleteColors}
          isPrimary={false}
        />
      </div>
    </div>
  );
}

ToolMenu.propTypes = {
  setPalleteColors: PropTypes.func.isRequired,
  palleteColors: PropTypes.shape({
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired,
  }).isRequired,
};

export default ToolMenu;
