import { createBrowserRouter } from "react-router-dom";
import { regionLoader } from "./loader";
import FilterPage from "../pages/FilterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FilterPage />,
    loader: regionLoader,
  },
]);

export default router;
