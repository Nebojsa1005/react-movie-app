import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Movies from "./pages/movies/Movies";
import MoviesList from "./pages/movies/MoviesList";
import Root from "./pages/Root";
import MovieDetails from "./pages/movies/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "movies",
        element: <Movies />,
        children: [
          {
            path: ":id",
            element: <MoviesList />,
          },
          { path: "view/:id", element: <MovieDetails /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
