import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer py-3">
      <Container fluid className="footer-contact pt-4">
        <ul className="contact-links">
          <li>
            <FontAwesomeIcon icon="phone-alt" />
            <a href="tel:+91 40 23549363">(+91) 40 23549363</a>
          </li>
          <li>
            <FontAwesomeIcon icon="at" />
            <a href="mailto:info@zyclyx.com">info@zyclyx.com</a>
          </li>
          <li>
            <FontAwesomeIcon icon="map-marker-alt" />
            <a href="https://www.google.com/maps/place/ZYCLYX+CONSULTING+SERVICES+PVT.LTD/@17.424933,78.438608,17z/data=!4m5!3m4!1s0x0:0xa07cad29e31d4876!8m2!3d17.4249331!4d78.4386078?hl=en-US">
              Visit us
            </a>
          </li>
        </ul>
      </Container>
      <Container fluid className="pt-3">
        <Row>
          <Col sm="12" md="4" className="social-media px-0">
            <ul className="py-1">
              <li>
                <a href="https://www.facebook.com/Zyclyx.IT" title="facebook">
                  <FontAwesomeIcon icon={["fab", "facebook"]} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/zyclyx_it" title="instagram">
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Zyclyx_IT" title="twitter">
                  <FontAwesomeIcon icon={["fab", "twitter"]} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zyclyx-consulting-pvt-ltd"
                  title="Linkedin"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </a>
              </li>
            </ul>
          </Col>
          <Col sm="12" md="4">
            <p className="m-0 text-center">
              &copy;2020 ZYCLYX. All rights reserved
            </p>
          </Col>
          <Col sm="12" md="4" className="privacy px-0">
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
