import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import icon from "../../public/assets/icons/arrow-fa.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import arrowback from "../../public/assets/icons/arrow-ba.svg";
// import "./styles.css";

// import required modules
import _4 from "../../public/assets/images/4.jpg";
import _5 from "../../public/assets/images/5.jpg";
import _6 from "../../public/assets/images/6.jpg";
// Import Swiper styles
import "swiper/css";
const Carousel = ({ images }: { images: any }) => {
  // const images = [_4, _5, _6];
  const swiperRef = useRef();
  const [indexImg, setIndexImg] = useState(1);
  return (
    <>
      <div className="flex px-[4rem] w-full justify-center sm:hidden ">
        <div className="flex gap-[1.5rem] max-w-[1300px] w-full py-[5rem] bg-primary rounded-[3rem] ">
          <div className="cursor-pointer w-[19%] rounded-r-[3rem] overflow-hidden relative before:absolute before:w-full before:h-full before:bg-[#000]/[0.15] before:z-[1]">
            <Image
              src={images[Math.abs((indexImg % 3) - 1)] || ""}
              width={1000}
              height={720}
              className="object-cover h-full"
              alt=""
            />
            <span
              onClick={() => setIndexImg((prev) => (prev == 0 ? 2 : prev - 1))}
              className="absolute z-[2] w-[7.3rem] bg-[#fff] rounded-full left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] h-[7.3rem] middle"
            >
              <Image src={arrowback} className="" alt="" />
            </span>
          </div>
          <div className="w-[62%] aspect-[1.3355/1] rounded-[3rem] overflow-hidden">
            <Image
              src={images[Math.abs(indexImg) % 3] || ""}
              width={1000}
              height={720}
              className="object-cover h-full"
              alt=""
            />
          </div>
          <div className="cursor-pointer w-[19%] rounded-l-[3rem] overflow-hidden relative before:absolute before:w-full before:h-full before:bg-[#000]/[0.15] before:z-[1]">
            <Image
              src={
                images[
                  Math.abs((indexImg % 3) + 1) == 3
                    ? 0
                    : Math.abs((indexImg % 3) + 1)
                ] || ""
              }
              width={1000}
              height={720}
              alt=""
              className="object-cover h-full"
            />
            <span
              onClick={() => setIndexImg((prev) => (prev == 2 ? 0 : prev + 1))}
              className="absolute z-[2] w-[7.3rem] bg-[#fff] rounded-full left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] h-[7.3rem] middle"
            >
              <Image src={arrowback} className="rotate-[180deg]" alt="" />
            </span>
          </div>
        </div>
      </div>
      <div className="sm:flex hidden flex-col gap-[.9rem] px-[2rem]">
        <Image
          src={images[0]}
          width={1000}
          height={720}
          className="object-cover rounded-[1.25rem]"
          alt=""
        />
        <Image
          src={images[1]}
          width={1000}
          height={720}
          className="object-cover rounded-[1.25rem]"
          alt=""
        />
        <Image
          src={images[2]}
          width={1000}
          height={720}
          className="object-cover rounded-[1.25rem]"
          alt=""
        />
      </div>
    </>
  );
};

export default Carousel;
