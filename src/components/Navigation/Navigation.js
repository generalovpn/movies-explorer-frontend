import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navigation({ loggedIn }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  const mainPage = (
    <nav className="navigation navigation_main">
      <ul className="navigation__list">
        <li className="navigation__elem">
          <Link
            className="navigation__link navigation__link_main link-hover"
            to="/signup"
          >
            Регистрация
          </Link>
        </li>
        <li className="navigation__elem">
          <Link
            className="navigation__link navigation__btn navigation__link_main link-hover"
            to="/signin"
          >
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );

  const loggenInPage = (
    <nav className="navigation">
      <button
        className={`navigation__burger-icon ${
          isMenuOpen ? "navigation__burger-icon_open" : ""
        } link-hover`}
        type="button"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className="navigation__container">
        <li className="navigation__elem navigation__elem_burger">
          <NavLink
            className={({ isActive }) =>
              `navigation__link ${
                isActive ? "navigation__link_active" : ""
              } link-hover`
            }
            to="/"
          >
            Главная
          </NavLink>
        </li>
        <li className="navigation__elem">
          <NavLink
            className={({ isActive }) =>
              `navigation__link ${
                isActive ? "navigation__link_active" : ""
              } link-hover`
            }
            to="/movies"
          >
            Фильмы
          </NavLink>
        </li>
        <li className="navigation__elem">
          <NavLink
            className={({ isActive }) =>
              `navigation__link ${
                isActive ? "navigation__link_active" : ""
              } link-hover`
            }
            to="/saved-movies"
          >
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className="navigation__btn navigation__btn_logged">
          <Link
            className="navigation__link navigation__link_logged link-hover"
            to="/profile"
          >
            Аккаунт
          </Link>
        </li>
      </ul>
    </nav>
  );

  return loggedIn ? loggenInPage :  mainPage;

}

export default Navigation;
