import { Outlet } from "react-router";
import MoviesListNavigation from "./MovieListNavigation";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth-context";

const Movies = () => {
  const { userData } = useContext(AuthContext);

  return (
    <>
      <MoviesListNavigation />
      <h1>Current User: {userData.email}</h1>
      <Outlet />
    </>
  );
};

export default Movies;
