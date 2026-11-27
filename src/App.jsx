import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import ErrorPage from "./pages/error";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
