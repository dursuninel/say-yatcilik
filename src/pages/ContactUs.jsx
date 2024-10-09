import React from "react";
import PageBanner from "../components/PageBanner";
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <>
      <PageBanner
        title={"İletişim"}
        breadpoint={[{ title: "Anasayfa", link: "/" }, { title: "İletişim" }]}
      />

      <section>
        <div className="container">
          <h2 className="mb-4">Bize Ulaşın</h2>
          <form>
            <div className="contact-form-flex">
              <div>
                <label htmlFor="">Adınız Soyadınız</label>
                <input type="text" placeholder="Adınız Soyadınız" />
              </div>
              <div>
                <label htmlFor="">Email Adresiniz</label>
                <input type="text" placeholder="Email Adresiniz" />
              </div>
              <div>
                <label htmlFor="">Telefon Numaranız</label>
                <input type="text" placeholder="Telefon Numaranız" />
              </div>
              <div className="one-input">
                <label htmlFor="">Mesajınızı</label>
                <textarea placeholder="Mesajınızı"></textarea>
              </div>
              <button className="btn-style">Gönder</button>
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
