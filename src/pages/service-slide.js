import React from "react";
import { Container, Row, Col } from "reactstrap";
import Layout from "../components/layout";
import NewAge from "../Images/new-age.jpg";
import "../styles/service-slide.css";
import SectionTitle from "../components/SectionTitle/sectionTitle";
import "../components/SectionTitle/sectionTitle.css";

const ServiceSlide = () => {
  return (
    <Layout>
      <Container fluid>
        <SectionTitle titleText="Services we offer" />
        <sectionTitle titleText="" hello />
        <div className="services-wrapper">
          <div className="service-menu">
            <ul className="service-menu-list">
              <li className="service-menu-item">New Age Technologies</li>
              <li className="service-menu-item active">Security Services</li>
              <li className="service-menu-item">Application Development</li>
              <li className="service-menu-item">Infrastructure Services</li>
              <li className="service-menu-item">BI Solutions</li>
              <li className="service-menu-item">Outsourcing Services</li>
            </ul>
          </div>
          <Row className="h-100 services-inner">
            <Col md="9" className="px-0 service-img">
              <img src={NewAge} alt="new age" />
            </Col>
            <Col md="3" className="px-0">
              <ul className="service-sub-menu-list">
                <li className="service-sub-menu-item">Network Security</li>
                <li className="service-sub-menu-item active">
                  Application & Data Security
                </li>
                <li className="service-sub-menu-item">Cyber Security</li>
                <li className="service-sub-menu-item">
                  End Point & Mobile Security
                </li>
                <li className="service-sub-menu-item">
                  Governance & Compliance
                </li>
                <li className="service-sub-menu-item">
                  Identity & Access Management
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  );
};

export default ServiceSlide;
