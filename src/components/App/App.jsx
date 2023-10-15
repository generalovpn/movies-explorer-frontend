import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Info from "../Info/Info";
import useAuth from "../../hooks/useAuth";
import useFilm from "../../hooks/useFilm";
import MyRoutes from "./MyRoutes";

import CurrentUserContext from "../../contexts/CurrentUserContext";

import { ROUTE__LINKS } from "../../utils/constants";
import "./App.css";

function App() {
  const location = useLocation();

  const [user, setUser] = useState({
    _id: "",
    name: "",
    email: "",
    isLoggedIn: false,
  });

  const authData = useAuth(setUser);
  const { savedFilms, saveFilmButton } = useFilm(user);

  
  useEffect(() => {
    console.log(savedFilms, 'savedFilms')
    console.log(user, 'user')
  }, [savedFilms])

  useEffect(() => {
    if (ROUTE__LINKS.includes(location.pathname)) {
      localStorage.setItem("lastValidPath", location.pathname);
    }
  }, [location]);

  return (
    <CurrentUserContext.Provider value={user}>
      <div className="body">
        <div className="page">
          <MyRoutes
            savedFilms={savedFilms}
            saveFilmButton={saveFilmButton}
            auth={authData}
          />
        </div>
        <Info {...authData.info} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
