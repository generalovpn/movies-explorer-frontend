import React from "react";

import { NavLink, useLocation } from "react-router-dom";

const AlreadySignIn = ({isPopup, closePopup}) => {
    const location = useLocation();
    const isMain = location.pathname === '/';

    const navigationType = !isPopup ? 'navigation__menu' : 'navigation__popup';

    const toDoNavLinkClass = (isActive) => {
        const baseClass = 'navigation__link navigation__link_logged';
        const activeClass = isActive ? 'navigation__link_active' : '';
        const popupClass = isPopup ? 'navigation__link_popup' : '';
        const mainClass = isMain && !isPopup ? 'navigation__link_color_white' : '';
    
        return `${baseClass} ${activeClass} ${popupClass} ${mainClass}`;
      };


  return (
    <div className={navigationType}>
      {isPopup && (
        <NavLink
          to="/"
          className={({ isActive }) => toDoNavLinkClass(isActive)}
        >
          Главная
        </NavLink>
      )}
      <NavLink
        to="/movies"
        className={({ isActive }) => toDoNavLinkClass(isActive)}
      >
        Фильмы
      </NavLink>
      <NavLink
        to="/saved-movies"
        className={({ isActive }) => toDoNavLinkClass(isActive)}
      >
        Сохранённые фильмы
      </NavLink>
      <NavLink
        to="/profile"
        className={`navigation__btn navigation__btn_logged ${
          isPopup ? "navigation__btn_popup" : ""
        }`}
      >
        Аккаунт
      </NavLink>
      {isPopup && (
        <button
          type="button"
          className="navigation__btn-close-popup"
          name="popup-close-btn"
          aria-label="Закрыть"
          value=""
          onClick={closePopup}
        />
      )}
    </div>
  );
};

export default AlreadySignIn;
