import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../types/intefaces/Movies.interface";
import * as movieService from "../services/movie.service";

interface InitialState {
  movies: Movie[];
  movie: Movie | null
  favoriteMovies: Movie[];
}

const initialState: InitialState = {
  movies: [],
  movie: null,
  favoriteMovies: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMoviesList(state, { payload }) {
      state.movies = payload;
    },
    setMovieById(state, { payload }) {
      state.movie = payload
    }
  },
});

export const getMovies = (id: string) => {
  return async (dispatch: any) => {
    const movies = await movieService.getMoviesList(id);
    dispatch(movieActions.setMoviesList(movies));
  };
};

export const getMovieById = (id : number) => {
  return async(dispatch: any) => {
    const movie = await movieService.getMovieById(id)
    dispatch(movieActions.setMovieById(movie))
  }
}

export const movieActions = movieSlice.actions;

export default movieSlice.reducer;
