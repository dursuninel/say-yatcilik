import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setMenu(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <header>
      <div className="container-fluid">
        <div className="front-style">
          <div>
            <Link to={"/"}>
              <img
                src={require("../assets/images/header-logo.png")}
                width={110}
                alt="Say Danışmanlık"
              />
            </Link>
          </div>
          <div className="lang-main">
            <p className="lang-links">
              <span className="link">TR</span>
              <span>|</span>
              <span className="link">EN</span>
            </p>

            <div>
              <nav role="navigation" onClick={() => setMenu(!menu)}>
                <div id="menuToggle">
                  <input type="checkbox" checked={menu} />

                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className={`header-links ${menu ? "open" : ""}`}>
        <div className="header-overlay" onClick={() => setMenu(false)} />
        <ul>
          <li>
            <Link to={"/"} title="Anasayfa">
              Anasayfa
            </Link>
          </li>
          <li>
            <Link to={"/about-us"} title="Hakkımızda">
              Hakkımızda
            </Link>
          </li>
          <li>
            <Link to={"/boats"} title="Yatlar">
              Yatlar
            </Link>
          </li>
          <li>
            <Link to={"/discover"} title="Keşfet">
              Keşfet
            </Link>
          </li>
          <li>
            <Link to={"/contact-us"} title="İletişim">
              İletişim
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
