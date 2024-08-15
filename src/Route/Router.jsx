import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AllCard from "../Pages/All card/AllCard";

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
            }
        ]
    },
]);

export default router;