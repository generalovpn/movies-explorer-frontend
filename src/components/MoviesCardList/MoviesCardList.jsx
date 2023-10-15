import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";

import ShowMovies from "./ShowMovies";
import { useWindowSize } from "../../hooks/useWindowSize";

import {
  L_CARDS_ADD,
  MS_CARDS_ADD,
  S_CARDS_QTY,
  L_CARDS_QTY,
  M_CARDS_QTY,
} from "../../utils/constants";

function MoviesCardList({ moviesArray, searchMessage, handleMovieButton }) {
  const location = useLocation();
  const isMovies = location.pathname === "/movies";
  const [visibleMovies, setVisibleMovies] = useState(3);
  const [displayState, setDisplayState] = useState("large");
  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 767) {
      setDisplayState("small");
    } else if (width >= 768 && width <= 1279) {
      setDisplayState("middle");
    } else {
      setDisplayState("large");
    }
  }, [width]);

  useEffect(() => {
    if (!isMovies) {
      setVisibleMovies(moviesArray.length);
    } else {
      const displayStateConfig = {
        middle: M_CARDS_QTY,
        large: L_CARDS_QTY,
        default: S_CARDS_QTY,
      };
      setVisibleMovies(
        displayStateConfig[displayState] || displayStateConfig.default
      );
    }
  }, [displayState, moviesArray]);

  const handleAddMovies = () => {
    const moreMovies = displayState === "large" ? L_CARDS_ADD : MS_CARDS_ADD;
    setVisibleMovies((prevDisplayedMovies) => prevDisplayedMovies + moreMovies);
  };

  const moviesToShow = moviesArray.slice(0, visibleMovies);

  return (
    <div className="movies-card-list">
      <div className="movies-card-list__container">
        <ShowMovies
          moviesArray={moviesArray}
          visibleMovies={visibleMovies}
          searchMessage={searchMessage}
          handleMovieButton={handleMovieButton}
        />
      </div>

      {isMovies &&
        moviesToShow.length !== moviesArray.length &&
        moviesToShow.length > 0 && (
          <button
            className="movies-card-list__btn"
            type="button"
            onClick={handleAddMovies}
          >
            Ещё
          </button>
        )}
    </div>
  );
}

export default MoviesCardList;
