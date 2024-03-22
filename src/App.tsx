import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Video from "./pages/Video/Video";
import RootLayout from "./components/RootLayout/RootLayout";

const routers = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/video/:categoryId/:videoId",
                element: <Video />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={routers} />;
};

export default App;
