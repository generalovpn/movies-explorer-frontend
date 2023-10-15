import React, { useEffect, useState } from "react";
import "./SearchForm.css";
import useForm from "../../hooks/useForm";
import PropTypes from "prop-types";
import { ERROR_MESSAGES } from "../../utils/constants";
import SearchInput from "./SearchInput";
import CheckBox from "./CheckBox";

function SearchForm({
  searchHandle,
  isShorts,
  setIsShorts,
  isShortsHandler,
  setResetMoviesSearch,
  isInputDisable,
  search,
}) {
  const getFromLocal = search
    ? ""
    : JSON.parse(localStorage.getItem("lastSearchDataLocalStorage"))
        ?.lastSearchRequest || "";
  const { form, handleChange, handleFocus, isActiveInput, setForm } = useForm({
    search: getFromLocal,
    searchError: "",
  });

  console.log(isInputDisable, 'this is condition in searchForm')

  const [searchError, setSearchError] = useState("");

  const searchSubmit = (e) => {
    e.preventDefault();
    if (form.search.length === 0) {
      setSearchError(ERROR_MESSAGES.EMPTY_SEARCH_KEYWORD);
      return;
    } else {
      setSearchError("");
      searchHandle(form.search);
    }
  };

  useEffect(() => {
    setForm({ search: getFromLocal });
  }, [getFromLocal]);

  useEffect(() => {
    if (isActiveInput.name && form.search === "") setResetMoviesSearch(true);
    else setResetMoviesSearch(false);
  }, [form.search]);

  const togHandler = () => {
    searchHandle(form.search);
    isShortsHandler(setIsShorts, isShorts);
  };

  return (
    <section className="search">
      <form className="search__form" onSubmit={searchSubmit}>
        <SearchInput
          form={form}
          handleChange={handleChange}
          handleFocus={handleFocus}
          searchError={searchError}
          isInputDisable={isInputDisable}
        />
      </form>
      <CheckBox isShorts={isShorts} isShortsHandler={togHandler} />
    </section>
  );
}

SearchForm.propTypes = {
  searchHandle: PropTypes.func.isRequired,
  isShorts: PropTypes.bool.isRequired,
  isShortsHandler: PropTypes.func.isRequired,
  setResetMoviesSearch: PropTypes.func,
  lastRequestSearch: PropTypes.string,
};

SearchForm.defaultProps = {
  setResetMoviesSearch: () => {},
  lastRequestSearch: "",
};

export default SearchForm;
