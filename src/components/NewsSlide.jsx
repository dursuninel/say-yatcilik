import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { Link } from "react-router-dom";

const NewsSlide = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null); // Swiper referansı

  const slides = [
    require("../assets/images/news1.png"),
    require("../assets/images/news2.png"),
    require("../assets/images/news1.png"),
    require("../assets/images/news2.png"),
  ];

  // Swiper navigasyonu güncellemek için useEffect kullanıyoruz
  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  const handlePrevClick = (e) => {
    if (prevRef.current.classList.contains("swiper-button-lock")) {
      e.preventDefault();
      e.stopPropagation();
      return; // Eğer swiper-button-lock varsa, hiçbir şey yapmıyoruz
    }
    swiperRef.current.slidePrev();
  };

  const handleNextClick = (e) => {
    if (nextRef.current.classList.contains("swiper-button-lock")) {
      e.preventDefault();
      e.stopPropagation();
      return; // Eğer swiper-button-lock varsa, hiçbir şey yapmıyoruz
    }
    swiperRef.current.slideNext();
  };

  return (
    <>
      <Swiper
        modules={[Navigation]}
        slidesPerView={2}
        loop={true}
        spaceBetween={16}
        breakpoints={{
          1200: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        className="news-body"
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Swiper referansını kaydediyoruz
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index} className="news-item">
            <img src={src} alt="" />
            <div className="news-item-content">
              <h3>Yat Festivali (10 - 15 Eylül 2024)</h3>

              <Link to={"/"} className="btn-style transparent-style">
                Daha Fazla
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-boats-arrow">
        <div
          ref={prevRef}
          className="boats-arrow-left"
          onClick={handlePrevClick}
        >
          <i className="fa-solid fa-angle-left"></i>
        </div>
        <div
          ref={nextRef}
          className="boats-arrow-right"
          onClick={handleNextClick}
        >
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </>
  );
};

export default NewsSlide;
