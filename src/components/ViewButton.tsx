import { Button } from "@mui/material";
import { Icon } from "../pages/movies/MovieItem";

const ViewButton = ({ children, icon, viewDetailsHandler }: { icon: Icon; children: any, viewDetailsHandler: () => void }) => {
  return (
    <>
      <Button onClick={viewDetailsHandler} {...icon}>{children}</Button>
    </>
  );
};

export default ViewButton;
