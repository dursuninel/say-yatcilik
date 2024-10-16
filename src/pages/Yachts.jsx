import React, { useContext, useState, useEffect, useMemo } from "react";
import PageBanner from "../components/PageBanner";
import { useNavigate, useSearchParams } from "react-router-dom"; // useSearchParams ile URL parametrelerini yakalayacağız
import { ApiContext } from "../context/ApiContext";
import { useTranslation } from "react-i18next";
import Modal from "../components/Modal";
import GetQuote from "../components/forms/GetQuote";
import BoatSearchForm from "../components/forms/BoatSearchForm";

export default function Yachts() {
  const { apiControl } = useContext(ApiContext);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams(); // URL'deki parametreleri alırız

  const [showOffer, setShowOffer] = useState(false);
  const [selectedYacht, setSelectedYacht] = useState("");
  const [filteredYachts, setFilteredYachts] = useState(apiControl.yachts.value);

  // URL parametrelerini yakala ve defaultValues olarak ayarla
  const defaultValues = useMemo(
    () => ({
      boatType: searchParams.get("boatType") || "",
      heightMin: searchParams.get("heightMin") || "",
      heightMax: searchParams.get("heightMax") || "",
      heightm: searchParams.get("heightm") || "",
      priceMin: searchParams.get("priceMin") || "",
      priceMax: searchParams.get("priceMax") || "",
      priceEuro: searchParams.get("priceEuro") || "",
    }),
    [searchParams]
  );

  // Parametrelere göre yatları filtrele
  useEffect(() => {
    const filtered = apiControl.yachts.value.filter((yacht) => {
      const matchBoatType = defaultValues.boatType
        ? yacht.category === defaultValues.boatType
        : true;
      const matchHeight =
        (!defaultValues.heightMin || yacht.height >= defaultValues.heightMin) &&
        (!defaultValues.heightMax || yacht.height <= defaultValues.heightMax);
      const matchPrice =
        (!defaultValues.priceMin || yacht.price >= defaultValues.priceMin) &&
        (!defaultValues.priceMax || yacht.price <= defaultValues.priceMax);
      return matchBoatType && matchHeight && matchPrice;
    });
    setFilteredYachts(filtered);
  }, [defaultValues, apiControl.yachts.value]);

  const goToDetail = (link) => {
    navigate(`/yacht/${link}`, {
      state: { link: link },
    });
  };

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
          {/* BoatSearchForm'a defaultValues parametresini veriyoruz */}
          <BoatSearchForm page={true} defaultValues={defaultValues} />

          <div className="mt-4 boat-list">
            {filteredYachts.map((data, key) => (
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
