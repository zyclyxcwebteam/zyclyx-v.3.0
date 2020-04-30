import React from "react";
import { Container, Row, Col } from "reactstrap";
import Layout from "../components/layout";
import InformationSecuritySVG from "../images/information_security.svg";
import "../styles/service.css";

const Service = () => {
  return (
    <Layout>
      <Container fluid className="hero-banner">
        <Row className="h-100">
          <Col
            md="3"
            className="hero-banner-title d-flex justify-content-center align-items-center"
          >
            <h2 className="title-content text-center">
              Application and Data Security
            </h2>
          </Col>
          <Col md="9" className="hero-banner-img px-0">
            <img src={InformationSecuritySVG} alt="info" />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Container className="overview py-5">
          <Row className="py-5">
            <Col
              md="4 px-0"
              className="d-flex justify-content-center align-items-center overview-title-card"
            >
              <h3 className="text-center overview-title-text">
                Protecting your important assets with the best in security
              </h3>
            </Col>
            <Col md="8" className="d-flex align-items-center px-5">
              <p className="text-justify overview-content">
                Application protection has become an important consideration for
                organizations globally in order to protect users and data.
                Application security is the method by which devices are made
                safer by identifying, repairing and improving device security.
                There are plenty of resources available to protect various
                elements of your code portfolio, from locking modifications to
                accidental risk assessment to coding, testing solutions for
                encryption, and auditing permissions and access rights.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </Layout>
  );
};

export default Service;
