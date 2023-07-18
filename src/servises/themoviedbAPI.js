// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма

import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '351363cde76d5d5ccd40418b50fed610';

async function themoviedbApi(q, page) {
  try {
    const response =
      await axios.get(`${BASE_URL}trending/all/day?api_key=${API_KEY}
    `);

    return await response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export default themoviedbApi;
