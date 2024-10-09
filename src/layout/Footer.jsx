import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-main">
          <div className="container">
            <div className="footer-flex">
              <div>
                <p className="title">Telefon</p>
                <ul>
                  <li>
                    <a href="/">+90 123 456 789</a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="title">E-mail</p>
                <ul>
                  <li>
                    <a href="/">info@saydanismanlik.com</a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="title">Sosyal Medya</p>
                <ul className="social_media">
                  <li>
                    <a href="/">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="title">Konum</p>
                <ul>
                  <li>
                    <a href="/">
                      Lorem Ipsum, kısaca Lipsum masaüstü basın yayın sektöründe
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="footer-center">
              <div>
                <img
                  src={require("../assets/images/Logo.png")}
                  alt="Say Danışmanlık"
                />
              </div>
              <div>
                <ul>
                  <li>
                    <Link to="/" title="Anasayfa">Anasayfa</Link>
                  </li>

                  <li>
                    <Link to="/about-us" title="Hakkımızda">Hakkımızda</Link>
                  </li>

                  <li>
                    <Link to="/boats" title="Yatlar">Yatlar</Link>
                  </li>

                  <li>
                    <Link to="/discover" title="Keşfet">Keşfet</Link>
                  </li>

                  <li>
                    <Link to="/contact-us" title="İletişim">İletişim</Link>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="copyright-flex">
              <p>© 2024 Üsküdar Kulüpler Birliği, Tüm Hakları Saklıdır.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
