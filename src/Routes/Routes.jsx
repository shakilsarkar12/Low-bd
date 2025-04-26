import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import MyBooking from "../pages/MyBooking/MyBooking";
import Error from "../pages/Error/Error";
import Loader from "../Components/Loader/Loader";
import LawersDetails from "../Components/LawersDetails/LawersDetails";
import LawyerDetailsError from "../pages/Error/LawyerDetailsError";
import Blog from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    loader: () => fetch("lawyers.json"),
    hydrateFallbackElement: <Loader></Loader>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        loader: () => fetch("lawyers.json"),
        hydrateFallbackElement: <Loader></Loader>,
        Component: Home,
      },
      {
        path: "/mybooking",
        loader: () => fetch("/lawyers.json"),
        hydrateFallbackElement: <Loader></Loader>,
        Component: MyBooking,
      },
      {
        path: "/lawers-details/:id",
        loader: () => fetch("/lawyers.json"),
        hydrateFallbackElement: <Loader />,
        Component: LawersDetails,
        errorElement: <LawyerDetailsError />,
      },
      {
        path: "/blogs",
        loader: () => fetch("/blogs.json"),
        hydrateFallbackElement: <Loader />,
        Component: Blog,
      },
      {
        path: "/contact",
        Component: Contact
      }
    ],
  },
  {
    path: "/lawers-details/:id",
    element: <LawyerDetailsError />,
  },
]);
