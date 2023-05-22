import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";

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
    // { path: "*", element: <Navigate to="/404" replace /> },
  ]);
  return element;
}
