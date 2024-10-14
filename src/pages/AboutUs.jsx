import React from "react";
import PageBanner from "../components/PageBanner";
import AboutSlide from "../components/AboutSlide";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <>
      <PageBanner
        title={t("banners.about_banner")}
        breadpoint={[
          { title: t("banners.home"), link: "/" },
          { title: t("banners.about_banner") },
        ]}
      />

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

                  <p>
                    Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
                    metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir
                    hurufat numune kitabı oluşturmak üzere bir yazı galerisini
                    alarak karıştırdığı 1500'lerden beri endüstri standardı
                    sahte metinler olarak kullanılmıştır.
                  </p>
                </div>
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

      {/* Say Danışmanlık Deneyimi */}
      <section>
        <div className="container">
          <div className="module-header">
            <h2>Say Danışmanlık Deneyimi</h2>
            <p>
              İhtiyacınızın ve isteklerinizin sınırı ne olursa olsun huzurlu bir
              tekne tatili vadederek her türden denizciye uygun alternatifler
              sunmayı hedefliyoruz.
            </p>
          </div>

          <div className="module_body">
            <div className="image-list">
              <div>
                <img src={require("../assets/images/boat1.png")} alt="" />
              </div>
              <div>
                <img src={require("../assets/images/boat2.png")} alt="" />
              </div>
              <div>
                <img src={require("../assets/images/boat3.png")} alt="" />
              </div>
              <div>
                <img src={require("../assets/images/i4.png")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
