import React, {useEffect, useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import {fetchBanners} from "../../../services/BannerServices";

const Banner = () => {

  const [banners, setBanners] = useState([]);

  // fetch
  useEffect(() => {
    fetchBanners().then((response) => {
      if (response?.data) {
        setBanners(response.data);
      }
    });
  }, []);

  return (
      <div className="mb-3">
        <Carousel fade>
          {banners.map(((banner, key) =>
                  <Carousel.Item key={key}>
                    <img
                        src={banner.image}
                        alt="Picture of the author"
                        className="banner-img-size"
                    />
                  </Carousel.Item>
          ))}
        </Carousel>
      </div>

  );
};

export default Banner;
