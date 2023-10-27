import { Outlet } from "react-router";
import MoviesListNavigation from "./MovieListNavigation";
import { useAuthState } from "../../contexts/AuthContext";

const Movies = () => {
  const { email, password } = useAuthState()
  console.log(email, password);
  
  return (
    <>
      { email } { password }
      <MoviesListNavigation />

      <Outlet />
    </>
  );
};

export default Movies;
