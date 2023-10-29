import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button } from "@mui/material";

const LikeButton = ({
  likeButtonHandler,
}: {
  likeButtonHandler: () => void;
}) => {
  
  return (
    <Button
      size="large"
      onClick={likeButtonHandler}
      startIcon={<FavoriteBorderIcon />}
    ></Button>
  );
};

export default LikeButton;
