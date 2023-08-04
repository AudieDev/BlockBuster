import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "./path/to/image1.jpg";
import image2 from "./path/to/image2.jpg";
import image3 from "./path/to/image3.jpg";

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src={image1}
          alt="Slide 1"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
        <Carousel.Caption>
          {/* Add caption or other content here */}
          <h3>Slide 1</h3>
          <p>Description for Slide 1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={image2}
          alt="Slide 2"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
        <Carousel.Caption>
          {/* Add caption or other content here */}
          <h3>Slide 2</h3>
          <p>Description for Slide 2</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={image3}
          alt="Slide 3"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
        <Carousel.Caption>
          {/* Add caption or other content here */}
          <h3>Slide 3</h3>
          <p>Description for Slide 3</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
