import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContactBanner.css";
import MapImage from "../../../static/images/c-map.svg";

const ContactBanner = () => {
  return (
    <Container fluid className="contact-banner py-5">
      <Row>
        <Col className="d-flex justify-content-center flex-column align-items-center">
          <h2 className="contact-b-title py-2">Get in touch with us</h2>
          <Link to="/contactus" className="button d-flex align-items-center">
            Let&apos;s Connect
            <FontAwesomeIcon icon="arrow-right" className="btn-icon" />
          </Link>
        </Col>
        <Col className="d-flex justify-content-center">
          <img src={MapImage} alt="world map" />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactBanner;
