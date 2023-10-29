import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import LikeButton from "../../components/LikeButton";
import { getMovieById } from "../../store/movie-slice";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state: any) => state.movies.movie);

  useEffect(() => {
    dispatch(getMovieById(id));
  }, [id]);

  const likeButtonHandler = () => {};

  return (
    <>
      <h1>{movie?.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} />

      <LikeButton likeButtonHandler={likeButtonHandler} />
    </>
  );
};

export default MovieDetails;
