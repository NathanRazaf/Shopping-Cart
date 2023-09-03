import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./MainPage.jsx";
import Home from "./Home.jsx";
import Store from "./Store.jsx";
import AboutUs from "./AboutUs.jsx";
import ErrorPage from "../components/ErrorPage.jsx";
import Cart from "./Cart.jsx";
import ProductDetails from "./ProductDetails.jsx";
import {CartProvider} from "./CartContext.jsx";

const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage />,
            errorElement: <ErrorPage />,
            children: [
                {index: true, element: <Home />},
                {path: "store/cart", element: <Cart />},   // Moved up for correct matching
                {path:"store/:category/:id", element: <ProductDetails />},
                {path: "store", element: <Store />,
                    children: [
                        {path:":category", element: <Store />}   // Consider changing this to a unique category page.
                    ]
                },
                {path: "about", element: <AboutUs />}
            ]
        },
    ]);

    return (
        <CartProvider>
            <RouterProvider router={router} />
        </CartProvider>
    );
};

export default Router;