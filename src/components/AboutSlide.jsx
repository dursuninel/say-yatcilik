import { useState, useRef, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { ApiContext } from "../context/ApiContext";

const AboutSlide = () => {
  const { apiControl } = useContext(ApiContext);

  // Active slide index state
  const [activeIndex, setActiveIndex] = useState(0);

  // Swiper instance reference
  const swiperRef = useRef(null);

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
          {apiControl.aboutImages.value.map((data, index) => (
            <SwiperSlide key={index}>
              <img src={data.image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="thumb-slider">
        {apiControl.aboutImages.value.map((data, index) => (
          <div
            key={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => handleThumbClick(index)}
          >
            <img src={data.image} alt={`Thumb ${index + 1}`} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutSlide;
