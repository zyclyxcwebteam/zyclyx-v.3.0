import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/Layout/Layout";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import MissionImage from "../../static/images/mission.png";
import VisionImage from "../../static/images/vision.png";
import IconDeliver from "../../static/images/c-deliver.svg";
import AboutBanner from "../../static/images/about2.svg";
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
  const [showMission, setShowMission] = useState(true);
  return (
    <Layout showBanner>
      <HeroBanner
        title="A Fast-Growing Technology Leader"
        image={AboutBanner}
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
              <h2 className="mission-title">
                {showMission ? "Mission" : "Vision"}
              </h2>
              <p className="px-5 py-3 text-center mission-text">
                {showMission
                  ? `To offer custom solutions to Clients using unique combination of
                data science, amazing design philosophy, software engineering,
                and architecture.`
                  : `To provide diverse solutions in the area of Futuristic IT development with a strong commitment towards corporate citizenship and sustainability.

                  `}
              </p>
              <div className="mission-links d-flex justify-content-end w-100">
                <button
                  type="button"
                  className={`m-btn d-flex align-items-center ${
                    !showMission && "m-btn-active"
                  }`}
                  onClick={() => setShowMission(!showMission)}
                >
                  <FontAwesomeIcon icon="arrow-left" className="mr-2" />
                  Mission
                </button>
                <button
                  type="button"
                  className={`m-btn d-flex align-items-center ${
                    showMission && "m-btn-active"
                  }`}
                  onClick={() => setShowMission(!showMission)}
                >
                  Vision
                  <FontAwesomeIcon icon="arrow-right" className="ml-2" />
                </button>
              </div>
            </Col>
            <Col sm="12" md="5" className="d-flex justify-content-center">
              <img
                src={showMission ? MissionImage : VisionImage}
                alt="mission"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Core Values */}
      <Container fluid className="py-3 core-values">
        <Container className="py-3">
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
      <Container className="py-5">
        <SectionTitle title="How we do it" />

        <Row className="h-wrapper">
          <Col className="px-0 hw-card">
            <div className="h-card-content h-bottom">
              <h4>STEP 1</h4>
              <p>
                Strategize, document and decipher - goals, objectives,
                information and financial forecasts for building the right
                business plan.
              </p>
            </div>
            <h3 className="h-title-dark plan">PLAN</h3>
          </Col>
          <Col className="px-0 hw-card">
            <h3 className="h-title-green">EXECUTE</h3>
            <div className="h-card-content h-bottom">
              <h4>STEP 2</h4>
              <p>
                Strategize, document and decipher - goals, objectives,
                information and financial forecasts for building the right
                business plan.
              </p>
            </div>
          </Col>
          <Col className="px-0 hw-card">
            <div className="h-card-content h-bottom">
              <h4>STEP 3</h4>
              <p>
                Strategize, document and decipher - goals, objectives,
                information and financial forecasts for building the right
                business plan.
              </p>
            </div>
            <h3 className="h-title-dark">RECTIFY</h3>
          </Col>
          <Col className="px-0 hw-card">
            <h3 className="h-title-green">ANALYZE</h3>
            <div className="h-card-content h-bottom">
              <h4>STEP 4</h4>
              <p>
                Strategize, document and decipher - goals, objectives,
                information and financial forecasts for building the right
                business plan.
              </p>
            </div>
          </Col>
          <Col className="px-0 hw-card">
            <div className="h-card-content h-bottom">
              <h4>STEP 5</h4>
              <p>
                Strategize, document and decipher - goals, objectives,
                information and financial forecasts for building the right
                business plan.
              </p>
            </div>
            <h3 className="h-title-dark feedback">FEEDBACK</h3>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default aboutus;
