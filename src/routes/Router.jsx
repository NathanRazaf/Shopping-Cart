import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./MainPage.jsx";
import Home from "./Home.jsx";
import Store from "./Store.jsx";
import AboutUs from "./AboutUs.jsx";
import ErrorPage from "../components/ErrorPage.jsx";

const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage />,
            errorElement: <ErrorPage />,
            children: [
                {index: true, element: <Home />},
                {path: "store", element: <Store />},
                {path: "about", element: <AboutUs />}
            ]
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;