import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/home/HomePage";
import ShoppingCartPage from "../pages/shopping-cart/ShoppingCartPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/shopping-cart", element: <ShoppingCartPage /> },
    ],
  },
]);
