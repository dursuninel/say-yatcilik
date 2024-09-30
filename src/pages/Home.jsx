import React, { useState } from "react";
import { Link } from "react-router-dom";
import BoatSearchForm from "../components/forms/BoatSearchForm";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade } from "swiper/modules";
import AboutSlide from "../components/AboutSlide";
import BoatsSlide from "../components/BoatsSlide";

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
  return (
    <>
      {/* Banner */}
      <section className="banner">
        <div className="banner-bg"></div>

        <div className="banner-content">
          <div className="container">
            <div className="banner-form-area">
              <div className="form-header">
                <h2>Hayalindeki Tekneyi Bul</h2>
                <span>
                  {" "}
                  <Link>İkinci El</Link> | <Link>Tüm Tekneler</Link>{" "}
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

      {/* Hakkımızda */}
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="about-left">
                <h2>Say Danışmanlık Hakkında</h2>
                <div className="content">
                  <p>
                    Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
                    metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir
                    hurufat numune kitabı oluşturmak üzere bir yazı galerisini
                    alarak karıştırdığı 1500'lerden beri endüstri standardı
                    sahte metinler olarak kullanılmıştır.
                  </p>

                  <p>
                    Boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek
                    değişmeden elektronik dizgiye de sıçramıştır. 1960'larda
                    Lorem Ipsum pasajları da içeren Letraset yapraklarının
                    yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem
                    Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile
                    popüler olmuştur.
                  </p>
                </div>

                <Link to={"/hakkimizda"} className="btn-style">
                  Daha Fazla
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

      {/* Markalar */}
      <section style={{ marginTop: "6rem" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="brands-left">
                <h2>
                  Tekne Markalarının <br /> Popüler Temsilcisi
                </h2>
                <img
                  src={require("../assets/images/markaTemsilcisi.png")}
                  width={"100%"}
                  alt=""
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
          <div className="boats-header">
            <h2 className="text-white">Tarzınızı Seçin</h2>
            <Link to={"/"}>Tüm Tekneler</Link>
          </div>

          <BoatsSlide />
        </div>
      </section>
    </>
  );
}
