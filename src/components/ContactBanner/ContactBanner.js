import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContactBanner.css";
import MapImage from "../../../static/images/c-map.svg";

const ContactBanner = () => {
  return (
    <Container fluid className="contact-banner py-3 py-md-5">
      <Row>
        <Col
          sm={12}
          md={6}
          className="d-flex justify-content-center flex-row flex-md-column align-items-center"
        >
          <div className="d-flex flex-column align-items-center">
            <h2 className="section-title green-text py-2">
              Get in touch with us
            </h2>
            <Link to="/contactus" className="button d-flex align-items-center">
              Let&apos;s Connect
              <FontAwesomeIcon icon="arrow-right" className="btn-icon" />
            </Link>
          </div>
        </Col>
        <Col
          sm={12}
          md={6}
          className="d-flex justify-content-center py-3 py-md-0"
        >
          <img src={MapImage} alt="contact us" />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactBanner;
