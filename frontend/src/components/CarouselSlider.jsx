import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel, Button } from "react-bootstrap";

import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.jpg";

const CarouselSlider = () => {
  let navigate = useNavigate();

  const link_pusher = () => {
    navigate("/shop");
  };

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Image1} alt="First slide" />
          <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            <p>
              <Button onClick={link_pusher} variant="dark">
                Shop Now
              </Button>{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Image2} alt="Second slide" />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3> */}
            <p>
              {" "}
              <Button onClick={link_pusher} variant="dark">
                Shop Now
              </Button>{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Image3} alt="Third slide" />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3> */}
            <p>
              <Button onClick={link_pusher} variant="dark">
                Shop Now
              </Button>{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
