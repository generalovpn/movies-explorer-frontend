import React from "react";

const SearchInput = ({form, handleChange, handleFocus, searchError}) => {
  return (
    <>
      <label className="search__label">
        <input
          type="text"
          className="search__input"
          name="search"
          placeholder="Фильм"
          maxLength={50}
          value={form.search}
          onChange={handleChange}
          onFocus={handleFocus}
        />
        <span className="search__error">{searchError}</span>
      </label>
      <input
        type="submit"
        className="search__btn"
        name="movie-search-submit"
        aria-label="Поиск фильма"
        value=""
      />
    </>
  );
};

export default SearchInput;
