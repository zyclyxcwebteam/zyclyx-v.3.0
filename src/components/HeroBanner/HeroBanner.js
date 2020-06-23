import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./HeroBanner.css";

const HeroBanner = ({ title, image }) => {
  return (
    <Container fluid className="hero-banner">
      <Row className="">
        <Col
          sm="12"
          md="6"
          className="title-box d-flex flex-column justify-content-center align-items-center"
        >
          <h2 className="banner-title">{title}</h2>
        </Col>
        <Col
          sm="12"
          md="6"
          className="img-box d-flex justify-content-center align-items-center"
        >
          <img src={image} alt={title} />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroBanner;
