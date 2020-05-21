import React from "react";
import { Link } from "gatsby";
import { Container, Col, Row } from "reactstrap";
import Layout from "../components/layout";
import Industry from "../components/industry";
import Sectiontitle from "../components/sectiontitle";
import Statcount from "../components/statcount";
import Proof from "../components/Proof";
import "../styles/Industry.css";
import Homebanner from "../components/Home/banner";

export default () => {
  return (
    <>
      <Layout>
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
        </Container>

        <Container fluid className="py-2 px-0">
          <Sectiontitle
            title="INDUSTRIES"
            text="lorem ipusum it is a professional dummy text"
            sectionStyles="industry-title"
          />
          <div id="industries" className="d-flex flex-md-row mt-mt-4">
            <Industry
              number="01"
              title="Bancking"
              text="lorem ipusum it is a professional dummy text"
            />
            <Industry
              number="02"
              title="Telecom"
              text="lorem ipusum it is a professional dummy text"
            />
            <Industry
              number="03"
              title="Healthcare"
              text="lorem ipusum it is a professional dummy text"
            />
            <Industry
              number="04"
              title="Logistics"
              text="lorem ipusum it is a professional dummy text"
            />
            <Industry
              number="05"
              title="Retail"
              text="lorem ipusum it is a professional dummy text"
            />
          </div>
        </Container>

        <Container fluid className="py-4">
          <Row>
            <Col md="10">
              <Sectiontitle
                title="PROOF OF CONCEPT"
                text="With Proof of Concept, we offer you value added service in terms of advanced prototype creation which help in demonstrating our work potential. It also assists you to checkout its feasibility in your business process, hence optimizing the experience."
                sectionStyles="proof-title"
              />
            </Col>
            <Col
              md=""
              className="p-0 d-flex justify-content-center align-items-center"
            >
              <Link to="/" className="btn btn-primary">
                Get Started
              </Link>
            </Col>
          </Row>

          <Container>
            <Row>
              <Col sm="12" className="mx-auto">
                <Row className="py-4 mx-auto proof-row">
                  <Col md="4" sm="4" className="p-0">
                    <Proof
                      title="Forecast"
                      text="Act as a tool to forecast the feasibility of the projects."
                    />
                  </Col>
                  <Col md="4" sm="4" className="p-0">
                    <Proof
                      title="Report"
                      text="Provides a complete report on project evaluation"
                    />
                  </Col>
                  <Col md="4" sm="4" className="p-0">
                    <Proof
                      title="Cost Effective"
                      text="Saves your businesses time and money"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Container>
      </Layout>
    </>
  );
};
