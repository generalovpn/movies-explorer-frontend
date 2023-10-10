import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';
import './PageForm.css';

function PageForm({
  pageName,
  pageTitle,
  submitButtonText,
  onSubmit,
  children,
  isFormValid,
  pageNavigationLink,
  pageNavigationLinkText,
  pageNavigationLinkComment,
}) {
  return (
    <main className={`page-form page-form_name_${pageName}`}>
      <Link to="/">
        <img src={logo} alt="Логотип" className="page-form__logo" />
      </Link>
      <div className="page-form__container">
        <h1 className="page-form__title">
          {pageTitle}
        </h1>
        <form
          className="page-form__form"
          onSubmit={onSubmit}
          id={pageName}
        >
          {children}
        <input
          type="submit"
          form={pageName}
          className={`page-form__btn ${!isFormValid ? 'page-form__btn_disabled' : ''}`}
          name="page-form__submit"
          value={submitButtonText}
          disabled={!isFormValid}
        />
        </form>
        <nav className="page-form__navigation">
          <span className="page-form__link-text">
            {pageNavigationLinkComment}
          </span>
          <NavLink
            to={pageNavigationLink}
            className="page-form__link"
          >
            {pageNavigationLinkText}
          </NavLink>
        </nav>
      </div>
    </main>
  );
}

PageForm.propTypes = {
  pageName: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
  submitButtonText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isFormValid: PropTypes.bool,
  pageNavigationLink: PropTypes.string.isRequired,
  pageNavigationLinkText: PropTypes.string.isRequired,
  pageNavigationLinkComment: PropTypes.string.isRequired,
};

PageForm.defaultProps = {
  isFormValid: false,
};

export default PageForm;
