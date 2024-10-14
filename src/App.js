import React, { Suspense, lazy } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "./components/Loader";
import News from "./pages/News";

// Lazy loading for pages
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const InclusivePage = lazy(() => import("./components/InclusivePage"));
const Boats = lazy(() => import("./pages/Boats"));
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
          path: "/boats",
          element: (
            <>
              <Boats />
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
