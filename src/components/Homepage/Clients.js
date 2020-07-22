import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
// import Img from "gatsby-image";
import Slider from "react-slick";
import albilad from "../../../static/images/clients/1.jpg";
import alinma from "../../../static/images/clients/5.jpg";
import bayancb from "../../../static/images/clients/3.jpg";
import elm from "../../../static/images/clients/6.jpg";
import stcs from "../../../static/images/clients/9.png";

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

const Clients = () => {
  return (
    <>
      {/*  eslint-disable-next-line react/jsx-props-no-spreading */}
      <Slider {...settings}>
        <div>
          <img src={albilad} alt="" className="client" />
        </div>
        <div>
          <img src={alinma} alt="" className="client" />
        </div>
        <div>
          <img src={bayancb} alt="" className="client" />
        </div>
        <div>
          <img src={elm} alt="" className="client" />
        </div>
        <div>
          <img src={stcs} alt="" className="client" />
        </div>
      </Slider>
    </>
  );
};

export default Clients;
