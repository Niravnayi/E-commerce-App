import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgotPassword";
import AuthLayout from "./layouts/authLayout";
import Dashboard from "./layouts/mainLayout";

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("app"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "*",
    element: <div>Page not found</div>,
  },
]);

root.render(<RouterProvider router={router} />);
