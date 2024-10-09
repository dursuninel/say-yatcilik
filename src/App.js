import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import InclusivePage from "./components/InclusivePage";
import Boats from "./pages/Boats";
import Discover from "./pages/Discover";
import DiscoverDetail from "./pages/DiscoverDetail";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <InclusivePage />
          <Footer />
        </>
      ), // Ana sayfa başlığı
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
        {
          path: "/boats",
          element: <Boats />,
        },
        {
          path: "/discover",
          element: <Discover />,
        },
        {
          path: "/discover-detail",
          element: <DiscoverDetail />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
