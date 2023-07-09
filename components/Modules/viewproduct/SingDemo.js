import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";
import ImageOne from "../../../public/products/product3.png";
import ImageTwo from "../../../public/products/product1.png";
import ImageThree from "../../../public/products/product4.png";

const SingDemo = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image src={ImageOne} alt="product-img-one" className="single-object"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageTwo} alt="product-img-two" className="single-object"/>  
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageThree} alt="product-img-three" className="single-object"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageOne} alt="product-img-four" className="single-object"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageTwo} alt="product-img-five" className="single-object"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageThree} alt="product-img-six" className="single-object"/>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={ImageOne} alt="product-img-seven" className="single-object-demo"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageTwo} alt="product-img-eight" className="single-object-demo"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageThree} alt="product-img-nine" className="single-object-demo"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageOne} alt="product-img-ten" className="single-object-demo"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageTwo} alt="product-img-eleven" className="single-object-demo"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageThree} alt="product-img-twelve" className="single-object-demo"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default SingDemo