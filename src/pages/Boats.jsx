import React, { useContext } from "react";
import PageBanner from "../components/PageBanner";
import { Link } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";
import { useTranslation } from "react-i18next";

export default function Boats() {
  const { apiControl } = useContext(ApiContext);
  const { t } = useTranslation();

  return (
    <>
      <PageBanner
        title={t("banners.boats_banner")}
        breadpoint={[
          { title: t("banners.home"), link: "/" },
          { title: t("banners.boats_banner") },
        ]}
      />

      <section>
        <div className="container">
          <div className="boats-header">
            <h2 className="text-white">{t("module_banner.boats_title")}</h2>
            <Link to={"/boats"}>{t("module_banner.boats_link")}</Link>
          </div>

          <div className="boat-list">
            {apiControl.boats.value.map((data, key) => (
              <div className="boat-item" key={key}>
                <div className="boat-image">
                  <img src={data.image} alt={data.title} />
                  <span className="boat-status">
                    {data.boat_class === "1" ? t("status.no_new") : t("status.new")}
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
                  <button className="btn-style">{t("common.get_quote")}</button>
                  <Link to={`/boat/${data.link}`} className="btn-style">
                    {t("common.detail_info")}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="boats-body boats-flex">
            <div className="boat-item">
              <img src={require("../assets/images/pagebanner.png")} alt="" />
              <Link to={"/"}>
                Yat ismi <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="boat-item">
              <img src={require("../assets/images/boat2.png")} alt="" />
              <Link to={"/"}>
                Yat ismi <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="boat-item">
              <img src={require("../assets/images/boat3.png")} alt="" />
              <Link to={"/"}>
                Yat ismi <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="boat-item">
              <img src={require("../assets/images/yat.png")} alt="" />
              <Link to={"/"}>
                Yat ismi <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className="boat-item">
              <img src={require("../assets/images/pagebanner.png")} alt="" />
              <Link to={"/"}>
                Yat ismi <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
