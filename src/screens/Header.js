import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.scss';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import GoogleSigninButton from '../components/GoogleSigninButton';
import SignoutButton from '../components/SignoutButton';
import UserInfo from '../components/UserInfo';

function Header({ userInfo, setUserInfo }) {
  const onSuccessHandler = ({ profileObj, accessToken }) => {
    const { name, imageUrl } = profileObj;
    setUserInfo({ name, imageUrl, accessToken });
  };

  const onLogoutSuccess = () => {
    setUserInfo({});
  };

  return (
    <header className="page-header">
      <Link to="/" className="page-header__logo">Piskel-Clone</Link>
      <nav className="page-header__nav">
        <NavLink
          to="/piskel-clone"
          className="page-header__link"
          activeClassName="page-header__link--active"
        >
          Piskel Clone App
        </NavLink>
      </nav>
      <div className="page-header__right-menu">
        {
          !Object.keys(userInfo).length
            ? (
              <GoogleLogin
                render={({ onClick }) => (
                  <GoogleSigninButton onClick={onClick} />
                )}
                scope="https://www.googleapis.com/auth/drive.file"
                clientId="459450120809-p789qv6ntg4uip1arvm7bgq05s643fcq.apps.googleusercontent.com"
                onSuccess={onSuccessHandler}
                onFailure={res => console.log(res)}
                isSignedIn
              />
            )
            : (
              <>
                <UserInfo name={userInfo.name} imageUrl={userInfo.imageUrl} />
                <GoogleLogout
                  render={({ onClick }) => (
                    <SignoutButton onClick={onClick} />
                  )}
                  clientId="459450120809-p789qv6ntg4uip1arvm7bgq05s643fcq.apps.googleusercontent.com"
                  onLogoutSuccess={onLogoutSuccess}
                />
              </>
            )
        }
      </div>
    </header>
  );
}

Header.propTypes = {
  userInfo: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    accessToken: PropTypes.string,
  }).isRequired,
  setUserInfo: PropTypes.func.isRequired,
};

export default Header;
