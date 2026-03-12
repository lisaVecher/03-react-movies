import axios from "axios";
import type { Movie } from "../types/movie";

interface FetchMovieService {
  results: Movie[];
}

export const fetchMovies = async (movieName: string): Promise<Movie[]> => {
  const response = await axios.get<FetchMovieService>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query: movieName,
        include_adult: false,
        language: "en-US",
        page: 1,
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    },
  );

  return response.data.results;
};
