import { createBrowserRouter } from "react-router-dom";
import {Login} from "../Pages/index"
import { PATHS } from "../constants/routes";

export const router = createBrowserRouter([
    {
        path: PATHS.login,
        element: <Login/>,
    }
])