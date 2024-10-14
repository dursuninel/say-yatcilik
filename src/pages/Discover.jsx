import React, { useContext } from "react";
import PageBanner from "../components/PageBanner";
import AboutSlide from "../components/AboutSlide";
import { Link, useNavigate } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";
import { useTranslation } from "react-i18next";

export default function Discover() {
  const { apiControl } = useContext(ApiContext);

  const navigate = useNavigate();

  const goToDetail = (link) => {
    navigate(`/discover/${link}`, {
      state: { link: link, prevPath: window.location.pathname },
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

                  <button onClick={() => goToDetail(data.link)}>
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
