import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Movies from './pages/movies/Movies';
import MoviesList from './pages/movies/MoviesList';
import Root from './pages/Root';
import MovieDetails from './pages/movies/MovieDetails';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import { AuthProvider } from './contexts/AuthContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'movies',
        element: <Movies />,
        children: [
          {
            index: true,
            element: <Navigate to="now_playing" />,
          },
          {
            path: ':id',
            element: <MoviesList />,
          },
          { path: 'view/:id', element: <MovieDetails /> },
        ],
      },
    ],
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: 'login',
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </>
  );
}

export default App;
