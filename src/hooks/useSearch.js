import React, { useState, useEffect } from "react";
import { IMG__URL, ERROR_MESSAGES } from "../utils/constants";
import CurrentUserContext from "../contexts/CurrentUserContext";
import  { SHORT_MOVIE } from "../utils/constants";

const useSearch = () => {
  const currentUser = React.useContext(CurrentUserContext);
  const [findedMovies, setFindedMovies] = useState([]);
  const [isMessage, setIsMessage] = useState("");
  const [isShorts, setIsShorts] = useState(false);
  const [originalSearchResults, setOriginalSearchResults] = useState([]);

  const optimizeArray = (arr) =>
    arr.map((movie) => {
      const {
        nameRU = "",
        duration = "",
        searchRate = 0,
        image: {
          url: imageUrl = "",
          formats: { thumbnail: { url: thumbnail = "" } } = {},
        } = {},
        country,
        director,
        year,
        description,
        trailerLink,
        owner = currentUser._id,
        id: movieId = "",
        nameEN = "",
        created_at: createdAt = "",
      } = movie;
      const fullImagelUrl = IMG__URL + imageUrl;
      const fullThumbnailUrl = IMG__URL + thumbnail;

      return {
        movieId,
        nameRU,
        duration,
        image: fullImagelUrl,
        country,
        director,
        year,
        description,
        trailerLink,
        thumbnail: fullThumbnailUrl,
        nameEN,
        createdAt,
        searchRate,
        owner,
      };
    });

  const isArrayOptimized = (arr) => {
    if (arr.length === 0) return true;
    return arr[0].movieId && arr[0].nameRU && arr[0].image && arr[0].thumbnail;
  };

  const searchInArray = (req, arr) => {
    const wordsList = req.toLowerCase().match(/[а-яё]{1,}|[a-z]{1,}/g);
    const wordsListUniqObj = Array.from(new Set(wordsList));

    // function countFields(movie, word) {
    //   let count = 0;
    //   Object.keys(movie).forEach((prop) => {
    //     if (
    //       typeof movie[prop] === "string" &&
    //       movie[prop].toLowerCase().includes(word)
    //     ) {
    //       count += 1;
    //     }
    //   });
    //   return count;
    // }

    function countFields(movie, word) {
      return (movie.nameRU.toLowerCase().includes(word) || movie.nameEN.toLowerCase().includes(word)) ? 1 : 0;
    }

    const resultMoviesRangeArray = arr.map((movie) => {
      const searchRate = wordsListUniqObj.reduce(
        (acc, word) => acc + countFields(movie, word),
        0
      );
      return { ...movie, searchRate };
    });

    const finalSearchResult = resultMoviesRangeArray
      .filter((movie) => movie.searchRate > 0)
      .sort((a, b) => b.searchRate - a.searchRate);

    return finalSearchResult;
  };

  const makeSearch = (searchRequest, moviesArray) => {
    const moviesToSearch = isArrayOptimized(moviesArray)
      ? moviesArray
      : optimizeArray(moviesArray);

    let searchResult;

    if (searchRequest.trim() === "*") {
      searchResult = moviesToSearch;
    } else {
      searchResult = searchInArray(searchRequest, moviesToSearch);
    }

    setOriginalSearchResults(searchResult);

    if (isShorts) {
      searchResult = searchResult.filter((movie) => movie.duration <= SHORT_MOVIE);
    }

    if (searchResult.length === 0) {
      setFindedMovies([]);
      setIsMessage(ERROR_MESSAGES.MOVIE_NOT_FOUND);
    } else {
      setIsMessage("");
      setFindedMovies(searchResult);
    }
  };

  useEffect(() => {
    let updatedResults = [...originalSearchResults];
    if (isShorts) {
      updatedResults = updatedResults.filter((movie) => movie.duration <= SHORT_MOVIE);
    }

    if (updatedResults.length === 0) {
      setIsMessage(ERROR_MESSAGES.MOVIE_NOT_FOUND);
    } else {
      setIsMessage("");
    }

    setFindedMovies(updatedResults);
  }, [isShorts, originalSearchResults]);

  const resetSearch = () => {
    setFindedMovies([]);
    setIsMessage("");
    setIsShorts(false);
    setOriginalSearchResults([]);
  };

  return {
    makeSearch,
    findedMovies,
    setFindedMovies,
    isMessage,
    isShorts,
    setIsShorts,
    setIsMessage,
    resetSearch,
  };
};

export default useSearch;
