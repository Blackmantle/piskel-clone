import React from 'react';
import PropTypes from 'prop-types';
import './GoogleSigninButton.scss';

function GoogleSigninButton({ onClick }) {
  return (
    <button className="google-sign-in-btn" type="button" onClick={onClick} />
  );
}

GoogleSigninButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default GoogleSigninButton;
