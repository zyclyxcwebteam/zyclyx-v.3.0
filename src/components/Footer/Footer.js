import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer py-4">
      <Container fluid>
        <Row className="d-flex align-items-center py-2">
          <Col sm="12" md="3" className="social-media px-0">
            <ul className="py-1">
              <li>
                <a
                  href="https://www.facebook.com/Zyclyx.IT"
                  title="facebook"
                  target="__blank"
                >
                  <FontAwesomeIcon icon={["fab", "facebook"]} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/zyclyx_it"
                  title="instagram"
                  target="__blank"
                >
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Zyclyx_IT"
                  title="twitter"
                  target="__blank"
                >
                  <FontAwesomeIcon icon={["fab", "twitter"]} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zyclyx-consulting-pvt-ltd"
                  title="Linkedin"
                  target="__blank"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </a>
              </li>
            </ul>
          </Col>
          <Col sm="12" md="3" className="pl-xl-5 mt-md-0 mt-3">
            <h4 className="green-text">
              <FontAwesomeIcon icon="phone-alt" className="mr-2" />
              Contact Us
            </h4>
            <ul className="contact-links">
              <li className="py-1">
                <FontAwesomeIcon icon="angle-right" className="green-text" />
                <a className="ml-3" href="tel:+91 40 23549363">
                  (+91) 40 23549363
                </a>
              </li>
              <li className="py-1">
                <FontAwesomeIcon icon="angle-right" className="green-text" />
                <a className="ml-3" href="tel:+91 733 755 7310">
                  (+91) 733 755 7310
                </a>
              </li>

              <li className="py-1">
                <FontAwesomeIcon icon="angle-right" className="green-text" />
                <a className="ml-3" href="tel:+1 2134604609">
                  (+1) 2134604609 (Ext: 103)
                </a>
              </li>
            </ul>
          </Col>
          <Col sm="12" md="3" className="align-self-start pl-xl-5 mt-md-0 mt-3">
            <h4 className="green-text">
              <FontAwesomeIcon icon="envelope" className="mr-2" />
              Email
            </h4>
            <ul className="contact-links">
              <li className="py-1">
                <FontAwesomeIcon icon="angle-right" className="green-text" />
                <a className="ml-3" href="mailto:info@zyclyx.com">
                  info@zyclyx.com
                </a>
              </li>
            </ul>
          </Col>
          <Col sm="12" md="3" className="privacy px-0">
            <ul className="py-1 ml-auto">
              <li>
                <a href="/privacy-policy" title="Privacy">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/terms-conditions" title="Terms">
                  Terms
                </a>
              </li>
              <li>
                <a href="/sitemap" title="sitemap">
                  Sitemap
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <p className="m-0 copy-right text-center text-muted">
          &copy;2020 ZYCLYX. All rights reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
