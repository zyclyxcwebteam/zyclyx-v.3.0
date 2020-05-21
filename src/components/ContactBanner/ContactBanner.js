import React from "react";
// import { Link } from "gatsby";
import { Container, Row, Col } from "reactstrap";
import Button from "../Button/Button";
import "./ContactBanner.css";
import WorldMapSVG from "../../Images/map.svg";

const ContactBanner = () => {
  return (
    <Container fluid className="contact-banner py-5">
      <Row>
        <Col className="d-flex justify-content-center flex-column align-items-center">
          <h2 className="contact-b-title">Get in touch with us</h2>
          {/* <Link to="/">Get in touch</Link> */}
          <Button />
        </Col>
        <Col className="d-flex justify-content-center">
          <img src={WorldMapSVG} alt="world map" />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactBanner;
