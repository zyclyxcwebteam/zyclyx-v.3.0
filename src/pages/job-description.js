/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout/Layout";
import HeroBanner from "../components/HeroBanner/HeroBanner";
// import Button from "../components/Button/Button";
import "../css/job-description.css";

class jobDescription extends React.Component {
  constructor() {
    super();
    this.state = {
      showReq: true,
      showRes: false,
      showForm: false,
      btnState: true,
    };
    this.handleReqClick = this.handleReqClick.bind(this);
    this.handleResClick = this.handleResClick.bind(this);
    this.handleFormClick = this.handleFormClick.bind(this);
  }

  handleReqClick() {
    console.log("Req");
    this.setState({
      showReq: true,
      showRes: false,
      showForm: false,
      btnState: true,
    });
  }

  handleResClick() {
    console.log("Res");
    this.setState({
      showRes: true,
      showReq: false,
      showForm: false,
      btnState: true,
      // showForm: !this.State.showForm,
    });
    console.log(this.state.showRes);
  }

  handleFormClick() {
    console.log("Form");
    this.setState({
      showForm: true,
      showRes: false,
      showReq: false,
      btnState: false,
    });
  }

  render() {
    return (
      <Layout showBanner>
        <HeroBanner />
        <Container>
          <Row className="py-5">
            <Col md="2" className="p-0 d-flex flex-column align-items-center">
              <div className="">
                <div
                  className="btn pl-0 req mb-5"
                  onClick={this.handleReqClick}
                >
                  Requirement
                </div>
                <div
                  className="btn pl-0 res mb-5"
                  onClick={this.handleResClick}
                >
                  Responsibilities
                </div>
                {this.state.btnState ? (
                  <div className="btn" onClick={this.handleFormClick}>
                    Apply Now
                  </div>
                ) : null}
              </div>
            </Col>
            <Col md="10">
              {this.state.showReq ? (
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
              ) : null}

              {this.state.showRes ? (
                <div className="d-flex">
                  <span className="res-icon">
                    <FontAwesomeIcon icon={faArrowRight} className="" />
                  </span>
                  <p className="ml-3 data">Res</p>
                </div>
              ) : null}

              {this.state.showForm ? (
                <div className="d-flex">
                  <span className="res-icon">
                    <FontAwesomeIcon icon={faArrowRight} className="" />
                  </span>
                  <p className="ml-3 data">Form</p>
                </div>
              ) : null}
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default jobDescription;
