import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Movies.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Main from "../Main/Main";
import Preloader from "../Preloader/Preloader";
import { ERROR_MESSAGES } from "../../utils/constants";

import useSearch from "../../hooks/useSearch";
import getMovies from "../../utils/MoviesApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import {
  setLocalStorageData,
  getLocalStorageData,
  toggleHandler,
} from "./helpers";

function Movies({
  savedFilms,
  handleMovieButton,
  allMoviesFromMoviesServer,
  setAllMoviesFromMoviesServer,
}) {
  const location = useLocation();
  const { currentUser } = React.useContext(CurrentUserContext);
  const {
    findedMovies,
    isMessage,
    makeSearch,
    isShorts,
    setIsShorts,
    setIsMessage,
  } = useSearch(currentUser);

  const [isLoading, setIsLoading] = useState(false);

  const [matchedVsSavedMoviesArray, setMatchedVsSavedMoviesArray] = useState(
    []
  );
  const [lastSearchData, setLastSearchData] = useState({
    lastSearchRequest: "",
    lastFindedMovies: [],
    lastIsShortsOnly: false,
  });

  const [isInputDisable, setisInputDisable] = useState(false);

  useEffect(() => {
    setIsShorts(lastSearchData.lastIsShortsOnly);
    if (lastSearchData.lastFindedMovies.length) {
      makeSearch(
        lastSearchData.lastSearchRequest,
        lastSearchData.lastFindedMovies
      );
    }
  }, [lastSearchData]);

  useEffect(() => {
    const restoreLastSearchData = getLocalStorageData(
      "lastSearchDataLocalStorage"
    );
    if (
      restoreLastSearchData !== null &&
      typeof restoreLastSearchData === "object"
    ) {
      Object.entries(restoreLastSearchData).forEach(([key, value]) => {
        if (value) {
          setLastSearchData((prevState) => ({
            ...prevState,
            [key]: value,
          }));
        }
      });
    }
  }, [location]);

  const searchInAllMovies = (searchRequest) => {
    setisInputDisable(true);
    if (allMoviesFromMoviesServer.length === 0) {
      setIsLoading(true);
      getMovies()
        .then((res) => {
          setAllMoviesFromMoviesServer(res);
          makeSearch(searchRequest, res);
          setLocalStorageData("lastSearchDataLocalStorage", {
            lastSearchRequest: searchRequest,
            lastFindedMovies: res,
          });
        })
        .catch((err) => {
          setIsMessage(ERROR_MESSAGES.REQUEST_FAILURE);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
          setisInputDisable(false)
        });
    } else {
      makeSearch(searchRequest, allMoviesFromMoviesServer);
      setLocalStorageData("lastSearchDataLocalStorage", {
        lastSearchRequest: searchRequest,
        lastFindedMovies: allMoviesFromMoviesServer,
      });
      setisInputDisable(false);
    }
  };
  useEffect(() => {
    if (findedMovies.length) {
      const moviesArrayWithSavedFlags = findedMovies.map((movie) => ({
        ...movie,
        save: savedFilms.some((m) => m.movieId === movie.movieId),
      }));
      setMatchedVsSavedMoviesArray(moviesArrayWithSavedFlags);
    } else setMatchedVsSavedMoviesArray([]);
  }, [findedMovies, savedFilms, isShorts]);

  useEffect(() => {
    setIsMessage("");
  }, []);

  return (
    <>
      <Header />
      <Main>
        <SearchForm
          searchHandle={searchInAllMovies}
          isShorts={isShorts}
          setIsShorts={setIsShorts}
          isShortsHandler={toggleHandler}
          isInputDisable={isInputDisable}
        />
        <section className="movies">
          {isLoading ? (
            <Preloader />
          ) : (
            <MoviesCardList
              searchMessage={"Ничего не найдено"}
              moviesArray={matchedVsSavedMoviesArray}
              searchResultMessage={isMessage}
              handleMovieButton={handleMovieButton}
            />
          )}
        </section>
      </Main>
      <Footer />
    </>
  );
}

export default Movies;
