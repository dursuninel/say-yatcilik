import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const AboutSlide = () => {
  // Active slide index state
  const [activeIndex, setActiveIndex] = useState(0);

  // Swiper instance reference
  const swiperRef = useRef(null);

  // Slide images
  const slides = [
    require("../assets/images/about.png"),
    require("../assets/images/markaTemsilcisi.png"),
  ];

  // Function to handle thumbnail click
  const handleThumbClick = (index) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index); // `slideToLoop` slides to the specific index and loops if necessary
    }
  };

  return (
    <>
      <div className="slide-images">
        <Swiper
          loop={true}
          modules={[EffectFade]}
          effect="fade"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Get swiper instance
        >
          {slides.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="thumb-slider">
        {slides.map((src, index) => (
          <div
            key={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => handleThumbClick(index)}
          >
            <img src={src} alt={`Thumb ${index + 1}`} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutSlide;
