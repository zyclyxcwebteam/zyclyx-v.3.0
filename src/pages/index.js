import React from "react";
// import { Link } from "gatsby";
import { Container, Col, Row } from "reactstrap";
import Layout from "../components/Layout/Layout";
import Industries from "../components/Homepage/Industries";
import "../styles/Industry.css";

import Homebanner from "../components/Home/banner";

import "../css/home.css";
// import newage from "../images/new-age.jpg";


export default () => {
  return (
    <>
      <Layout>
<<<<<<< HEAD
        <Homebanner />
        <Container fluid id="stats">
          <Sectiontitle
            title="STATISTICS"
            text="lorem ipusum it is a professional dummy text"
            sectionStyles="green"
          />
          <Row className="m-0 mt-4">
            <Col className="mx-auto" md="8" sm="12">
              <Row>
                <Col sm="4" className="mx-auto">
                  <Statcount />
                </Col>
                <Col sm="4" className="mx-auto">
                  <Statcount />
                </Col>
                <Col sm="4" className="mx-auto">
                  <Statcount />
                </Col>
              </Row>
            </Col>
          </Row>
=======
        {/* banner */}
        <Container className="home-banner">
          <h1>
            Real world solutions
            <br />
            for sustainable performance
          </h1>
>>>>>>> 942a5194cf1488ee8639d338915d15e96df6edf5
        </Container>

        <Container fluid className="overview py-5">
          <Container>
            <Row>
              <Col
                md="4"
                sm="12"
                className="d-flex align-items-center text-center"
              >
                <h2>
                  Welcome to the
                  <br />
                  <span>ZYCLYX</span>
                </h2>
              </Col>
              <Col md="8" sm="12">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&aposs
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className="py-5 service-slider">
          <h2>Our services</h2>
        </Container>
        <Container fluid />

        <Industries />
        <Container fluid className="py-5 poc-wrapper">
          <Container>
            <h2 className="text-center poc-title">
              Fostering your trust in us with
              <br />
              <span className="poc-title-bg">Free Proof of Concept</span>
            </h2>
            <p className="text-center py-4">
              With Proof of Concept, we offer you value added service in terms
              of advanced prototype creation which help in demonstrating our
              work potential.
              <br />
              It also assists you to checkout its feasibility in your business
              process, hence optimizing the experience.
            </p>
            <Row>
              <Col sm="12" className="mx-auto">
                <Row className="py-4 mx-auto proof-row">
                  <Col md="4" sm="4" className="p-0">
                    <h3>Forecast</h3>
                    <p>
                      Act as a tool to forecast the feasibility of the projects.
                    </p>
                  </Col>
                  <Col md="4" sm="4" className="p-0">
                    <h3>Report</h3>
                    <p>Provides a complete report on project evaluation</p>
                  </Col>
                  <Col md="4" sm="4" className="p-0">
                    <h3>Cost Effective</h3>
                    <p>Saves your businesses time and money</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container className="clients">
          <p />
        </Container>
      </Layout>
    </>
  );
};
