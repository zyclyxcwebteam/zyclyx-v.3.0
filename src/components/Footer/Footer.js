import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer py-5">
      <Container fluid className="footer-contact pt-3">
        <ul className="contact-links">
          <li>
            <FontAwesomeIcon icon="phone-alt" />
            <a href="/">(+91) 40 23549363</a>
          </li>
          <li>
            <FontAwesomeIcon icon="at" />
            <a href="/">info@zyclyx.com</a>
          </li>
          <li>
            <FontAwesomeIcon icon="map-marker-alt" />
            <a href="/">Zyclyx is here</a>
          </li>
        </ul>
      </Container>
      <Container fluid className="pt-3">
        <Row>
          <Col className="social-media px-0">
            <ul className="py-1">
              <li>
                <a href="/" title="facebook">
                  <FontAwesomeIcon icon={["fab", "facebook"]} />
                </a>
              </li>
              <li>
                <a href="/" title="instagram">
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>
              </li>
              <li>
                <a href="/" title="twitter">
                  <FontAwesomeIcon icon={["fab", "twitter"]} />
                </a>
              </li>
              <li>
                <a href="/" title="Linkedin">
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <p className="m-0 text-center">
              &copy;2018-2020 ZYCLYX. All rights reserved
            </p>
          </Col>
          <Col className="privacy px-0">
            <ul className="py-1 ml-auto">
              <li>
                <a href="/" title="Privacy">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/" title="Terms">
                  Terms
                </a>
              </li>
              <li>
                <a href="/" title="sitemap">
                  Sitemap
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
