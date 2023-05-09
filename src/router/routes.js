import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home"
import { PATHS } from "../constants/routes";
import { Layout } from "../Components/Layout";
import Homepage from "../Pages/Homepage/Homepage";

export const router = createBrowserRouter([
    {
        path: PATHS.login,
        element: <Home/>,
    },
    {
        path: PATHS.login,
        element: <Layout />,
        children: [
          {
            path: PATHS.homepage,
            element: <Homepage/>,
          }
        ],
      },
])