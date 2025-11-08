import { createBrowserRouter } from "react-router";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./Layout";

import SignupForm from "./features/Auth/pages/SignupForm";
import SigninPage from "./features/Auth/pages/SigninPage";
import RestaurantPage from "./pages/RestaurantPage";

import FoodPage from "./pages/FoodPage";
import CartPage from "./pages/CartPage";
import { HomePage } from "./pages/HomePage";
import RestaurantDetailsPage from "./pages/RestaurantDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage />, errorElement: <ErrorBoundary /> },
      {
        path: "signup",
        element: <SignupForm />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "signin",
        element: <SigninPage />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "restaurant",
        element: <RestaurantPage />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "restaurant/:name",
        element: <RestaurantDetailsPage />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "food/:id",
        element: <FoodPage />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "cart",
        element: <CartPage />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);

export default router;
