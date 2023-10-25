import { Card, CardActions, CardContent } from "@mui/material";
import { Movie } from "../../types/intefaces/Movies.interface";
import classes from "./MovieItem.module.css";
import LikeButton from "../../components/LikeButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ViewButton from "../../components/ViewButton";
import { useNavigate } from "react-router";

const MovieItem = ({ movie }: { movie: Movie }) => {
  const navigate = useNavigate();

  const likeButtonHandler = () => {
    console.log("stize");

    // add movie to user
  };

  const viewDetailsHandler = () => {
    navigate(`../view/${movie.id}`)
  };

  const ViewButtonIcon = {
    endIcon: <ArrowForwardIcon />,
  };
  return (
    <>
      <Card className={classes.card} sx={{ position: "relative" }}>
        <CardContent sx={{ marginBottom: "2rem" }}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />

          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </CardContent>
        <CardActions
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
          }}
        >
          <LikeButton likeButtonHandler={likeButtonHandler} />
          <ViewButton
            icon={ViewButtonIcon}
            viewDetailsHandler={viewDetailsHandler}
          >
            See Details
          </ViewButton>
        </CardActions>
      </Card>
    </>
  );
};

export default MovieItem;

export interface Icon {
  endIcon: JSX.Element;
}
