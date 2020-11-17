import React from "react";
import Slider from "react-slick";
// import Img from "gatsby-image";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
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
          <img src="" alt="bayan cb" title="Bayan CB" className="client" />
        </div>
      </Slider>
    </>
  );
};

export default Clients;
