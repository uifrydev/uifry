import { FunctionComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
// import 'swiper/components/navigation/navigation.min.css';
import { SwiperOptions } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation]);

type Slide = {
  id: number;
  src: string;
  alt: string;
  width: string;
};

type Props = {
  slides: Slide[];
};
import _4 from "../../public/assets/images/4.jpg";
import _5 from "../../public/assets/images/5.jpg";
import _6 from "../../public/assets/images/6.jpg";
import Image from "next/image";
const Swipper = () => {
  const swiperParams: SwiperOptions = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    loop: true, // enable looping
    

  };
  const slides = [
    {
      id: 1,
      src: _4,
      alt: "Image 1",
      width: "30%",
    },
    {
      id: 2,
      src: _5,
      alt: "Image 2",
      width: "100%",
    },
    {
      id: 3,
      src: _6,
      alt: "Image 3",
      width: "30%",
    },
  ];

  return (
    <div style={{ position: "relative", }}>
      <Swiper {...swiperParams}>
        {slides.map((slide,index) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={slide.src}
              alt={slide.alt}
              width={Number(slide.width)}
              className={`${index==1?"w-[40rem]":'w-[10remp]'} object-cover`}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev" style={{ left: "30px" }} />
        <div className="swiper-button-next" style={{ right: "30px" }} />
      </Swiper>
    </div>
  );
};

export default Swipper;
