import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AllCard from "../Pages/All card/AllCard";
import Register from "../Auth/Register";
import LogIn from "../Auth/LogIn";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "/allCard",
                element: <AllCard/>,
                loader: ()=> fetch("http://localhost:5000/productsCount")
            },
            {
                path: "login",
                element: <LogIn/>,
            },
            {
                path: "/register",
                element: <Register/>,
            }
        ]
    },
]);

export default router;