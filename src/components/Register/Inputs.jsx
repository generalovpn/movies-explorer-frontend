import React from "react";

const Inputs = ({form, handleChange, errors}) => {
  return (
    <>
      <label className="page-form__input-label" htmlFor="name">
        Имя
        <input
          type="text"
          autoComplete="name"
          className="page-form__input"
          name="name"
          placeholder="Имя"
          required
          minLength={2}
          maxLength={30}
          id="name"
          value={form.name}
          onChange={handleChange}
        />
        <span className="page-form__error-text">{errors.name}</span>
      </label>
      <label className="page-form__input-label" htmlFor="email">
        E-mail
        <input
          type="email"
          autoComplete="email"
          className="page-form__input"
          name="email"
          placeholder="E-mail"
          required
          maxLength={30}
          id="email"
          value={form.email}
          onChange={handleChange}
        />
        <span className="page-form__error-text">{errors.email}</span>
      </label>
      <label className="page-form__input-label" htmlFor="password">
        Пароль
        <input
          type="password"
          autoComplete="current-password"
          className="page-form__input"
          name="password"
          placeholder="Пароль"
          required
          minLength={8}
          maxLength={40}
          id="password"
          value={form.password}
          onChange={handleChange}
        />
        <span className="page-form__error-text">{errors.password}</span>
      </label>
    </>
  );
};

export default Inputs;
