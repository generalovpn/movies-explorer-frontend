import { FILMS__URL, AUTHENTICATION__ERR } from "./constants";

const getMovies = () =>
  fetch(FILMS__URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${AUTHENTICATION__ERR.SERVER_ERROR} ${response.status}`);
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });

export default getMovies;
