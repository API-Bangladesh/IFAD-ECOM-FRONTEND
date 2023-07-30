import React, {Fragment, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {FreeMode, Navigation, Thumbs} from "swiper";
import {getStoragePath} from "../../utils/helpers";

const ImageSection = ({inventory}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    let thumbnailImage = '';
    let galleryImages = [];

    if (inventory?.image && inventory?.inventory_images) {
        thumbnailImage = inventory?.image;
        galleryImages = [...inventory?.inventory_images];
    } else {
        thumbnailImage = inventory?.product?.image;
        galleryImages = [...inventory?.product?.product_images];
    }

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
                {thumbnailImage && (
                    <SwiperSlide>
                        <img src={getStoragePath(`product/${thumbnailImage}`)} alt="product-img-two"
                             className="single-object"/>
                    </SwiperSlide>
                )}

                {galleryImages.map((galleryImage, key) => (
                    <SwiperSlide key={key}>
                        <img src={getStoragePath(`product/${galleryImage?.image}`)} alt="product-img-two"
                             className="single-object"/>
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
                {galleryImages.map((galleryImage, key) => (
                    <SwiperSlide key={key}>
                        <img src={getStoragePath(`product/${galleryImage?.image}`)} alt="product-img-two"
                             className="single-object"/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Fragment>
    );
}
export default ImageSection