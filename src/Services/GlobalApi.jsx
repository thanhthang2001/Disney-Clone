import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "4be2134356af610ba06670c4108966f6";
const movieByGeneresBaseUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=4be2134356af610ba06670c4108966f6";

// Function to get trending videos
const getTrendingVideos = () => {
  return axios.get(`${movieBaseUrl}/trending/all/week?api_key=${api_key}`);
};

// Function to get movies by genre ID
const getMovieByGenreId = (genreId) => {
  return axios.get(`${movieByGeneresBaseUrl}&with_genres=${genreId}`);
};

export default { getTrendingVideos, getMovieByGenreId };
