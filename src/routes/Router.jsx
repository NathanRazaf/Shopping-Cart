import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./MainPage.jsx";
import Home from "./Home.jsx";
import Store from "./Store.jsx";
import AboutUs from "./AboutUs.jsx";
import ErrorPage from "../components/ErrorPage.jsx";
import ProductDetails from "./ProductDetails.jsx";

const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage />,
            errorElement: <ErrorPage />,
            children: [
                {index: true, element: <Home />},
                {path: "store", element: <Store />,
                    children: [
                        {path:":category", element: <Store />},
                    ]
                },
                {path:"store/:category/:id", element: <ProductDetails />},
                {path: "about", element: <AboutUs />}
            ]
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;