import React from "react";
import Slider from "react-slick";
import Blueprism from "../../../static/images/clients/blue.png";
import UIpath from "../../../static/images/clients/uipath.png";
import Automation from "../../../static/images/clients/automation.jpg";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
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
          <img src={UIpath} alt="" className="client" />
        </div>
      </Slider>
    </>
  );
};

export default Partners;
