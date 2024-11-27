import React, { useContext, useEffect, useState } from "react";
import PageBanner from "../components/PageBanner";
import { useLocation, useNavigate } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";
import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";
import Modal from "../components/Modal";
import GetQuote from "../components/forms/GetQuote";
import ReactGA from "react-ga4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Thumbs } from "swiper/modules";
import { Image } from "primereact/image";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function YachtDetail() {
  const { apiControl } = useContext(ApiContext);

  const { state } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [load, setLoad] = useState(true);
  const [data, setData] = useState(null);
  const [showOffer, setShowOffer] = useState(false);

  const [selectedYacht, setSelectedYacht] = useState("");

  const goToDetail = (link, title) => {
    ReactGA.event({
      category: "Yatlar",
      action: "Yata tıklandı",
      label: title,
    });

    navigate(`/yacht/${link}`, {
      state: { link: link },
    });
  };

  useEffect(() => {
    setData(null);

    let datas = apiControl.yachts.value.find(
      (item) => item.link === state?.link
    );

    if (datas) {
      setData(apiControl.yachts.value.find((item) => item.link === state.link));
      console.log(
        apiControl.yachts.value.find((item) => item.link === state.link)
      );
      setLoad(false);
    } else {
      navigate("/yachts");
    }
  }, [state]);

  const offerForm = (title) => {
    setSelectedYacht(title);
    setShowOffer(true);
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      {load === false && data ? (
        <>
          <PageBanner
            title={data.title}
            breadpoint={[
              { title: t("banners.home"), link: "/" },
              { title: `/ ${t("banners.yachts_banner")}`, link: "/yachts" },
              {
                title: data.title,
              },
            ]}
            // image={data.image}
          />
          <section>
            <div className="container">
              <h2 className="text-center mb-3">{data.title}</h2>
              <div className={`yachts_detail_flex${data.content.length !== 13 && data.content.length !== 11 && data.content.length !== 75 ? "" : " simple"}`}>
                <div className="">
                  <Swiper
                    className="yachts_detail_images"
                    loop={true} // Enable loop
                    modules={[Navigation, Thumbs]} // Add Thumbs and Navigation modules
                    pagination={{ clickable: true }} // Enable pagination
                    navigation // Enable next/prev arrows
                    spaceBetween={16}
                    slidesPerView={1}
                    thumbs={{ swiper: thumbsSwiper }} // Link to thumbs swiper
                  >
                    {JSON.parse(data.image).map((item, key) => (
                      <SwiperSlide key={key}>
                        <Image src={item} alt="Say" preview />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Thumbs Swiper for the thumbnail navigation */}
                  <Swiper
                    onSwiper={setThumbsSwiper} // Set the thumbs swiper instance
                    loop={true} // Enable loop for the thumbs swiper
                    spaceBetween={8}
                    slidesPerView={5} // Number of thumbnail slides visible at once
                    freeMode={true} // Allow free scrolling
                    watchSlidesProgress={true} // Enable slide progress watching
                    className="thumbnail mt-2"
                  >
                    {JSON.parse(data.image).map((item, key) => (
                      <SwiperSlide key={key}>
                        <img src={item} alt="Thumbnail" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                {console.log(data.content.length)}
                {data.content.length !== 13 && data.content.length !== 11 && data.content.length !== 75 && (
                  <>
                    <div>
                      <div dangerouslySetInnerHTML={{ __html: data.content }} />
                    </div>
                  </>
                )}
              </div>

              <h2 className="text-center mt-4 mb-3">Teknik Bilgiler</h2>
              <div className="tech_table_flex">
                {JSON.parse(data.tech_detail) &&
                Object.keys(JSON.parse(data.tech_detail)).length > 0 ? (
                  Object.entries(JSON.parse(data.tech_detail)).map(
                    ([key, value], index) => (
                      <div className="table-row" key={index}>
                        {console.log(data.tech_detail)}
                        <div className="table-col-title">{key}</div>
                        <div className="table-col-content">{value}</div>
                      </div>
                    )
                  )
                ) : (
                  <div className="no-data"></div>
                )}
              </div>
            </div>
          </section>

          <Modal
            title={t("form.quote_title")}
            state={showOffer}
            setState={setShowOffer}
          >
            <GetQuote setState={setShowOffer} value={selectedYacht} />
          </Modal>

          <section>
            <div className="container">
              <div className="boat-list">
                {apiControl.yachts.value
                  .filter((item) => item.link !== data.link)
                  .map((data, key) => (
                    <div className="boat-item" key={key}>
                      <div>
                        <div className="boat-image">
                          <img
                            src={JSON.parse(data.image)[0]}
                            alt={data.title}
                          />
                          <span className="boat-status">
                            {data.boat_class === "1"
                              ? t("status.no_new")
                              : t("status.new")}
                          </span>
                        </div>
                        <div className="boat-content">
                          <div className="boat-info">
                            <h3>{data.title}</h3>
                            <span>
                              {data.category} | {data.height}m
                            </span>
                          </div>
                          <div className="boat-price">
                            <p className="price">{data.price}</p>
                            <span>EUR</span>
                          </div>
                        </div>
                      </div>
                      <div className="boat-links">
                        <button
                          onClick={() => offerForm(data.title)}
                          className="btn-style"
                        >
                          {t("common.get_quote")}
                        </button>
                        <button
                          onClick={() => goToDetail(data.link, data.title)}
                          className="btn-style"
                        >
                          {t("common.detail_info")}
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <Loader> {t("loads.yachts_load")} </Loader>
      )}
    </>
  );
}
