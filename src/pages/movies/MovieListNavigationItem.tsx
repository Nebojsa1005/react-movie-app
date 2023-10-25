import { NavLink } from "react-router-dom";
import { MovieNavigationItem } from "../../types/intefaces/MovieListNavigationItem";

const MovieListNavigationItem = ({ item }: { item: MovieNavigationItem }) => {
  return (
    <NavLink to={item.value}>
      {" "}
      {item.name}
    </NavLink>
  );
};

export default MovieListNavigationItem;
