import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getMovies } from "../../store/movie-slice";
import { Movie } from "../../types/intefaces/Movies.interface";
import MovieItem from "./MovieItem";
import classes from "./MoviesList.module.css";

const MoviesList = () => {
  const { id = "now_playing" } = useParams();
  const movies = useSelector((state: any) => state.movies.movies);
  const dispatch = useDispatch();

  useEffect(() => { 
    if (!id) return;
    dispatch(getMovies(id));
  }, [id, dispatch]);

  const movieList =
    movies.results && movies.results.length > 0 ? (
      movies.results.map((movie: Movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))
    ) : (
      <div>No Data</div>
    );

  return (
    <>
      <h1>Movies list</h1>
      <div className={classes["movie-list"]}>{movieList}</div>
    </>
  );
};

export default MoviesList;
