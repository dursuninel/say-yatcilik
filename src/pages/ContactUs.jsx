import React, { useEffect } from "react";
import PageBanner from "../components/PageBanner";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/forms/ContactForm";
import ReactGA from "react-ga4";
import { useLanguage } from "../context/LanguageContext";

export default function ContactUs() {
  const { t } = useTranslation();
  const { activeLanguage } = useLanguage();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: `İletişim - ${activeLanguage.code.toUpperCase()}`,
    });
  }, [activeLanguage]);
  return (
    <>
      <PageBanner
        title={t("banners.contact_banner")}
        breadpoint={[
          { title: t("banners.home"), link: "/" },
          { title: t("banners.contact_banner") },
        ]}
      />

      <section>
        <div className="container">
          <h2 className="mb-4">{t("form.title")}</h2>
          <ContactForm />
        </div>
      </section>

      <section className="mb-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6362443.302965664!2d26.417838039831842!3d38.863098632601336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad1b75e137875%3A0xada1735cae7270fc!2zU0FZIEh1a3VrIHZlIERhbsSxxZ9tYW5sxLFr!5e0!3m2!1str!2str!4v1728466121183!5m2!1str!2str"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          title="Map"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
