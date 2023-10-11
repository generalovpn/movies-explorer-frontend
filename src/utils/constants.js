const FILMS__URL = "https://api.nomoreparties.co/beatfilm-movies";
const API__URL = "https://api.movies.generalovpn.nomoreparties.sbs";
// const API__URL = "http://localhost:3000";
const IMG__URL = "https://api.nomoreparties.co/";
const ROUTE__LINKS = [
  "/movies",
  "/saved-movies",
  "/profile",
  "/signin",
  "/signup",
];

const ERROR_MESSAGES = {
  REQUEST_FAILURE:
    "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.",
  EMPTY_SEARCH_KEYWORD: "Нужно ввести ключевое слово",
  MOVIE_NOT_FOUND: "Ничего не найдено",
};

const FORM__ERR = {
  EMAIL: "Неверный адрес электронной почты",
  CONFIRM_PASSWORD: "Пароли не одинаковые",
};

const AUTHENTICATION__ERR = {
  REGISTRATION_SUCCESS: "Вы успешно зарегистрировались!",
  GREETING: "Здравствуйте!",
  SERVER_ERROR: "Ошибка в ответе с сервера",
  SUCCESS: "Аккаунт успешно изменён!",
  WRONG: "Что-то пошло не так! Попробуйте ещё раз.",
};

const REGEX = {
  EMAIL: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
  JWT_PATTERN: /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/,
};

export {
  API__URL,
  IMG__URL,
  FILMS__URL,
  ERROR_MESSAGES,
  REGEX,
  ROUTE__LINKS,
  AUTHENTICATION__ERR,
  FORM__ERR,
};
