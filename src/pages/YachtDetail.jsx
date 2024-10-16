import React, { useContext, useEffect, useState } from "react";
import PageBanner from "../components/PageBanner";
import { useLocation, useNavigate } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";
import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";
import Modal from "../components/Modal";
import GetQuote from "../components/forms/GetQuote";
export default function YachtDetail() {
  const { apiControl } = useContext(ApiContext);

  const { state } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [load, setLoad] = useState(true);
  const [data, setData] = useState(null);
  const [showOffer, setShowOffer] = useState(false);

  const [selectedYacht, setSelectedYacht] = useState("");

  const goToDetail = (link) => {
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
      // console.log(datas)
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
            image={data.image}
            content={<div dangerouslySetInnerHTML={{ __html: data.content }} />}
          />

          <Modal
            title={t("form.quote_title")}
            state={showOffer}
            setState={setShowOffer}
          >
            <GetQuote value={selectedYacht} />
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
        </>
      ) : (
        <Loader> {t("loads.yachts_load")} </Loader>
      )}
    </>
  );
}
