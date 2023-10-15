import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "../MainPage/MainPage";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

import ProtectedRoute from "../ProtetedRoute";
import IsLogginedProtectedRoute from "../IsLogginedProtectedRoute";

const MyRoutes = ({ savedFilms, saveFilmButton, auth }) => {
  const [allMoviesFromMoviesServer, setAllMoviesFromMoviesServer] = useState(
    []
  );

  return (
    <Routes>
      <Route
        path="/movies"
        element={
          <ProtectedRoute
            path="/movies"
            component={Movies}
            savedFilms={savedFilms}
            handleMovieButton={saveFilmButton}
            allMoviesFromMoviesServer={allMoviesFromMoviesServer}
            setAllMoviesFromMoviesServer={setAllMoviesFromMoviesServer}
          />
        }
      />
      <Route
        path="/saved-movies"
        element={
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            savedFilms={savedFilms}
            handleMovieButton={saveFilmButton}
          />
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute
            path="/profile"
            component={Profile}
            changeProfile={auth.changeProfile}
            logOut={auth.logOut}
          />
        }
      />
      <Route path="/" element={<MainPage />} />
      <Route
        path="/signin"
        element={
          <IsLogginedProtectedRoute
            component={Login}
            loginUser={auth.loginUser}
          />
        }
      />
      <Route
        path="/signup"
        element={
          <IsLogginedProtectedRoute
            component={Register}
            registerUser={auth.registerUser}
          />
        }
      />
      <Route
        path="*"
        element={
          <NotFoundPage lastPath={localStorage.getItem("lastValidPath")} />
        }
      />
    </Routes>
  );
};

export default MyRoutes;
