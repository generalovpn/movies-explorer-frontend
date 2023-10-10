import React from 'react';
import PropTypes from 'prop-types';
import './Navigation.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import AlreadySignIn from './AlreadySignIn';
import SignInSignUp from './SignInSignUp';

function Navigation({
  isPopup,
  closePopup,
}) {
  const user = React.useContext(CurrentUserContext);

  return (
    <nav className={`navigation ${user.isLoggedIn ? 'navigation_logged' : ''}`}>
      {user.isLoggedIn ? (
          <AlreadySignIn
          isPopup={isPopup}
          closePopup={closePopup}
          />
      ) : (
        <SignInSignUp/>
      )}
    </nav>
  );
}

Navigation.propTypes = {
  isPopup: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default Navigation;
