import { useState, useEffect } from 'react';
import mainApi from '../utils/MainApi';

function useFilm(currentUser) {
  const [savedFilms, setSavedFilms] = useState([]);

  const saveMovie = (movie) => {
    mainApi.postMovie(movie)
      .then((response) => {
        const newMovie = response.data;
        setSavedFilms((prevMovies) => [...prevMovies, newMovie]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteMovie = ({ _id }) => {
    mainApi.deleteMovie(_id)
      .then(() => {
        const updatedSavedMovies = savedFilms.filter((m) => m._id !== _id);
        setSavedFilms(updatedSavedMovies);
      })
      .catch((err) => console.error('Error deleting movie:', err));
  };

  const saveFilmButton = (movie) => {
    const movieSaved = savedFilms.find((m) => m.movieId === movie.movieId);
    if (!movieSaved) {
      saveMovie(movie);
    } else {
      deleteMovie(movieSaved);
    }
  };

  useEffect(() => {
    if (currentUser.isLoggedIn) {
      mainApi.getSavedMovies()
        .then((res) => {
            return setSavedFilms(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [currentUser.isLoggedIn]);

  return {
    savedFilms,
    setSavedFilms,
    saveFilmButton,
  };
}

export default useFilm;
