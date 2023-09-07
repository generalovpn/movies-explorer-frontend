import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";
import Navigation from '../Navigation/Navigation';

function Header({ location, loggedIn }) {
  return (
    <header
      className={location.pathname === "/" ? "header header_main" : "header"}
    >
      <Link className="header__link" to="/">
        <img src={logo} alt="Логотип" className="header__logo" />
      </Link>
      <Navigation loggedIn={loggedIn} />
    </header>
  );
}

export default Header;
