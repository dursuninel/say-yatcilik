import React, { useContext, useState } from "react";
import PageBanner from "../components/PageBanner";
import { Link, useNavigate } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";
import { useTranslation } from "react-i18next";
import Modal from "../components/Modal";
import GetQuote from "../components/forms/GetQuote";

export default function Yachts() {
  const { apiControl } = useContext(ApiContext);
  const { t } = useTranslation();

  const navigate = useNavigate();

  const goToDetail = (link) => {
    navigate(`/yacht/${link}`, {
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
      <PageBanner
        title={t("banners.yachts_banner")}
        breadpoint={[
          { title: t("banners.home"), link: "/" },
          { title: t("banners.yachts_banner") },
        ]}
      />

      <section>
        <div className="container">
          <div className="boat-list">
            {apiControl.yachts.value.map((data, key) => (
              <div className="boat-item" key={key}>
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
                <div className="boat-links">
                  <button
                    onClick={() => offerForm(data.title)}
                    className="btn-style"
                  >
                    {t("common.get_quote")}
                  </button>
                  <button
                    onClick={() => goToDetail(data.link)}
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

      <Modal
        title={t("form.quote_title")}
        state={showOffer}
        setState={setShowOffer}
      >
        <GetQuote value={selectedYacht} />
      </Modal>
    </>
  );
}
