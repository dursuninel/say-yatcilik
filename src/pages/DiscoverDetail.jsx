import React, { useContext, useEffect, useState } from "react";
import PageBanner from "../components/PageBanner";
import { useLocation, useNavigate } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";
import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";

export default function DiscoverDetail() {
  const { apiControl } = useContext(ApiContext);

  const { state } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [load, setLoad] = useState(true);
  const [data, setData] = useState(null);

  const goToBlogDetail = (link) => {
    navigate(`/discover/${link}`, {
      state: { link: link },
    });
  };

  useEffect(() => {
    setData(null);

    let datas = apiControl.discover.value.find(
      (item) => item.link === state?.link
    );

    if (datas) {
      setData(
        apiControl.discover.value.find((item) => item.link === state.link)
      );
      setLoad(false);
    } else {
      navigate("/discover");
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
              { title: `/ ${t("banners.discover_banner")}`, link: "/discover" },
              {
                title: data.title,
              },
            ]}
            image={data.image}
            content={<div dangerouslySetInnerHTML={{ __html: data.content }} />}
          />

          {/* Keşfet */}
          <section>
            <div className="container">
              <div className="announcements_main list">
                {apiControl.discover.value
                  .filter((item) => item.link !== data.link)
                  .map((data, key) => (
                    <div className="item" key={key}>
                      <img src={data.image} alt={data.title} />
                      <div className="item_content">
                        <span className="category">{data.category}</span>

                        <h3>{data.title}</h3>

                        <div
                          className="blog_detail"
                          dangerouslySetInnerHTML={{ __html: data.content }}
                        />

                        <button onClick={() => goToBlogDetail(data.link)}>
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
        <Loader> {t("loads.discover_load")} </Loader>
      )}
    </>
  );
}
