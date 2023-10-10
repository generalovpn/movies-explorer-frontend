import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import '../Navigation/Navigation.css';
import Navigation from '../Navigation/Navigation';

function Header() {
  const location = useLocation();
  const isMain = location.pathname === '/';
  const user = React.useContext(CurrentUserContext);
  const [isPopup, setIsPopup] = useState(false);

  const popupNavigationHandler = () => {
    setIsPopup(!isPopup);
  };

  return (
    <header className={`header ${!isMain ? 'header_logged' : ''}`}>
      <div className="header__container">
        <NavLink to="/" className="header__logo" />
        <Navigation
          isPopup={isPopup}
          closePopup={popupNavigationHandler}
        />
        {user.isLoggedIn && (
          <button
            type="button"
            className={`header__btn-menu-open ${isMain ? 'header__btn-menu-open_color_white' : ''}`}
            name="header__btn-menu-open"
            onClick={popupNavigationHandler}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
