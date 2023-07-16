import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Series from "../pages/Series";
import MovieDetail from "../pages/MovieDetail";
import SeriesDetail from "../pages/SeriesDetail";

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
    {
      path: "series",
      element: <Series />,
    },
    {
      path: "/series/:seriesId",
      element: <SeriesDetail />,
    },
  ]);
  return element;
}
