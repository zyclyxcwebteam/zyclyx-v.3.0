import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout/Layout";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Button from "../components/Button/Button";
import "../css/job-description.css";

class jobDescription extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <HeroBanner />
        <Container>
          <Row className="py-5">
            <Col md="2" className="p-0 d-flex flex-column align-items-center">
              <div className="">
                <div className="req mb-5">Requirement</div>
                <div className="res mb-5">Responsibilities</div>
                <Button btntext="Apply Now" />
              </div>
            </Col>
            <Col md="10">
              <div className="Requirement">
                <div className="d-flex">
                  <span className="res-icon">
                    <FontAwesomeIcon icon={faArrowRight} className="" />
                  </span>
                  <p className="ml-3 data">
                    6-9 years of experience in B2B & B2C Solution Sales in
                    client acquisition in India. exposure to Middle East markets
                    would be added advantage
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default jobDescription;
