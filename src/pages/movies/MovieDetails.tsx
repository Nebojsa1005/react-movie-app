import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getMovieById } from '../../services/movie.service';
import { Movie } from '../../types/intefaces/Movies.interface';
import LikeButton from '../../components/LikeButton';

const MovieDetails = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const params = useParams();

  useEffect(() => {
    (async () => {
      if (!params.id) return;
      const movie = await getMovieById(params.id);
      setMovie(prevMovie => { return prevMovie = movie});
    })()
  }, [params.id]);

  const likeButtonHandler = () => {

  }

  return (
    <>
      <h1>{movie?.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} />

      <LikeButton likeButtonHandler={likeButtonHandler} />
    </>
  );  
};

export default MovieDetails;
