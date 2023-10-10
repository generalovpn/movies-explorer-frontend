import React from "react";

const DefaultInputs = ({isEdit, refName, form, handleChange, errors}) => {
  return (
    <>
      <label
        className={`profile__input-label ${
          isEdit ? "profile__input-label_type_edit" : ""
        }`}
        htmlFor="name"
      >
        Имя
        <input
          ref={refName}
          type="text"
          className={`profile__input ${
            isEdit ? "profile__input_type_edit" : ""
          }`}
          name="name"
          placeholder="Имя"
          required
          minLength={2}
          maxLength={30}
          id="profile-name-input"
          disabled={!isEdit}
          value={form.name}
          onChange={handleChange}
        />
        <span className="profile__input-error profile__input-error_type_name">
          {errors.name}
        </span>
      </label>

      <label
            className={`profile__input-label ${isEdit ? 'profile__input-label_type_edit' : ''}`}
            htmlFor="email"
          >
            E-mail
            <input
              type="email"
              className={`profile__input ${isEdit ? 'profile__input_type_edit' : ''}`}
              name="email"
              placeholder="E-mail"
              required
              minLength={2}
              maxLength={30}
              id="profile-email-input"
              disabled={!isEdit}
              value={form.email}
              onChange={handleChange}
            />
            <span className="profile__input-error profile__input-error_type_email">
              {errors.email}
            </span>
          </label>
    </>
  );
};

export default DefaultInputs;
