import React, { useEffect, useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { useTranslation } from "react-i18next";

export default function InclusivePage() {
  const { setPathName } = useContext(GlobalContext);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    if (location.pathname === "/") {
      setPathName("Say Danışmanlık");
    } else if (location.pathname === "/about-us") {
      setPathName(`${t("banners.about_banner")} | Say Danışmanlık`);
    } else if (location.pathname === "/yachts") {
      setPathName(`${t("banners.yachts_banner")} | Say Danışmanlık`);
    } else if (location.pathname === "/news") {
      setPathName(`${t("banners.news_banner")} | Say Danışmanlık`);
    } else if (location.pathname === "/discover") {
      setPathName(`${t("banners.discover_banner")} | Say Danışmanlık`);
    } else if (location.pathname === "/contact-us") {
      setPathName(`${t("banners.contact_banner")} | Say Danışmanlık`);
    }
  }, [location, setPathName]);

  return <Outlet />;
}
