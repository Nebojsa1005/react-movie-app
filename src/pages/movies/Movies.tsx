import { Outlet } from "react-router";
import MoviesListNavigation from "./MovieListNavigation";

const Movies = () => {
  return (
    <>
      <MoviesListNavigation />

      <Outlet />
    </>
  );
};

export default Movies;
