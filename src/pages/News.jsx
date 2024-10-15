import React, { useContext } from "react";
import PageBanner from "../components/PageBanner";
import { Link, useNavigate } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";
import { useTranslation } from "react-i18next";

export default function News() {
  const { apiControl } = useContext(ApiContext);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToDetail = (link) => {
    navigate(`/news/${link}`, {
      state: { link: link },
    });
  };

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
                    onClick={() => goToDetail(item.link)}
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
