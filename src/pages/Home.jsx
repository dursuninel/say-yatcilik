import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BoatSearchForm from "../components/forms/BoatSearchForm";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade } from "swiper/modules";
import AboutSlide from "../components/AboutSlide";
import BoatsSlide from "../components/BoatsSlide";
import NewsSlide from "../components/NewsSlide";
import { ApiContext } from "../context/ApiContext";
import { useTranslation } from "react-i18next";
import Modal from "../components/Modal";
import GetQuote from "../components/forms/GetQuote";
import { useLanguage } from "../context/LanguageContext";
import NewsletterForm from "../components/forms/NewsletterForm";

const words = [
  "SANLORENZO",
  "BLUEGAME",
  "PRESTIGE",
  "JEANNEAU",
  "SACS",
  "RYCK",
  "HANSE",
  "MOODY",
  "EXCESS",
];

export default function Home() {
  const { apiControl } = useContext(ApiContext);
  const { activeLanguage } = useLanguage();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const goToBlogDetail = (link) => {
    navigate(`/discover/${link}`, {
      state: { link: link },
    });
  };

  const goToYachtDetail = (link) => {
    navigate(`/yacht/${link}`, {
      state: { link: link },
    });
  };

  const goToNewsDetail = (link) => {
    navigate(`/news/${link}`, {
      state: { link: link },
    });
  };

  const [showOffer, setShowOffer] = useState(false);

  const [selectedYacht, setSelectedYacht] = useState("");

  const offerForm = (title) => {
    setSelectedYacht(title);
    setShowOffer(true);
  };

  return (
    <>
      {/* Banner */}
      <section className="banner">
        <div className="banner-bg"></div>

        <div className="banner-content">
          <div className="container">
            <div className="banner-form-area">
              <div className="form-header">
                <h2>{t("home.banner_title")}</h2>
                <span>
                  {" "}
                  <Link to="/yachts">{t("status.no_new")}</Link> |{" "}
                  <Link to="/yachts">{t("module_banner.yachts_link")}</Link>{" "}
                </span>
              </div>
              <div className="form-body">
                <BoatSearchForm />
              </div>
              <div className="form-footer">
                <div className="words">
                  {words.map((item, key) => (
                    <span key={key}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popüler Tekneler */}
      <section>
        <div className="container">
          <div className="module-header center">
            <h2>{t("module_banner.populer_yachts_title")}</h2>
            <Link style={{ textAlign: "right" }} to={"/yachts"}>
              {t("module_banner.see_all")}
            </Link>
          </div>

          <div className="boat-list">
            {apiControl.yachts.value
              .filter((item) => Number(item.popular) === 1)
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
                      onClick={() => goToYachtDetail(data.link)}
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

      {/* Markalar */}
      <section style={{ marginTop: "6rem" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="brands-left">
                <h2
                  dangerouslySetInnerHTML={{
                    __html: t("module_banner.boat_brands"),
                  }}
                />
                <img
                  src={require("../assets/images/markaTemsilcisi.png")}
                  width={"100%"}
                  alt="Markalar"
                />
              </div>
            </div>
            <div className="col-lg-6 brand-mobile-right">
              <div className="brands-right">
                <div className="brands-flex">
                  <div>
                    <img
                      src={require("../assets/images/saysail.png")}
                      alt="saysail"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../assets/images/moody.png")}
                      alt="moody"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../assets/images/sacs.png")}
                      alt="sacs"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../assets/images/kolay-tekne.png")}
                      alt="kolay-tekne"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../assets/images/jeanneau.png")}
                      alt="jeanneau"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../assets/images/prestige.png")}
                      alt="prestige"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../assets/images/ryck.png")}
                      alt="ryck"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../assets/images/bluegame.png")}
                      alt="bluegame"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tekne Kategorileri */}
      <section className="boat-bg">
        <div className="container">
          <div className="yachts-header">
            <h2 className="text-white">{t("module_banner.yachts_title")}</h2>
            <Link to={"/yachts"}>{t("module_banner.yachts_link")}</Link>
          </div>

          <BoatsSlide goToDetail={goToYachtDetail} />
        </div>
      </section>

      {/* Say Danışmanlık Deneyimi */}
      <section>
        <div className="container">
          <div className="module-header">
            <h2>{t("module_banner.exp_title")}</h2>
            <p>{t("module_banner.exp_text")}</p>
          </div>

          <div className="module_body">
            <div className="image-list">
              <div>
                <img src={require("../assets/images/boat1.png")} alt="Boat" />
              </div>
              <div>
                <img src={require("../assets/images/boat2.png")} alt="Boat" />
              </div>
              <div>
                <img src={require("../assets/images/boat3.png")} alt="Boat" />
              </div>
              <div>
                <img src={require("../assets/images/i4.png")} alt="Boat" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tekne Görseli */}
      <section style={{ marginTop: "6rem" }}>
        <div className="container">
          <img
            src={require("../assets/images/yat.png")}
            alt="Yat Görseli"
            width={"100%"}
            style={{ borderRadius: "1rem" }}
          />
        </div>
      </section>

      {/* Haberler */}
      <section className="boat-bg more-mb">
        <div className="container">
          <div className="yachts-header mb-3">
            <h2 className="text-white">{t("module_banner.news_title")} </h2>
            <Link to={"/news"}>{t("module_banner.see_all")}</Link>
          </div>

          <NewsSlide goToNewsDetail={goToNewsDetail} />
        </div>
      </section>

      {/* E bülten */}
      <section className="newsletter_sec">
        <div className="container">
          <div className="newsletter_area">
            <h2 className="text-center">{t("form.news")}</h2>
            <div>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>

      {/* Keşfet */}
      <section>
        <div className="container">
          <div className="yachts-header mb-3">
            <h2>{t("module_banner.discover_title")}</h2>
            <Link to={"/"} className="text-black">
              {t("module_banner.see_all")}
            </Link>
          </div>{" "}
          <div className="announcements_main">
            <div className="left">
              {apiControl.discover.value.length > 0 &&
                apiControl.discover.value.slice(0, 1).map((item, key) => (
                  <div className="item" key={key}>
                    <img src={item.image} alt={item.title} />
                    <div className="item_content">
                      <span className="category">{item.category}</span>
                      <h3>{item.title}</h3>
                      <div
                        dangerouslySetInnerHTML={{ __html: item.content }}
                        className="blog_detail"
                      />
                      <button onClick={() => goToBlogDetail(item.link)}>
                        {t("common.read_more")}
                      </button>
                    </div>
                  </div>
                ))}
            </div>

            <div className="right">
              {apiControl.discover.value.length > 1 &&
                apiControl.discover.value
                  .slice(1, 3) // İkinci ve üçüncü öğeleri sağ tarafa almak için slice kullanıyoruz
                  .map((item, key) => (
                    <div className="item" key={key}>
                      <img src={item.image} alt={item.title} />
                      <div className="item_content">
                        <span className="category">{item.category}</span>
                        <h3>{item.title}</h3>
                        <div
                          dangerouslySetInnerHTML={{ __html: item.content }}
                          className="blog_detail"
                        />
                        <button onClick={() => goToBlogDetail(item.link)}>
                          {t("common.read_more")}
                        </button>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hakkımızda */}
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="about-left">
                <h2>
                  {apiControl.aboutTexts.value[`${activeLanguage.code}_title`]}
                </h2>
                <div
                  className="content ex"
                  dangerouslySetInnerHTML={{
                    __html:
                      apiControl.aboutTexts.value[
                        `${activeLanguage.code}_text`
                      ],
                  }}
                />

                <Link to={"/about-us"} className="btn-style">
                  {t("common.read_more")}
                </Link>
              </div>
            </div>
            <div className="col-md-6 about-mobile-right">
              <div className="about-right">
                <AboutSlide />
              </div>
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
    </>
  );
}
