import React, { useEffect, useRef } from "react";
// import PropTypes from 'prop-types';
import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import useSearch from "../../hooks/useSearch";

function SavedMovies({ savedFilms, handleMovieButton }) {
  const {
    findedMovies,
    isMessage,
    makeSearch,
    isShorts,
    setIsShorts,
    setIsMessage,
  } = useSearch();

  const searchHandle = (searchRequest) => {
    makeSearch(searchRequest, savedFilms);
  };

  const isShortsHandler = () => {
    setIsShorts(!isShorts);
  };

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    makeSearch("*", savedFilms);
  }, [isShorts, savedFilms]);

  useEffect(() => {
    setIsMessage("");
  }, []);
  return (
    <>
      <Header />
      <Main>
        <SearchForm
          searchHandle={searchHandle}
          isShorts={isShorts}
          isShortsHandler={isShortsHandler}
        />
        <section className="saved-movies">
          <MoviesCardList
            moviesArray={
              findedMovies.length > 0 || isMessage ? findedMovies : savedFilms
            }
            searchMessage={isMessage}
            handleMovieButton={handleMovieButton}
          />
        </section>
      </Main>
      <Footer />
    </>
  );
}

export default SavedMovies;
