// https://developers.themoviedb.org/3/trending/get-trending - список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// https://developers.themoviedb.org/3/search/search-movies - поиск кинофильма по ключевому слову на странице фильмов.
// https://developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.

import axios from "axios";

const API_KEY = '2086b9cd65c949e0faad47adc4510f68';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';


async function getTrandingMovies() {
    const response = await axios.get(
        `trending/movie/day?api_key=${API_KEY}`
    );

    return await response.data;
}

export const getMovieDetails = async (movieId) => {
    const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
}

export const getMoviesByQuery = async (query) => {
    const response = await axios.get(`search/movie?api_key=${API_KEY}&query==${query}`);
    return response.data.results;
}

export const getActors = async (movieId) => {
    const response = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`);
    return response.data.results;
}

export default getTrandingMovies;