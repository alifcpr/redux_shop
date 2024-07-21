import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Suspense, lazy } from "react";
import { Box, CircularProgress } from "@mui/material";

const HomePage = lazy(() => import("../pages/home/HomePage"));

const ShoppingCartPage = lazy(
  () => import("../pages/shopping-cart/ShoppingCartPage")
);
const ProductDetailPage = lazy(
  () => import("../pages/payment-successfully/PaymentSuccessfullyPage")
);
const PaymentSuccessfullyPage = lazy(
  () => import("../pages/product/id/ProductDetailPage")
);

const PageLoading = () => {
  return (
    <Box
      component="div"
      sx={(theme) => ({
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.secondary.main
            : theme.palette.primary.main,
      })}
      className="min-w-full flex opacity-70 items-center justify-center min-h-screen absolute top-0 left-0 z-[9999]"
    >
      <CircularProgress color="warning" />
    </Box>
  );
};

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<PageLoading />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/shopping-cart",
        element: (
          <Suspense fallback={<PageLoading />}>
            <ShoppingCartPage />
          </Suspense>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <Suspense fallback={<PageLoading />}>
            <ProductDetailPage />
          </Suspense>
        ),
      },
      {
        path: "/payment/successfully",
        element: (
          <Suspense fallback={<PageLoading />}>
            <PaymentSuccessfullyPage />
          </Suspense>
        ),
      },
    ],
  },
]);
