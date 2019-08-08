import React from 'react';
import PropTypes from 'prop-types';
import './UserInfo.scss';

function UserInfo({ name, imageUrl }) {
  return (
    <div className="user-info">
      <span className="user-info__name">{name}</span>
      <img
        className="user-info__avatar"
        src={imageUrl}
        alt="user avatar"
        width="35"
        height="35"
      />
    </div>
  );
}

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default UserInfo;
