import React, {Fragment, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {FreeMode, Navigation, Thumbs} from "swiper";
import Image from "next/image";
import ImageOne from "../../public/products/product3.png";
import ImageTwo from "../../public/products/product1.png";
import ImageThree from "../../public/products/product4.png";

const ImageSection = ({inventory}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <Fragment>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{swiper: thumbsSwiper}}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {inventory?.inventory_images
                && inventory.inventory_images.map((image, key) => (
                    <SwiperSlide key={key}>
                        <Image src={ImageTwo} alt="product-img-two" className="single-object"/>
                    </SwiperSlide>
                ))}
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
                {inventory?.inventory_images
                && inventory.inventory_images.map((image, key) => (
                    <SwiperSlide key={key}>
                        <Image src={ImageTwo} alt="product-img-two" className="single-object-demo"/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Fragment>
    );
}
export default ImageSection