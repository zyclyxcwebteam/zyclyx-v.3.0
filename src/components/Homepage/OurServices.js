import React, { useState } from "react";
import { Link } from "gatsby";

// import Img from "gatsby-image";
import {
  Container,
  Col,
  Row,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import NewAgeBG from "../../images/new-age.jpg";
import NetworkBG from "../../images/security.jpg";
import RPABG from "../../images/rpa.jpg";
import OCRBG from "../../images/ocr.jpg";

const items = [
  {
    src: NewAgeBG,
    serviceText:
      "Artificial intelligence is a branch that allows creating smart machines based on the principle of human intelligence. Our team of AI experts works on machines to help them mimic and execute tasks, from the simplest to complex. It aims to include learning, reasoning, and perception.",
    captionOne: "Building future with",
    captionTwo: "Artificial Intelligence",
    imgLeft: true,
    key: 1,
    linkTo: "/artificial-intelligence",
  },
  {
    src: RPABG,
    serviceText:
      "Artificial intelligence is a branch that allows creating smart machines based on the principle of human intelligence. Our team of AI experts works on machines to help them mimic and execute tasks, from the simplest to complex. It aims to include learning, reasoning, and perception.",
    captionOne: "Building future with",
    captionTwo: "Robotic Process Automation",
    imgLeft: false,
    key: 2,
    linkTo: "/robotic-process-automation",
  },
  {
    src: OCRBG,
    serviceText:
      "Artificial intelligence is a branch that allows creating smart machines based on the principle of human intelligence. Our team of AI experts works on machines to help them mimic and execute tasks, from the simplest to complex. It aims to include learning, reasoning, and perception.",
    captionOne: "Building future with",
    captionTwo: "Optical Character Recognition",
    imgLeft: true,
    key: 3,
    linkTo: "/optical-character-recognition",
  },
  {
    src: NetworkBG,
    serviceText:
      "Artificial intelligence is a branch that allows creating smart machines based on the principle of human intelligence. Our team of AI experts works on machines to help them mimic and execute tasks, from the simplest to complex. It aims to include learning, reasoning, and perception.",
    captionOne: "Building future with",
    captionTwo: "Network Security",
    imgLeft: false,
    key: 4,
    linkTo: "/network-security",
  },
];

const [activeIndex, setActiveIndex] = useState(0);
const [animating, setAnimating] = useState(false);

const next = () => {
  if (animating) return;
  const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
  setActiveIndex(nextIndex);
};

const previous = () => {
  if (animating) return;
  const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
  setActiveIndex(nextIndex);
};

const goToIndex = newIndex => {
  if (animating) return;
  setActiveIndex(newIndex);
};

const slides = items.map(item => {
  return (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
      className="service-item"
    >
      <Row>
        {item.imgLeft && (
          <Col className="service-img">
            <img src={item.src} alt="new age" />
          </Col>
        )}
        <Col className="p-5">
          <div className="py-5">
            <h2 className="service-title text-center">
              <span>{item.captionOne}</span>
              <br />
              {item.captionTwo}
            </h2>
            <p className="px-5">{item.serviceText}</p>
            <p className="text-center">
              <Link to={item.linkTo} className="text-center">
                Read More
              </Link>
            </p>
          </div>
        </Col>
        {!item.imgLeft && (
          <Col className="service-img">
            <img src={item.src} alt="new age" />
          </Col>
        )}
      </Row>
    </CarouselItem>
  );
});

const OurServices = () => {
  return (
    <Container fluid className="service-slider">
      <SectionTitle title="Core Services" />
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
          className="s-banner-indicators"
        />
        {slides}
      </Carousel>
    </Container>
  );
};

export default OurServices;
