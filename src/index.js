import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FAQ from "./components/FAQ";
import Programs from "./components/Programs";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "faq",
    element: <FAQ />,
  },

  {
    path: "programs",
    element: <Programs />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
