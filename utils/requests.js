// const API_KEY = process.env.API_KEY;
const API_KEY = "0dce77902fffc56bd5c47e595dc9fbe4";

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action Movies",
    url: `/discover/movie/?api_key=${API_KEY}&with_genres=28`,
  },
  fetchRomance: {
    title: "Romance",
    url: `/discover/movie/?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie/?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchComedyMovies: {
    title: "Comedy Movies",
    url: `/discover/movie/?api_key=${API_KEY}&with_genres=35`,
  },
};
