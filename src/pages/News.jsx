import React, { useContext, useEffect } from "react";
import PageBanner from "../components/PageBanner";
import { useNavigate } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";
import { useLanguage } from "../context/LanguageContext";

export default function News() {
  const { apiControl } = useContext(ApiContext);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { activeLanguage } = useLanguage();

  const goToDetail = (link, title) => {

    ReactGA.event({
      category: "Haberler",
      action: "Habere tıklandı",
      label: title,
    });


    navigate(`/news/${link}`, {
      state: { link: link },
    });
  };

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: `Haberler - ${activeLanguage.code.toUpperCase()}`,
    });
  }, [activeLanguage]);
  return (
    <>
      <PageBanner
        title={t("banners.news_banner")}
        breadpoint={[
          { title: t("banners.home"), link: "/" },
          { title: t("banners.news_banner") },
        ]}
      />

      <section>
        <div className="container">
          <div className="news-body list">
            {apiControl.news.value.map((item, key) => (
              <div className="news-item" key={key}>
                <img src={item.image} alt={item.title} />
                <div className="news-item-content">
                  <h3>{item.title}</h3>

                  <button
                    onClick={() => goToDetail(item.link, item.title)}
                    className="btn-style transparent-style"
                  >
                    {t("common.read_more")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
