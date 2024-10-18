import React, { useContext, useEffect, useState } from "react";
import PageBanner from "../components/PageBanner";
import { useLocation, useNavigate } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";
import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";

export default function NewsDetail() {
  const { apiControl } = useContext(ApiContext);

  const { state } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [load, setLoad] = useState(true);
  const [data, setData] = useState(null);

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
    setData(null);

    let datas = apiControl.news.value.find((item) => item.link === state?.link);

    if (datas) {
      setData(apiControl.news.value.find((item) => item.link === state.link));
      setLoad(false);
    } else {
      navigate("/news");
    }
  }, [state]);

  return (
    <>
      {load === false && data ? (
        <>
          <PageBanner
            title={data.title}
            breadpoint={[
              { title: t("banners.home"), link: "/" },
              { title: `/ ${t("banners.news_banner")}`, link: "/news" },
              {
                title: data.title,
              },
            ]}
            image={data.image}
            content={<div dangerouslySetInnerHTML={{ __html: data.content }} />}
          />

          <section>
            <div className="container">
              <div className="news-body list">
                {apiControl.news.value
                  .filter((item) => item.link !== data.link)
                  .map((item, key) => (
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
      ) : (
        <Loader> {t("loads.news_load")} </Loader>
      )}
    </>
  );
}
