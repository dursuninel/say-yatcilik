import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import InclusivePage from "./components/InclusivePage";

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
          element: <InclusivePage pageTitle={"About Us"} />, // About Us sayfası başlığı
          children: [
            {
              path: "/about-us",
              element: <AboutUs />,
            },
          ],
        },
        {
          path: "/contact-us",
          element: <InclusivePage pageTitle={"Contact Us"} />, // Contact Us sayfası başlığı
          children: [
            {
              path: "/contact-us",
              element: <ContactUs />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
