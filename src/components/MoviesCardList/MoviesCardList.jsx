import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";

import ShowMovies from "./ShowMovies";

function MoviesCardList({ moviesArray, searchMessage, handleMovieButton }) {
  const location = useLocation();
  const isMovies = location.pathname === "/movies";
  const [visibleMovies, setVisibleMovies] = useState(3);
  const [displayState, setDisplayState] = useState("large");

  useEffect(() => {
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (window.innerWidth < 767) {
          setDisplayState("small");
        } else if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
          setDisplayState("middle");
        } else {
          setDisplayState("large");
        }
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMovies) {
      setVisibleMovies(moviesArray.length);
    } else {
      const displayStateConfig = {
        middle: 8,
        large: 12,
        default: 5,
      };
      setVisibleMovies(
        displayStateConfig[displayState] || displayStateConfig.default
      );
    }
  }, [displayState]);

  const handleAddMovies = () => {
    const moreMovies = displayState === "large" ? 3 : 2;
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
