import React from "react";
import { Container, Row, Col } from "reactstrap";
import Layout from "../components/Layout/Layout";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import SolutionImage from "../Images/new-age.jpg";
import RPABannerImage from "../Images/rpa.svg";
import "../css/service.css";

const Service = () => {
  return (
    <Layout>
      <HeroBanner
        titleOne="Robotic Process"
        titleTwo="Automation"
        image={RPABannerImage}
      />
      <Container className="tech-partners">
        <Row className="py-5">
          <Col sm="12" md="3" className="py-5" />
          <Col sm="12" md="9" className="py-5" />
        </Row>
      </Container>
      {/* overview */}
      <Container className="overview-wrapper py-5">
        <h3 className="overview-title text-center py-4">
          The most preferred company in the Middle East to have successfully
          implemented over 100+ processes in 3 years
        </h3>
        <p className="overview-text">
          Robotic Process Automation (RPA) automates routine human tasks by
          creating an interaction with the existing IT architecture without any
          complex system integration. Our team helps you with Innovating,
          Inventing and Automating high-quality business processes to reduce
          operations cost and maximize performance. This can be used across
          different verticals like Finance, Telecom, HR, Sales & Marketing,
          Supply Chain, Customer Service and many more.
        </p>
      </Container>

      {/* solutions title */}
      <Container fluid className="py-5 solutions-title">
        <h3 className="solutions-title-text text-center">
          Technology at the speed of light
        </h3>
      </Container>
      {/* solutions cards */}
      <Container fluid className="solutions-wrapper">
        <Row>
          <Col sm="12" md="6" className="sol-image">
            <img src={SolutionImage} alt="new age" />
          </Col>
          <Col
            sm="12"
            md="6"
            className="sol-cards d-flex align-items-center justify-content-center flex-column px-5"
          >
            <div className="py-3">
              <h3 className="py-2">Personalized Solutions</h3>
              <p>
                RPA works the best when it is customized as per your needs. With
                our custom solutions that meet your business requirements and
                operational capacities, it is sure to produce improved results,
                thus enhancing the business value.
              </p>
            </div>
            <div className="py-3">
              <h3 className="py-2">Cross-Platform Integrations</h3>
              <p>
                RPA&apos;s brilliant integration capability makes them adept at
                cross-platform functions. Our developers configure the bots in a
                manner that triggers them to automatically move data between
                non-integrated applications.
              </p>
            </div>
            <div className="py-3">
              <h3 className="py-2">Highly Secure Solutions</h3>
              <p>
                The implementation of RPA tech may open up the organization to
                the damaging effects of a data breach. However, we ensure that
                you can now reap the rewards of RPA solutions by providing
                built-in security features.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Service;
