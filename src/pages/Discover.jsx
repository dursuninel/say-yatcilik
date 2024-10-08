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
        <div class="container">
          <div class="announcements_main">
            <div class="item">
              <img src={require("../assets/images/yat.png")} alt="Başlık" />
              <div class="item_content">
                <span className="category">Kategori</span>

                <h3>Başlık</h3>
                <p>içerik</p>
                <a href="/duyuru/{{ data.link }}">Devamını Oku</a>
              </div>
            </div>

            <div class="item">
              <img src={require("../assets/images/yat.png")} alt="Başlık" />
              <div class="item_content">
                <span className="category">Kategori</span>

                <h3>Başlık</h3>
                <a href="/duyuru/{{ data.link }}">Devamını Oku</a>
              </div>
            </div>

            <div class="item">
              <img src={require("../assets/images/yat.png")} alt="Başlık" />
              <div class="item_content">
                <span className="category">Kategori</span>

                <h3>Başlık</h3>
                <a href="/duyuru/{{ data.link }}">Devamını Oku</a>
              </div>
            </div>

            <div class="item">
              <img src={require("../assets/images/yat.png")} alt="Başlık" />
              <div class="item_content">
                <span className="category">Kategori</span>

                <h3>Başlık</h3>
                <a href="/duyuru/{{ data.link }}">Devamını Oku</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
