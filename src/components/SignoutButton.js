import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './SignoutButton.scss';

function SignoutButton({ onClick }) {
  return (
    <button className="sign-out-btn" type="button" onClick={onClick}>
      <FontAwesomeIcon icon={faSignOutAlt} />
      <span className="sign-out-btn__text">Sign out</span>
    </button>
  );
}

SignoutButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SignoutButton;
