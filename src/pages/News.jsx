import React, { useContext } from "react";
import PageBanner from "../components/PageBanner";
import { Link } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";
import { useTranslation } from "react-i18next";

export default function News() {
  const { apiControl } = useContext(ApiContext);
  const { t } = useTranslation();

  return (
    <>
      <PageBanner
        title={t("banners.news_banner")}
        breadpoint={[
          { title: t("banners.home"), link: "/" },
          { title: t("banners.news_banner") },
        ]}
      />
      ;{/* Haberler */}
      <section>
        <div className="container">
          <div className="news-body list">
            {apiControl.news.value.map((item, key) => (
              <div className="news-item" key={key}>
                <img src={item.image} alt={item.title} />
                <div className="news-item-content">
                  <h3>{item.title}</h3>

                  <Link
                    to={`/news/${item.link}`}
                    className="btn-style transparent-style"
                  >
                    {t("common.read_more")}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
