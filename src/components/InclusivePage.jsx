import React, { useEffect, useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

export default function InclusivePage() {
  const { setPathName } = useContext(GlobalContext);
  const location = useLocation();

  useEffect(() => {
    

    if (location.pathname === "/") {
      setPathName("Say Danışmanlık");
    } else if (location.pathname === "/about-us") {
      setPathName("Hakkımızda");
    } else if (location.pathname === "/contact-us") {
      setPathName("İletişim");
    }
  }, [location, setPathName]);

  return <Outlet />;
}
