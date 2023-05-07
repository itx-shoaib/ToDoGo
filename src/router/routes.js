import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home"
import { PATHS } from "../constants/routes";

export const router = createBrowserRouter([
    {
        path: PATHS.login,
        element: <Home/>,
    }
])