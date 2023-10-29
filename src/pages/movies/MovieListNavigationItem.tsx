import { NavLink } from "react-router-dom";
import { MovieNavigationItem } from "../../types/intefaces/MovieListNavigationItem";
import classes from './MovieListNavigationItem.module.css'

const MovieListNavigationItem = ({ item }: { item: MovieNavigationItem }) => {
  return (
    <NavLink className={classes.link} to={item.value}>
      {item.name}
    </NavLink>
  );
};

export default MovieListNavigationItem;
