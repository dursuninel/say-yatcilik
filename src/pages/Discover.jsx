import React from "react";
import PageBanner from "../components/PageBanner";
import AboutSlide from "../components/AboutSlide";
import { Link } from "react-router-dom";

export default function Discover() {
  return (
    <>
      <PageBanner
        title={"Keşfet"}
        breadpoint={[{ title: "Anasayfa", link: "/" }, { title: "Keşfet" }]}
      />

      {/* Keşfet */}
      <section>
        <div className="container">
          <div className="announcements_main">
            <div className="item">
              <img src={require("../assets/images/yat.png")} alt="Başlık" />
              <div className="item_content">
                <span className="category">Kategori</span>

                <h3>Başlık</h3>
                <p>içerik</p>
                <a href="/">Devamını Oku</a>
              </div>
            </div>

            <div className="item">
              <img src={require("../assets/images/yat.png")} alt="Başlık" />
              <div className="item_content">
                <span className="category">Kategori</span>

                <h3>Başlık</h3>
                <a href="/">Devamını Oku</a>
              </div>
            </div>

            <div className="item">
              <img src={require("../assets/images/yat.png")} alt="Başlık" />
              <div className="item_content">
                <span className="category">Kategori</span>

                <h3>Başlık</h3>
                <a href="/">Devamını Oku</a>
              </div>
            </div>

            <div className="item">
              <img src={require("../assets/images/yat.png")} alt="Başlık" />
              <div className="item_content">
                <span className="category">Kategori</span>

                <h3>Başlık</h3>
                <a href="/">Devamını Oku</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
