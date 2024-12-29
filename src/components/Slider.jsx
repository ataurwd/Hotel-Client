import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <div>
      <Carousel autoPlay showThumbs className="" showStatus={false} showIndicators={true}>
        <div>
          <img src="https://i.ibb.co.com/HXkWHYz/01.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co.com/2n9qdLh/02.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co.com/gPR09Rj/03.png" />
        </div>
        <div>
          <img src="https://i.ibb.co.com/8720P7S/04.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co.com/6JxXVG8/05.png" />
        </div>
        <div>
          <img src="https://i.ibb.co.com/7SC4vrD/06.png" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
