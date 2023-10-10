import React from 'react';
import PropTypes from 'prop-types';
import useForm from '../../hooks/useForm';
import PageForm from '../PageForm/PageForm';

function SignIn({ loginUser }) {
  const {
    form,
    errors,
    isFormValid,
    handleChange,
  } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    loginUser(form);
  };

  return (
    <PageForm
      pageTitle="Рады видеть!"
      pageName="login"
      submitButtonText="Войти"
      pageNavigationLink="/signup"
      pageNavigationLinkText="Регистрация"
      pageNavigationLinkComment="Ещё не зарегистрированы?"
      isFormValid={isFormValid}
      onSubmit={handleSubmit}
    >

      <label
        className={`page-form__input-label  ${errors.email ? 'page-form__input-label_invalid' : ''}`}
        htmlFor="name"
      >
        E-mail
        <input
          type="email"
          autoComplete="email"
          className="page-form__input"
          name="email"
          placeholder="E-mail"
          required
          minLength="2"
          maxLength="30"
          id="email"
          value={form.username}
          onChange={handleChange}
        />
        <span className="page-form__error-text">
          {errors.email}
        </span>
      </label>

      <label
        className={`page-form__input-label  ${errors.password ? 'page-form__input-label_invalid' : ''}`}
        htmlFor="password"
      >
        Пароль
        <input
          type="password"
          autoComplete="current-password"
          className="page-form__input"
          name="password"
          placeholder="Пароль"
          required
          minLength="6"
          maxLength="40"
          id="password"
          value={form.password}
          onChange={handleChange}
        />
        <span className="page-form__error-text">
          {errors.password}
        </span>
      </label>
    </PageForm>
  );
}

SignIn.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

export default SignIn;
