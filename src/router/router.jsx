import { createBrowserRouter } from "react-router-dom";
import Regsiter from "../auth/Register";
import Login from "../auth/Login";
import Home from "../home/Home";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Regsiter />
        }
    ]
)

export default router;