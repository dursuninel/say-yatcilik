import React from "react";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

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
                <form className="form-area">
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" placeholder="" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group center">
                      <input type="text" placeholder="min" />
                      <input type="text" placeholder="max" />
                      <input type="text" placeholder="ft" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group center">
                      <input type="text" placeholder="min" />
                      <input type="text" placeholder="max" />
                      <input type="text" placeholder="euro" />
                    </div>
                  </div>
                  <div className="btn-group">
                    <button className="">Arama</button>
                  </div>
                </form>
              </div>
              <div className="form-footer">
                <div className="words">
                  {words.map((item) => (
                    <span>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
