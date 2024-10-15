import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer>
        <div className="footer-main">
          <div className="container">
            <div className="footer-flex">
              <div>
                <p className="title">{t("global.phone")}</p>
                <ul>
                  <li>
                    <a href="tel:902124714477" title="0212 471 4477">
                      0212 471 4477
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="title">{t("global.email")}</p>
                <ul>
                  <li>
                    <a
                      href="mailto:info@sayyachting.com"
                      title="info@sayyachting.com"
                    >
                      info@sayyachting.com
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="title">{t("global.social")}</p>
                <ul className="social_media">
                  <li>
                    <a href="/">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="title">Konum</p>
                <ul>
                  <li>
                    <p>
                      Osmangazi mah. Mareşal Fevzi Çakmak Cad. No 42 Esenyurt /
                      İstanbul
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="footer-center">
              <div>
                <img
                  src={require("../assets/images/Logo.png")}
                  alt="Say Danışmanlık"
                />
              </div>
              <div>
                <ul>
                  <li>
                    <Link to="/" title={t("header.home")}>
                      {t("header.home")}
                    </Link>
                  </li>

                  <li>
                    <Link to="/about-us" title={t("header.about_us")}>
                      {t("header.about_us")}
                    </Link>
                  </li>

                  <li>
                    <Link to="/yachts" title={t("header.yachts")}>
                      {t("header.yachts")}
                    </Link>
                  </li>

                  <li>
                    <Link to="/news" title={t("header.news")}>
                      {t("header.news")}
                    </Link>
                  </li>

                  <li>
                    <Link to="/discover" title={t("header.discover")}>
                      {t("header.discover")}
                    </Link>
                  </li>

                  <li>
                    <Link to="/contact-us" title={t("header.contact_us")}>
                      {t("header.contact_us")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="copyright-flex">
              <p>{t("global.copyright", { year: new Date().getFullYear() })}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
