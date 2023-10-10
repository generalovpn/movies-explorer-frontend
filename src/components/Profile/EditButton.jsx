import React from "react";

const EditButton = ({ isEdit, logOut, isEditHandler, isFormValid }) => {
  return (
    <>
      {!isEdit ? (
        <div className="profile__buttons-container">
          <input
            type="button"
            className="profile__link"
            name="profile-change"
            aria-label="Редактировать профайл"
            value="Редактировать"
            onClick={isEditHandler}
          />
          <input
            type="button"
            className="profile__link profile__link_color_red"
            name="profile-logout"
            aria-label="Выйти из аккаунта"
            value="Выйти из аккаунта"
            onClick={logOut}
          />
        </div>
      ) : (
        <input
          type="submit"
          form="profileForm"
          className={`profile__button ${
            !isFormValid ? "profile__button_disabled" : ""
          }`}
          name="profile-submit"
          aria-label="Сохранить изменения"
          value="Сохранить"
          disabled={!isFormValid}
        />
      )}
    </>
  );
};

export default EditButton;
