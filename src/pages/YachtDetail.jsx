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
import { Pagination, EffectFade } from "swiper/modules";
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
      setLoad(false);
    } else {
      navigate("/yachts");
    }
  }, [state]);

  const offerForm = (title) => {
    setSelectedYacht(title);
    setShowOffer(true);
  };

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
              <h2 className="text-center mb-3">
                {data.title}
              </h2>
              <div className="yachts_detail_flex">
                <div className="">
                  <Swiper
                    className="yachts_detail_images"
                    loop={true}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={16}
                    slidesPerView={1}
                  >
                    <SwiperSlide>
                      <img src={data.image} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={
                          "https://storage.googleapis.com/say_danismanlik_storage/1728896641964.png"
                        }
                        alt=""
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div>
                  <div dangerouslySetInnerHTML={{ __html: data.content }} />
                </div>
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
                          <img src={data.image} alt={data.title} />
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
