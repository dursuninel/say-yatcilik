import React, { useContext, useEffect } from "react";
import PageBanner from "../components/PageBanner";
import { useNavigate } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";
import { useLanguage } from "../context/LanguageContext";

export default function Discover() {
  const { apiControl } = useContext(ApiContext);

  const { activeLanguage } = useLanguage();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: `Keşfet - ${activeLanguage.code.toUpperCase()}`,
    });
  }, [activeLanguage]);

  const navigate = useNavigate();

  const goToDetail = (link, title) => {
    ReactGA.event({
      category: "Blog",
      action: "Bloğa tıklandı",
      label: title,
    });

    navigate(`/discover/${link}`, {
      state: { link: link },
    });
  };
  const { t } = useTranslation();
  return (
    <>
      <PageBanner
        title={t("banners.discover_banner")}
        breadpoint={[
          { title: t("banners.home"), link: "/" },
          { title: t("banners.discover_banner") },
        ]}
      />

      {/* Keşfet */}
      <section>
        <div className="container">
          <div className="announcements_main">
            {apiControl.discover.value.map((data, key) => (
              <div className="item" key={key}>
                <img src={data.image} alt={data.title} />
                <div className="item_content">
                  <span className="category">{data.category}</span>

                  <h3>{data.title}</h3>

                  <div
                    className="blog_detail"
                    dangerouslySetInnerHTML={{ __html: data.content }}
                  />

                  <button onClick={() => goToDetail(data.link, data.title)}>
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
