import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/css/App.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import InclusivePage from "./components/InclusivePage";
import { GlobalProvider } from "./context/GlobalContext";
import Header from "./layout/Header";
import Footer from "./layout/Footer";



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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalProvider>
    <RouterProvider router={router} />
  </GlobalProvider>
);
