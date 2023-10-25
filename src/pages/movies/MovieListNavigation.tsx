import { MovieListNavigationItems } from "../../types/constants/MovieListNavigationItems";
import MovieListNavigationItem from "./MovieListNavigationItem";

const MoviesListNavigation = () => {
  const navigationList = MovieListNavigationItems.map(item => <MovieListNavigationItem key={item.value} item={item} /> )

  return (
    <>
      {navigationList}      
    </>
  ); 
};

export default MoviesListNavigation