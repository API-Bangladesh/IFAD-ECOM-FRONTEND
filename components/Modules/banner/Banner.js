import React, {useEffect, useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import BannerOne from "../../../public/banner/bannerone.jpg"
import Bannertwo from "../../../public/banner/bannertwo.jpg"
import Image from "next/image"
import axiosClient from "../../../utils/axios";

const Banner = () => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set loading state to true
        setIsLoading(true);

        // Make the API call
        const response = await axiosClient('/banners');
        const result = await response.json();

        // Update the component state with the fetched data
        setData(result);

        // Set loading state to false after the data is fetched
        setIsLoading(false);
      } catch (error) {
        // Set the error state if an error occurs during the API call
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup logic if needed
    };
  }, []);





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
