import React, { Suspense, lazy } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "./components/Loader";
import News from "./pages/News";
import YachtDetail from "./pages/YachtDetail";
import { ToastContainer } from "react-toastify";
import NewsDetail from "./pages/NewsDetail";

// Lazy loading for pages
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const InclusivePage = lazy(() => import("./components/InclusivePage"));
const Yachts = lazy(() => import("./pages/Yachts"));
const Discover = lazy(() => import("./pages/Discover"));
const DiscoverDetail = lazy(() => import("./pages/DiscoverDetail"));

export default function App() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header changeDomLanguage={changeLanguage} />
          <ToastContainer autoClose={1000} />
          <Suspense fallback={<Loader>{t("loads.global_load")}</Loader>}>
            <InclusivePage />
          </Suspense>
          <Footer />
        </>
      ),
      children: [
        {
          path: "/",
          element: (
            <>
              <Home />
            </>
          ),
        },
        {
          path: "/about-us",
          element: (
            <>
              <AboutUs />
            </>
          ),
        },
        {
          path: "/yachts",
          element: (
            <>
              <Yachts />
            </>
          ),
        },
        {
          path: "/yacht/:link",
          element: (
            <>
              <YachtDetail />
            </>
          ),
        },
        {
          path: "/news",
          element: (
            <>
              <News />
            </>
          ),
        },
        {
          path: "/news/:link",
          element: (
            <>
              <NewsDetail />
            </>
          ),
        },
        {
          path: "/discover",
          element: (
            <>
              <Discover />
            </>
          ),
        },
        {
          path: "/discover/:link",
          element: (
            <>
              <DiscoverDetail />
            </>
          ),
        },
        {
          path: "/contact-us",
          element: (
            <>
              <ContactUs />
            </>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
