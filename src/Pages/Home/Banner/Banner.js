import React from "react";
import {Carousel} from "react-bootstrap";

const slideOne = "https://i.ibb.co/yQwYtMx/h5-slider-background-img-1.jpg";
const slideTwo = "https://i.ibb.co/JKV0cTp/h5-slider-background-img-2.jpg";
const slideThree = "https://i.ibb.co/9HCH9F5/h5-slider-background-img-3.jpg";
const Banner = () => {
  return (
    <Carousel className="mt-2">
      <Carousel.Item interval={1500}>
        <img className="d-block w-100" src={slideOne} alt="First slide" />
        <Carousel.Caption>
          <h3>Prepare For the race</h3>
          <p>Make Your Self Fit For The Race Of Life.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img className="d-block w-100" src={slideTwo} alt="Second slide" />
        <Carousel.Caption>
          <h3>Perfect Sports Items</h3>
          <p>Get The Best Quality Sports Items From World Class Brands.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slideThree} alt="Third slide" />
        <Carousel.Caption>
          <h3>Decisive Strong Looks</h3>
          <p>
            Enjoy The Beautiful Look Of Fitness With Us To Find The best Of
            yourself.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
