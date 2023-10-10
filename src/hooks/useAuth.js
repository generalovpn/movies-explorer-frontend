import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import mainApi from "../utils/MainApi";
import { AUTHENTICATION__ERR, REGEX } from "../utils/constants";

const jwtTest = (jwt) => {
  const jwtPattern = REGEX.JWT_PATTERN;
  return jwtPattern.test(jwt.token);
};

const useAuth = (setCurrentUser) => {
  if (typeof setCurrentUser !== "function") {
    throw new Error("setCurrentUser is not a function");
  }

  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [info, setInfo] = useState({
    isOpen: false,
    infoMessage: "",
    infoType: false,
  });

  const showInfoMessage = (message, MessageType = false) => {
    setInfo({ isOpen: true, infoMessage: message, infoType: MessageType });
    setTimeout(
      () => setInfo({ isOpen: false, infoMessage: "", infoType: false }),
      5000
    );
  };

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      setToken(jwt);
      mainApi.setToken(jwt);
    }
  }, []);

  useEffect(() => {
    if (token) {
      mainApi
        .getUserData(token)
        .then((res) => {
          if (res.data._id && res.data.name && res.data.email) {
            setCurrentUser((prevState) => ({
              ...prevState,
              _id: res.data._id,
              name: res.data.name,
              email: res.data.email,
              isLoggedIn: true,
            }));
          } else {
            showInfoMessage(AUTHENTICATION__ERR.SERVER_ERROR);
          }
        })
        .catch(() => showInfoMessage(AUTHENTICATION__ERR.WRONG));
    }
  }, [token]);

  const registerUser = async ({ name, email, password }) => {
    try {
      const user = await mainApi.register(name, email, password);
      if (user._id && user.name && user.email) {
        showInfoMessage(AUTHENTICATION__ERR.REGISTRATION_SUCCESS, true);
        const authRes = await mainApi.authorize(email, password);
        if (authRes.token) {
          localStorage.setItem("jwt", authRes.token);
          mainApi.setToken(authRes.token);
          setCurrentUser((prevState) => ({
            ...prevState,
            _id: user._id,
            name: user.name,
            email: user.email,
            isLoggedIn: true,
          }));
          navigate("/movies");
        } else {
          showInfoMessage(AUTHENTICATION__ERR.SERVER_ERROR);
        }
      } else {
        throw new Error(AUTHENTICATION__ERR.SERVER_ERROR);
      }
    } catch (error) {
      console.error(error);
      showInfoMessage(AUTHENTICATION__ERR.WRONG);
    }
  };

  const loginUser = ({ email, password }) => {
    mainApi
      .authorize(email, password)
      .then((res) => {
        if (jwtTest(res)) {
          localStorage.setItem("jwt", res.token);
          mainApi.setToken(res.token);
        } else {
          showInfoMessage(AUTHENTICATION__ERR.SERVER_ERROR);
          throw new Error(AUTHENTICATION__ERR.SERVER_ERROR);
        }
        return mainApi.getUserData(res.token);
      })
      .then((res) => {
        setCurrentUser((prevState) => ({
          ...prevState,
          _id: res.data._id,
          name: res.data.name,
          email: res.data.email,
          isLoggedIn: true,
        }));
        showInfoMessage(`Привет ${res.data.name}!`, true);
        navigate("/movies");
      })
      .catch((err) => {
        console.log(err);
        showInfoMessage(AUTHENTICATION__ERR.WRONG);
      });
  };

  const changeProfile = async (user) => {
    try {
      const userData = await mainApi.patchUserData(user.name, user.email);
      if (userData.data._id && userData.data.name && userData.data.email) {
        setCurrentUser((prevState) => ({
          ...prevState,
          name: userData.data.name,
          email: userData.data.email,
        }));
        showInfoMessage(AUTHENTICATION__ERR.SUCCESS, true);
      } else {
        throw new Error(AUTHENTICATION__ERR.SERVER_ERROR);
      }
    } catch (error) {
      console.error(error);
      showInfoMessage(AUTHENTICATION__ERR.WRONG);
    }
  };

  const logOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("lastSearchDataLocalStorage");
    setToken("");
    setCurrentUser((prevState) => ({
      ...prevState,
      _id: "",
      name: "",
      email: "",
      isLoggedIn: false,
    }));
    navigate("/");
  };

  return {
    registerUser,
    loginUser,
    changeProfile,
    logOut,
    token,
    info,
  };
};

export default useAuth;
