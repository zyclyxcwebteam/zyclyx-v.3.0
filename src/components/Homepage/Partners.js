import React from "react";
import Slider from "react-slick";
import Blueprism from "../../../static/images/clients/4.jpg";
import UIpath from "../../../static/images/clients/7.jpg";
import Automation from "../../../static/images/clients/2.jpg";
import Microsoft from "../../../static/images/clients/8.png";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Partners = () => {
  return (
    <>
      {/*  eslint-disable-next-line react/jsx-props-no-spreading */}
      <Slider {...settings}>
        <div>
          <img src={Blueprism} alt="" className="client" />
        </div>
        <div>
          <img src={UIpath} alt="" className="client" />
        </div>
        <div>
          <img src={Automation} alt="" className="client" />
        </div>
        <div>
          <img src={Microsoft} alt="" className="client" />
        </div>
      </Slider>
    </>
  );
};

export default Partners;
