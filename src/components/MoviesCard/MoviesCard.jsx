import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({
  movie,
  handleMovieButton,
}) {
  const location = useLocation();
  const savedMoviesPage = location.pathname === '/saved-movies';
  const durationInHours = (min) => `${Math.floor(min / 60)}ч ${min % 60}м`;
  const durationMovie = durationInHours(movie.duration);

  return (
    <div className="movies-card">
      <a
        href={movie.trailerLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={movie.image}
          alt={movie.nameRU}
          className="movies-card__img"
        />
      </a>
      <div className='movies-card__align'>
        <h2 className="movies-card__title">
          {movie.nameRU}
        </h2>
        <p className="movies-card__time">{durationMovie}</p>
      </div>
      <input
        type="button"
        className={`movies-card__save-btn
        ${(movie.save && !savedMoviesPage) ? 'movies-card__save-btn_type_active' : ''}
        ${savedMoviesPage ? 'movies-card__save-btn_type_delete' : ''}`}
        name="movies-card__save-btn"
        aria-label="Сохранить фильм"
        value=""
        onClick={() => {
          handleMovieButton(movie);
        }}
      />
    </div>
  );
}


export default MoviesCard;
