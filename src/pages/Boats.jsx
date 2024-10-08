import React from "react";
import PageBanner from "../components/PageBanner";
import AboutSlide from "../components/AboutSlide";
import { Link } from "react-router-dom";
import BoatsSlide from "../components/BoatsSlide";

export default function Boats() {
  return (
    <>
      <PageBanner
        title={"Yatlar"}
        breadpoint={[{ title: "Anasayfa", link: "/" }, { title: "Yatlar" }]}
      />

      <section>
        <div className="container">
          <div className="boats-header">
            <h2 className="text-white">Tarzınızı Seçin</h2>
            <Link to={"/"}>Tüm Tekneler</Link>
          </div>

          <div className="boats-body boats-flex">
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
          </div>
        </div>
      </section>
    </>
  );
}
