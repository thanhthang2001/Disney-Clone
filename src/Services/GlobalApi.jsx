import axios from "axios";

const movieBaseUrl = " https://api.themoviedb.org/3";
const api_key = "4be2134356af610ba06670c4108966f6";
// https://api.themoviedb.org/3/trending/all/week?api_key=4be2134356af610ba06670c4108966f6
const getTrendingVideos = () => {
  return axios.get(`${movieBaseUrl}/trending/all/week?api_key=${api_key}`);
};
export default { getTrendingVideos };
