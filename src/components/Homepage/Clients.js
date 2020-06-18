import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
// import Img from "gatsby-image";
import Slider from "react-slick";
import albilad from "../../../static/images/clients/albilad.png";
import alinma from "../../../static/images/clients/alinma.png";
import bayancb from "../../../static/images/clients/bayancb.png";
import elm from "../../../static/images/clients/elm.png";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
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
      </Slider>
    </>
  );
};

export default Clients;
