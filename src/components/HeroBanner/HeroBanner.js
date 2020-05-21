import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./HeroBanner.css";
import RPABannerImage from "../../Images/rpa.svg";

const HeroBanner = ({ titleOne, titleTwo }) => {
  return (
    <Container fluid className="hero-banner">
      <Row className="">
        <Col className="title-box">
          <h2 className="banner-title banner-title-one">{titleOne}</h2>
          <h2 className="banner-title banner-title-two">{titleTwo}</h2>
        </Col>
        <Col className="img-box">
          <img src={RPABannerImage} alt="robotic process automation" />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroBanner;
