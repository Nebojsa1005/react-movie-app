import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import AuthContextProvider from "./contexts/auth-provider";
import Root from "./pages/Root";
import Register from "./pages/auth/Register";
import MovieDetails from "./pages/movies/MovieDetails";
import Movies from "./pages/movies/Movies";
import MoviesList from "./pages/movies/MoviesList";
import { store } from "./store";
import { Provider } from "react-redux";

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
            index: true,
            element: <Navigate to="now_playing" />,
          },
          {
            path: ":id",
            element: <MoviesList />,
          },
          { path: "view/:id", element: <MovieDetails /> },
        ],
      },
    ],
  },
  {
    path: "register",
    element: <Register />,
  },
]);

function App() {
  return (
    <Provider store={store}>
    <AuthContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthContextProvider>
    </Provider>
  );
}

export default App;
