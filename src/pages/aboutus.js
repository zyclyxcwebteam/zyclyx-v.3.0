import React from "react";
import { Container, Row, Col } from "reactstrap";
import Layout from "../components/Layout/Layout";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import MissionImage from "../images/mission.png";
// import VisionImage from "../images/vision.png";
import IconDeliver from "../images/c-deliver.svg";
// import BannerImage from "../images/about.svg";
import BannerImage from "../images/rpa.svg";
import "../styles/aboutus.css";

// Core Values card
const CoreValueCard = ({ title, text, icon, left }) => {
  return left ? (
    <Row className="c-card">
      <Col sm="8" className="d-flex flex-column justify-content-center px-0">
        <h3 className="c-title text-right">{title}</h3>
        <p className="c-text text-right mb-0">{text}</p>
      </Col>
      <Col sm="4" className="d-flex justify-content-center align-items-center">
        <div className="c-icon">
          <img src={icon} alt={title} />
        </div>
      </Col>
    </Row>
  ) : (
    <Row className="c-card">
      <Col sm="4" className="d-flex justify-content-center align-items-center">
        <div className="c-icon">
          <img src={icon} alt={title} />
        </div>
      </Col>
      <Col sm="8" className="d-flex flex-column justify-content-center px-0">
        <h3 className="c-title text-left">{title}</h3>
        <p className="c-text mb-0 text-left">{text}</p>
      </Col>
    </Row>
  );
};

const aboutus = () => {
  return (
    <Layout>
      <HeroBanner
        titleOne="A Fast-Growing"
        titleTwo="Technology Leader"
        image={BannerImage}
      />
      <Container fluid className="py-5 overview-wrapper">
        <Container className="py-5">
          <p>
            Zyclyx is a leading quality and automotive IT solution provider. We
            provide a robust and innovative portfolio of Products & Solutions to
            enhance operational efficiency. Our team expertise includes areas
            such as New-Age Technologies, Security Services, BI Solutions,
            Infrastructure, Application Development
          </p>
          <p>
            We were established in 2018 to share values, a core competence in
            technology and automation, and an unending spirit of innovation in
            all aspects of corporate life. Our purpose is to deliver functional
            and automated processes in which we operate. We offer services in
            segments like Banking, Retail, Logistics, Telecom, Hospitality,
            Healthcare for the fulfillment of requirements of enterprises.
          </p>
          <p>
            In partnership with globally recognized IT solution providers, we
            have successfully delivered projects for some of the renowned brands
            in the kingdom like Aricscooper, ELM, Bank Albilad, Al Rajhi Bank,
            Alinma Bank, STC.
          </p>
        </Container>
      </Container>
      {/* Mission and Vission */}
      <Container fluid className="py-5 mission-outer">
        <Container className="py-5 mission-inner">
          <Row>
            <Col
              sm="12"
              md="7"
              className="d-flex align-items-center flex-column justify-content-center px-5"
            >
              <h2 className="mission-title">Mission</h2>
              <p className="px-5 py-3 text-center mission-text">
                To offer custom solutions to Clients using unique combination of
                data science, amazing design philosophy, software engineering,
                and architecture.
              </p>
              <div className="mission-links d-flex justify-content-end w-100">
                <button type="button">Mission</button>
                <button type="button">Vision</button>
              </div>
            </Col>
            <Col sm="12" md="5" className="d-flex justify-content-center">
              <img src={MissionImage} alt="mission" />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Core Values */}
      <Container fluid className="py-5 core-values">
        <Container className="py-5">
          <Row>
            <Col sm="4">
              <CoreValueCard
                title="Deliver"
                text="amazing service"
                icon={IconDeliver}
                left
              />
              <CoreValueCard
                title="Commit"
                text="to evolve"
                icon={IconDeliver}
                left
              />
              <CoreValueCard
                title="Embrace Creativity"
                text="and innovation"
                icon={IconDeliver}
                left
              />
            </Col>
            <Col
              sm="4"
              className="d-flex justify-content-center align-items-center flex-column"
            >
              <h2 className="core-title">Core Values</h2>
              <p className="core-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum efficitur orci vitae dapibus interdum. Curabitur quis
                ipsum quis lorem cursus pretium. Etiam lobortis enim vel quam
                placerat pellentesque. Vivamus in elementum felis. Suspendisse
                rhoncus, arcu imperdiet
              </p>
            </Col>
            <Col sm="4">
              <CoreValueCard
                title="Take Ownership"
                text="and drive change"
                icon={IconDeliver}
                left={false}
              />
              <CoreValueCard
                title="Build"
                text="Positive Environment"
                icon={IconDeliver}
                left={false}
              />
              <CoreValueCard
                title="Make it"
                text="Count"
                icon={IconDeliver}
                left={false}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <SectionTitle title="How we do it" />
      </Container>
    </Layout>
  );
};

export default aboutus;
