import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/home/HomePage";
import ShoppingCartPage from "../pages/shopping-cart/ShoppingCartPage";
import PaymentSuccessfullyPage from "../pages/payment-successfully/PaymentSuccessfullyPage";
import ProductDetailPage from "../pages/product/id/ProductDetailPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/shopping-cart", element: <ShoppingCartPage /> },
      { path: "/product/:id", element: <ProductDetailPage /> },
      { path: "/payment/successfully", element: <PaymentSuccessfullyPage /> },
    ],
  },
]);
