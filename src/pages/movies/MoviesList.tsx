import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMoviesList } from "../../services/movie.service";
import { Movie, Movies } from "../../types/intefaces/Movies.interface";
import MovieItem from "./MovieItem";
import classes from "./MoviesList.module.css";

const MoviesList = () => {
  const { id } = useParams();

  const [movies, setMovies] = useState<Movies | null>(null);

  useEffect(() => {
    (async () => {
      if (!id) return;

      const movies = await getMoviesList(id);
      setMovies((prevMovies) => (prevMovies = movies));
    })();
  }, [id]);

  const movieList = movies ? (
    movies.results.map((movie: Movie) => (
      <MovieItem key={movie.id} movie={movie} />
    ))
  ) : (
    <div>No Data</div>
  );

  return (
    <>
      <h1>movies list</h1>
      <div className={classes["movie-list"]}>{movieList}</div>
    </>
  );
};

export default MoviesList;
