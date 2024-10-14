import React from "react";
import PageBanner from "../components/PageBanner";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const { t } = useTranslation();
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
          <form>
            <div className="contact-form-flex">
              <div>
                <label htmlFor="">{t("form.name")}</label>
                <input type="text" placeholder={t("form.name")} />
              </div>
              <div>
                <label htmlFor="">{t("form.email")}</label>
                <input type="text" placeholder={t("form.email")} />
              </div>
              <div>
                <label htmlFor="">{t("form.phone")}</label>
                <input type="text" placeholder={t("form.phone")} />
              </div>
              <div className="one-input">
                <label htmlFor="">{t("form.message")}</label>
                <textarea placeholder={t("form.message")}></textarea>
              </div>
              <button className="btn-style">{t("form.send")}</button>
            </div>
          </form>
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
