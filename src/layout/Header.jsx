import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "react-i18next";

export default function Header({ changeDomLanguage }) {
  const [menu, setMenu] = useState(false);
  const { languages, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  const { pathname } = useLocation();

  useEffect(() => {
    setMenu(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <header>
      <div className="container-fluid">
        <div className="front-style">
          <div>
            <Link to={"/"}>
              <img
                src={require("../assets/images/header-logo.png")}
                width={110}
                alt="Say Danışmanlık"
              />
            </Link>
          </div>
          <div className="lang-main">
            <p className="lang-links">
              {languages.map((data, key) => (
                <span
                  key={key}
                  className="link"
                  onClick={() => {
                    changeLanguage(data.id);
                    changeDomLanguage(data.code);
                  }}
                >
                  {data.title}
                </span>
              ))}
              {/* <span>|</span> */}
              {/* <span className="link">EN</span> */}
            </p>

            <div>
              <nav role="navigation" onClick={() => setMenu(!menu)}>
                <div id="menuToggle">
                  <input type="checkbox" checked={menu} />

                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className={`header-links ${menu ? "open" : ""}`}>
        <div className="header-overlay" onClick={() => setMenu(false)} />
        <ul>
          <li>
            <Link to={``} title={t("header.home")}>
              {t("header.home")}
            </Link>
          </li>
          <li>
            <Link to={`/about-us`} title={t("header.about_us")}>
              {t("header.about_us")}
            </Link>
          </li>
          <li>
            <Link to={`/yachts`} title={t("header.yachts")}>
              {t("header.yachts")}
            </Link>
          </li>
          <li>
            <Link to={`/news`} title={t("header.news")}>
              {t("header.news")}
            </Link>
          </li>
          <li>
            <Link to={`/discover`} title={t("header.discover")}>
              {t("header.discover")}
            </Link>
          </li>
          <li>
            <Link to={`/contact-us`} title={t("header.contact_us")}>
              {t("header.contact_us")}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
