import { useContext, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { Link } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";

const BoatsSlide = ({ goToDetail }) => {
  const { apiControl } = useContext(ApiContext);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null); // Swiper referansı

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
        slidesPerView={3}
        loop={true}
        spaceBetween={16}
        breakpoints={{
          1200: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        className="yachts-body"
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Swiper referansını kaydediyoruz
      >
        {apiControl.yachts.value.map((data, key) => (
          <SwiperSlide key={key} className="boat-item">
            <img src={data.image} alt={data.title} />
            <button onClick={() => goToDetail(data.link)} className="btn-style">
              {data.title} <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-yachts-arrow">
        <div
          ref={prevRef}
          className="yachts-arrow-left"
          onClick={handlePrevClick}
        >
          <i className="fa-solid fa-angle-left"></i>
        </div>
        <div
          ref={nextRef}
          className="yachts-arrow-right"
          onClick={handleNextClick}
        >
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </>
  );
};

export default BoatsSlide;
