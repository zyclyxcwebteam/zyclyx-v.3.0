import React, { useState } from "react";
import { Link } from "gatsby";
import {
  Container,
  Col,
  Row,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
import "./OurServices.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import NewAgeBG from "../../../static/images/services/new-age.jpg";
import NetworkBG from "../../../static/images/services/security.jpg";
import RPABG from "../../../static/images/services/rpa.jpg";
import OCRBG from "../../../static/images/services/ocr.jpg";

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
      "Robotic Process Automation automates repetitive human tasks by developing an interface with current IT systems without any complex integrations. We assist you to minimize operating costs and optimize performance by innovating, inventing and automating high-quality business processes.",
    captionOne: "Improve business efficiency with",
    captionTwo: "Robotic Process Automation",
    imgLeft: false,
    key: 2,
    linkTo: "/robotic-process-automation",
  },
  {
    src: OCRBG,
    serviceText:
      "The OCR technology converts virtually any kind of documents, such as scanned paper documents, PDF files, or images captured by a digital camera into machine-readable text data which is editable and searchable. It saves you a lot of time and effort when creating, processing, and repurposing various documents.",
    captionOne: "Adopt smart solutions with",
    captionTwo: "Optical Character Recognition",
    imgLeft: true,
    key: 3,
    linkTo: "/optical-character-recognition",
  },
  {
    src: NetworkBG,
    serviceText:
      "When you have to work in a world of devious cybercriminals, it’s important to ensure that your network and data are safe. We at ZYCLYX use a combination of effective hardware and software solutions to protect you from multiple layers of intrusions and breaches.",
    captionOne: "Protect your Data with",
    captionTwo: "Network Security",
    imgLeft: false,
    key: 4,
    linkTo: "/network-security",
  },
];

const OurServices = () => {
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
            <Col md={6} sm={12} className="service-img d-md-block d-none">
              <img src={item.src} alt="new age" />
            </Col>
          )}
          <Col md={6} sm={12} className="p-1 p-md-5">
            <div className="py-md-5 p-1">
              <h2 className="service-title text-center">
                <span>{item.captionOne}</span>
                <br />
                {item.captionTwo}
              </h2>
              <p className="px-md-5 px-2">{item.serviceText}</p>
              <p className="text-center">
                <Link to={item.linkTo} className="service-link text-center">
                  Discover More
                </Link>
              </p>
            </div>
          </Col>
          {!item.imgLeft && (
            <Col sm={12} md={6} className="service-img d-md-block d-none">
              <img src={item.src} alt="new age" />
            </Col>
          )}
        </Row>
      </CarouselItem>
    );
  });
  return (
    <Container fluid className="service-slider">
      <Container>
        <SectionTitle title="Core Services" />
      </Container>
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
