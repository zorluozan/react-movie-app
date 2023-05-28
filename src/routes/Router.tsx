import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MovieDetail from "../pages/MovieDetail";

export default function Router() {
  let element = useRoutes([
    // Main Routes
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "movies",
      element: <Movies />,
    },
    {
      path: "/movies/:movieId",
      element: <MovieDetail />,
    },
    // { path: "*", element: <Navigate to="/404" replace /> },
  ]);
  return element;
}
