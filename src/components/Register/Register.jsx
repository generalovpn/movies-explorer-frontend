import React, { useEffect } from "react";
import PropTypes from "prop-types";
import useForm from "../../hooks/useForm";
import PageForm from "../PageForm/PageForm";
import Inputs from "./Inputs";

function Register({ registerUser }) {
  const { form, errors, isFormValid, handleChange, hardChangeIsFormValid } =
    useForm({
      name: "",
      email: "",
      password: "",
    });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    registerUser(form);
  };

  useEffect(() => {
    hardChangeIsFormValid();
  }, []);

  return (
    <PageForm
      pageTitle="Добро пожаловать!"
      pageName="register"
      submitButtonText="Зарегистрироваться"
      pageNavigationLink="/signin"
      pageNavigationLinkText="Войти"
      pageNavigationLinkComment="Уже зарегистрированы?"
      isFormValid={isFormValid}
      onSubmit={handleSubmit}
    >
      <Inputs form={form} handleChange={handleChange} errors={errors} />
    </PageForm>
  );
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
};

export default Register;
