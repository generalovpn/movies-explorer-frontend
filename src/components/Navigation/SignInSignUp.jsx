import React from "react";

import { NavLink, useNavigate } from "react-router-dom";

const SignInSignUp = () => {

  const navigate = useNavigate();

  const loginHandler = () => {
    navigate('/signin');
  };

  return (
    <>
      <NavLink to="/signup" className="navigation__link">
        Регистрация
      </NavLink>
      <input
        type="button"
        className="navigation__btn"
        onClick={loginHandler}
        value="Войти"
      />
    </>
  );
};

export default SignInSignUp;
