/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Layout from "../components/Layout/Layout";
import Clients from "../components/Homepage/Clients";
import Partners from "../components/Homepage/Partners";
import ImageCarousel from "../components/Homepage/ImageCarousel";
import OurServices from "../components/Homepage/CoreServices/OurServices";
import Industries from "../components/Homepage/Industries/Industries";
import "../css/home.css";
import "../components/Homepage/Clients.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default () => {
  const [showClients, setShowClients] = useState(true);
  return (
    <>
      <Layout
        showBanner
        active="home"
        title="Providing IT Services in India & USA - RPA, AI, OCR & Digital Marketing | ZYCLYX"
        description="ZYCLYX is a purpose-driven organization that promises phenomenal Artificial Intelligence, Robotic Process Automation, Staffing Solutions, Web App Development, Digital Marketing Services and IT services in India and USA"
        keywords="Zyclyx, Zyclyx services, AI Services, RPA Services, IT Services, Staffing Solutions, Digital Marketing, Web App Development, India, USA"
      >
        <ImageCarousel />
        <Container fluid className="overview py-md-5 py-3">
          <Container>
            <Row>
              <Col className="col-lg-3 col-12 d-flex justify-content-center align-items-center text-center">
                <div>
                  <h2 className="text-center  section-title">
                    <span className="d-block text-center text-content green-text">
                      Welcome to
                    </span>
                    <span className="brand">ZYCLYX</span>
                  </h2>
                </div>
              </Col>
              <Col className="col-lg-9 col-12 d-flex align-items-center">
                <p className="mb-0 text-content">
                  A global automation technology provider leading the industry
                  with innovative ideas. With our agile collaborative approach
                  our team strives to provide custom solutions. These solutions
                  together with our next-gen technologies enable the businesses
                  to outperform their competition. Our deep expertise in the
                  area of process automation, infrastructure and application
                  management is our strategic asset. Whether you want to improve
                  your business efficiency or accelerate revenue growth, ZYCLYX
                  will go an extra mile to get you there.
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
        <OurServices />

        <Industries />
        <Container fluid className="stats-wrapper py-2 py-md-5">
          <Container className=" py-2 py-md-5">
            <Row>
              <Col sm={12} md={4}>
                <div className="d-flex justify-content-center flex-column align-items-center">
                  <h3 className="stat-title text-center">20+</h3>
                  <p className="stat-caption text-center">Clients Served</p>
                </div>
              </Col>
              <Col sm={12} md={4}>
                <div className="d-flex justify-content-center flex-column align-items-center">
                  <h3 className="stat-title text-center">40+</h3>
                  <p className="stat-caption text-center">Projects Delivered</p>
                </div>
              </Col>
              <Col sm={3} md={4}>
                <div className="d-flex justify-content-center flex-column align-items-center">
                  <h3 className="stat-title text-center">350+</h3>
                  <p className="stat-caption text-center">
                    Processess Automated
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        {/* Proof of Concept */}
        <Container fluid className="py-md-5 py-3 poc-wrapper">
          <Container>
            <h2 className="text-center section-title py-2">
              <span className="text-center text-content green-text d-block">
                Fostering your trust in us with
              </span>
              <span>Free Proof of Concept</span>
            </h2>
            <p className="text-content mb-0">
              We believe in developing a trusting partnership with our clients
              by offering free proof of concept as part of our value added
              services. With this we demonstrate our work potential by creating
              an advanced prototype of the project. This allows you to checkout
              its feasibility in your business process, hence optimizing the
              experience.
            </p>
            <Row>
              <Col sm="12" className="mx-auto">
                <Row className="py-md-4 py-2 mx-auto proof-row">
                  <Col md="4" sm="4" className="p-0 d-flex">
                    <Row className="mx-auto">
                      <Col sm="3" className="p-0">
                        <h2 className="poc-letter">F</h2>
                      </Col>
                      <Col sm="8" className="poc-content p-0">
                        <h3>Forecast</h3>
                        <p className="mb-0">
                          Act as a tool to forecast the feasibility of the
                          projects.
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="4" sm="4" className="p-0">
                    <Row className="mx-auto">
                      <Col sm="3" className="p-0">
                        <h2 className="poc-letter">R</h2>
                      </Col>
                      <Col sm="8" className="poc-content p-0">
                        <h3>Report</h3>
                        <p className="mb-0">
                          Provides a complete report on project evaluation
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="4" sm="4" className="p-0">
                    <Row className="mx-auto">
                      <Col sm="3" className="p-0">
                        <h2 className="poc-letter">C</h2>
                      </Col>
                      <Col sm="8" className="p-0 poc-content">
                        <h3>Cost Effective</h3>
                        <p className="mb-0">
                          Saves your businesses time and money
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Container>
        {/* our clients */}
        <Container className="clients">
          <div className="title-buttons d-flex justify-content-center align-items-center pb-5">
            <button
              type="button"
              className={`t-btn section-title-sm btn-left ${
                !showClients && "t-btn-active"
              }`}
              onClick={() => setShowClients(!showClients)}
              disabled={!showClients}
            >
              Our Clients
            </button>
            <button
              type="button"
              className={`t-btn section-title-sm ${
                showClients && "t-btn-active"
              }`}
              disabled={showClients}
              onClick={() => setShowClients(!showClients)}
            >
              Technology Partners
            </button>
          </div>
          {showClients ? <Partners /> : <Clients />}
        </Container>
      </Layout>
    </>
  );
};
