import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Page/Home";
import { SkeletonTheme } from "react-loading-skeleton";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: (
          <div className="text-center h-[10vh] mt-40 text-5xl font-semibold">
            This is{" "}
            <span className="text-red-400 font-bold underline">home</span>
          </div>
        ),
      },
      {
        path: "/about",
        element: (
          <div className="text-center h-[10vh] mt-40 text-5xl font-semibold">
            This is{" "}
            <span className="text-red-400 font-bold underline">about</span>
          </div>
        ),
      },
      {
        path: "/services",
        element: (
          <div className="text-center h-[10vh] mt-40 text-5xl font-semibold">
            This is{" "}
            <span className="text-red-400 font-bold underline">services</span>
          </div>
        ),
      },
      {
        path: "/portfolio",
        element: (
          <div className="text-center h-[10vh] mt-40 text-5xl font-semibold">
            This is{" "}
            <span className="text-red-400 font-bold underline">portfolio</span>
          </div>
        ),
      },
      {
        path: "/contact",
        element: (
          <div className="text-center h-[10vh] mt-40 text-5xl font-semibold">
            This is{" "}
            <span className="text-red-400 font-bold underline">contact</span>
          </div>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <div className="text-center h-[10vh] mt-40 text-5xl font-semibold">
            This is{" "}
            <span className="text-red-400 font-bold underline">dashboard</span>
          </div>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SkeletonTheme baseColor="#A9A9A9" highlightColor="#6B728E">
      <RouterProvider router={router} />
    </SkeletonTheme>
  </React.StrictMode>
);
