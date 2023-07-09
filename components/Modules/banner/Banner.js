import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import BannerOne from "../../../public/banner/bannerone.jpg"
import Bannertwo from "../../../public/banner/bannertwo.jpg"
import Image from "next/image"

const Banner = () => {
  return (
    <div className="mb-3">
      <Carousel fade>
        <Carousel.Item>
          <Image
            src={BannerOne}
            alt="Picture of the author"
            className="banner-img-size"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={Bannertwo}
            alt="Picture of the author"
            className="banner-img-size"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={Bannertwo}
            alt="Picture of the author"
            className="banner-img-size"
          />


        </Carousel.Item>
      </Carousel>
    </div>

  );
};

export default Banner;
