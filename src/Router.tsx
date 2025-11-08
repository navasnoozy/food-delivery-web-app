// router.tsx
import { createBrowserRouter } from "react-router";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./Layout";
import { HomePage } from "./pages/Home/HomePage";
import SignupForm from "./features/Auth/pages/SignupForm";
import SigninPage from "./features/Auth/pages/SigninPage";
import RestaurantPage from "./pages/Restaurant/RestaurantPage";



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
        path: "signin",
        element: <SigninPage />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);

export default router;
