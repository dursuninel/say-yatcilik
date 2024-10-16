import React, { useContext } from "react";
import PageBanner from "../components/PageBanner";
import AboutSlide from "../components/AboutSlide";
import { useTranslation } from "react-i18next";
import { ApiContext } from "../context/ApiContext";
import { useLanguage } from "../context/LanguageContext";

export default function AboutUs() {
  const { t } = useTranslation();
  const { apiControl } = useContext(ApiContext);
  const { activeLanguage } = useLanguage();

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
                <h2>
                  {apiControl.aboutTexts.value[`${activeLanguage.code}_title`]}
                </h2>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html:
                      apiControl.aboutTexts.value[
                        `${activeLanguage.code}_text`
                      ],
                  }}
                />
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
