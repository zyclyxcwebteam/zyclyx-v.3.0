import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RotatingText from "react-rotating-text";
import Layout from "../components/Layout/Layout";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import MissionImage from "../../static/images/mission.png";
import VisionImage from "../../static/images/vision.png";
import IconDeliver from "../../static/images/c-deliver.svg";
import IconOwnership from "../../static/images/c-val-2.svg";
import IconCommit from "../../static/images/c-val-3.svg";
import IconBuild from "../../static/images/c-val-4.svg";
import IconCreative from "../../static/images/c-val-5.svg";
import IconCount from "../../static/images/c-val-6.svg";

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
      <Container fluid className="hero-banner">
        <Row className="h-100">
          <Col
            sm="12"
            md="6"
            className="title-box d-flex flex-column justify-content-center align-items-center"
          >
            <h2 className="banner-title">
              A Fast-Growing Technology Leader in
            </h2>
            <h2 className="banner-title title-green">
              <RotatingText
                items={[
                  "Artificial Intelligence",
                  "Automation",
                  "BigData",
                  "Cyber Security",
                  "Blockchain",
                  "Internet of Things",
                ]}
              />
            </h2>
          </Col>
          <Col
            sm="12"
            md="6"
            className="img-box d-flex justify-content-center align-items-center"
          >
            <img src={AboutBanner} alt="zyclyx" />
          </Col>
        </Row>
      </Container>
      <Container fluid className="py-5 overview-wrapper">
        <Container className="py-4">
          <p>
            ZYCLYX is the world&apos;s leading automated IT solution provider
            with a diverse range of solutions aimed to enhance your operating
            performance. Our expertise includes Robotic Process Automation, AI,
            OCR, Network Security, Cyber Security, Outsourcing, and other
            services.
          </p>
          <p>
            In 2018, we were established to share our innovative solutions and
            core technology expertise to optimize the customer experience. The
            team at ZYCLYX provides efficient integrated systems after
            meticulous evaluation of risks and opportunities which address both
            short and long term challenges.
          </p>
          <p>
            In collaboration with internationally recognized IT solution
            providers, we have catered to some of the leading brands in
            industries like Banking, Finance, Telecom, and more. We provide
            complete project management support right from conceptualization to
            implementation and assessment.
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
                icon={IconCommit}
                left
              />
              <CoreValueCard
                title="Embrace Creativity"
                text="and innovation"
                icon={IconCreative}
                left
              />
            </Col>
            <Col
              sm="4"
              className="d-flex justify-content-center align-items-center flex-column"
            >
              <h2 className="core-title">Core Values</h2>
            </Col>
            <Col sm="4">
              <CoreValueCard
                title="Take Ownership"
                text="and drive change"
                icon={IconOwnership}
                left={false}
              />
              <CoreValueCard
                title="Build"
                text="Positive Environment"
                icon={IconBuild}
                left={false}
              />
              <CoreValueCard
                title="Make it"
                text="Count"
                icon={IconCount}
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
              <h4 className="text-center">STEP 1</h4>
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
              <h4 className="text-center">STEP 2</h4>
              <p>
                Communicate, set goals, track, report, manage performance and
                remunerate for the execution of a decision.
              </p>
            </div>
          </Col>
          <Col className="px-0 hw-card">
            <div className="h-card-content h-bottom">
              <h4 className="text-center">STEP 3</h4>
              <p>
                Identification and elimination of discrepancie for improvement
                of the organizations&apos;s process.
              </p>
            </div>
            <h3 className="h-title-dark">RECTIFY</h3>
          </Col>
          <Col className="px-0 hw-card">
            <h3 className="h-title-green">ANALYZE</h3>
            <div className="h-card-content h-bottom">
              <h4 className="text-center">STEP 4</h4>
              <p>
                RECTIFY Interpret and comprehend the executed decision for
                analysis of the collected data..
              </p>
            </div>
          </Col>
          <Col className="px-0 hw-card">
            <div className="h-card-content h-bottom">
              <h4 className="text-center">STEP 5</h4>
              <p>
                After project completion, the client is called in to review the
                final product awaiting their feedback on the same before launch.
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
