import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";

export default function Footer() {
  const { t } = useTranslation();

  const { apiControl } = useContext(ApiContext);

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
                    <a
                      href={
                        apiControl.settings.value.phone
                          ? `tel:9${apiControl.settings.value?.phone.replaceAll(
                              " ",
                              ""
                            )}`
                          : "tel:"
                      }
                      title={apiControl.settings.value?.phone}
                    >
                      {apiControl.settings.value?.phone}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="title">{t("global.email")}</p>
                <ul>
                  <li>
                    <a
                      href={`mailto:${apiControl.settings.value?.email}`}
                      title={apiControl.settings.value?.email}
                    >
                      {apiControl.settings.value?.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="title">{t("global.social")}</p>
                <ul className="social_media">
                  <li>
                    <a
                      href="https://www.instagram.com/sayyachting?igsh=cDVkMW5tZHRqcDh6"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tr.linkedin.com/company/say-yachting"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="title">Konum</p>
                <ul>
                  <li>
                    <p>{apiControl.settings.value?.address}</p>
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

                  {/* <li>
                    <Link to="/news" title={t("header.news")}>
                      {t("header.news")}
                    </Link>
                  </li> */}

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
