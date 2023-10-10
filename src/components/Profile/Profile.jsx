import React, { useState, useRef, useEffect } from "react";
import "./Profile.css";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import useForm from "../../hooks/useForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import DefaultInputs from "./DefaultInputs";
import EditButton from "./EditButton";

function Profile({ changeProfile, logOut }) {

  const currentUser = React.useContext(CurrentUserContext);
  const { form, setForm, errors, handleChange, isFormValid } = useForm({
    name: currentUser.name,
    email: currentUser.email,
  });
  const [isEdit, setIsEdit] = useState(false);
  const refName = useRef();

  const isEditHandler = () => {
    setIsEdit(!isEdit);
    refName.current.focus();
  };

  const submitProfileHandler = (e) => {
    e.preventDefault();
    changeProfile(form);
  };

  useEffect(() => {
    setForm((prevState) => ({
      ...prevState,
      name: currentUser.name,
      email: currentUser.email,
    }));
    setIsEdit(false);
  }, [currentUser]);


  return (
    <>
      <Header />
      <main className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form
          className="profile__form"
          onSubmit={submitProfileHandler}
          id="profileForm"
        >
          <DefaultInputs
            isEdit={isEdit}
            refName={refName}
            form={form}
            handleChange={handleChange}
            errors={errors}
          />
        </form>
        <EditButton
          isEdit={isEdit}
          logOut={logOut}
          isEditHandler={isEditHandler}
          isFormValid={isFormValid}
        />
      </main>
    </>
  );
}

Profile.propTypes = {
  changeProfile: PropTypes.func,
  logOut: PropTypes.func,
};

Profile.defaultProps = {
  changeProfile: () => {},
  logOut: () => {},
};

export default Profile;
