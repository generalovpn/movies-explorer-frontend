import React from "react";
import MoviesCard from '../MoviesCard/MoviesCard';

const ShowMovies = ({moviesArray, visibleMovies, searchMessage, handleMovieButton }) => {
  const moviesToShow = moviesArray.slice(0, visibleMovies);

  const isInLocal = JSON.parse(localStorage.getItem('lastSearchDataLocalStorage'))
  return (
    <>
      {moviesToShow.length ? (
        moviesToShow.map((m) => (
          <MoviesCard
            key={m.movieId}
            movie={m}
            handleMovieButton={handleMovieButton}
          />
        ))
      ) : (
        <div className="movies-card-list__text-container">
          <p className="movies-card-list__text">
            {isInLocal !== null && searchMessage}
          </p>
        </div>
      )}
    </>
  );
};

export default ShowMovies;
