/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/careers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBriefcase,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import CareerBanner from "../../static/images/careers.svg";
import Layout from "../components/Layout/Layout";
import Comejoin from "../../static/images/comejoin.svg";

const careers = () => {
  return (
    <Layout showBanner>
      <HeroBanner
        title="Get your future started with us"
        image={CareerBanner}
      />
      <Container fluid className="Text-style">
        <p className="pstyle text-centers mt-4">
          ZYCLYX recruits, trains and assigns the best candidates in the field
          of IT
          <br />
          <p className="spanstyle">to work on some of our biggest projects</p>
        </p>
      </Container>

      <Container fluid className="join-us-wrapper">
        <Row className="rowstyle">
          <Col md="3" className="join-us">
            <div className="comejoin ">
              <h4 className="mt-5 comejoinh4">Come Join us</h4>
              {/* <h4 className="joinus"></h4> */}
              <span className="span" />

              <img src={Comejoin} alt="new age" className="mt-4 imgstyle" />
            </div>
          </Col>
          <Col md="" className="icon-style">
            <ul className="ul">
              <li className="">
                <a href className="">
                  <FontAwesomeIcon icon={faArrowRight} className="iconcolor" />
                </a>

                <span className="">
                  As we believe a team of great minds will produce greater
                  results
                </span>
              </li>

              <li className="mt-3">
                <a href>
                  <FontAwesomeIcon icon={faArrowRight} className="iconcolor" />
                </a>

                <span className="">
                  We are a growing firm with enormous challenges and
                  opportunities to grow
                </span>
              </li>

              <li className="mt-3">
                <a href>
                  <FontAwesomeIcon icon={faArrowRight} className="iconcolor" />
                </a>

                <span className="">
                  To explore new challenges in ZYCLYX, and learn new things
                </span>
              </li>
              <li className="mt-3">
                <a href>
                  <FontAwesomeIcon icon={faArrowRight} className="iconcolor" />
                </a>

                <span className="">
                  To be a part of a place where imagination and out of the box
                  thinking is all you need
                </span>
              </li>
              <li className="mt-3">
                <a href>
                  <FontAwesomeIcon icon={faArrowRight} className="iconcolor" />
                </a>

                <span className="">
                  If you’ve got a smarter way to get the job done
                </span>
              </li>
              <li className="mt-3">
                <a href>
                  <FontAwesomeIcon icon={faArrowRight} className="iconcolor" />
                </a>

                <span className="">
                  To be a part of a great enthusiastic team
                </span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container fluid className="postions">
        <h4 className="mt-3 opend">Opened Positions</h4>
        <span className="span span1 mt-3 " />
        <Container className="container1 mt-5">
          <Row className="card-row">
            <div className="card">
              <h4 className="text-center">Business Development Manager</h4>
              <h5 className="text-center mt-3">Riyadh, Saudi Arabia</h5>
              <div>
                <Row className="icon mt-4">
                  <Col>
                    <Row>
                      <Col md="4">
                        <h6 className="color styleicon">
                          <FontAwesomeIcon icon={faBriefcase} />
                        </h6>
                      </Col>
                      <Col md="8" className="h6style">
                        <h6 className="hoverstyle">Experience</h6>
                        <h6 className="color mt-2">2-3 years</h6>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col md="4">
                        <h6 className="color styleicon">
                          <FontAwesomeIcon icon={faUser} />
                        </h6>
                      </Col>
                      <Col md="8" className="h6style">
                        <h6 className="hoverstyle">Job-Type</h6>
                        <h6 className="color mt-2">Full-Time</h6>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className="btn-style mt-4">
                <a
                  href="/job-description"
                  className="button d-flex align-items-center"
                >
                  Apply Now
                  <FontAwesomeIcon icon="arrow-right" className="btn-icon" />
                </a>
              </div>
            </div>

            <div className="card">
              <h4 className="text-center">RPA Developer</h4>
              <h5 className="text-center mt-3">Riyadh, Saudi Arabia</h5>
              <div>
                <Row className="icon mt-4">
                  <Col>
                    <Row>
                      <Col md="4">
                        <h6 className="color styleicon">
                          <FontAwesomeIcon icon={faBriefcase} />
                        </h6>
                      </Col>
                      <Col md="8" className="h6style">
                        <h6 className="hoverstyle">Experience</h6>
                        <h6 className="color mt-2">2-3 years</h6>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col md="4">
                        <h6 className="color styleicon">
                          <FontAwesomeIcon icon={faUser} />
                        </h6>
                      </Col>
                      <Col md="8" className="h6style">
                        <h6 className="hoverstyle">Job-Type</h6>
                        <h6 className="color mt-2">Full-Time</h6>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className="btn-style mt-4">
                <a
                  href="/job-description"
                  className="button d-flex align-items-center"
                >
                  Apply Now
                  <FontAwesomeIcon icon="arrow-right" className="btn-icon" />
                </a>
              </div>
            </div>
          </Row>
          <Row className="card-row">
            <div className="card">
              <h4 className="text-center">Machine Learning Engineer</h4>
              <h5 className="text-center mt-3">Riyadh, Saudi Arabia</h5>
              <div>
                <Row className="icon mt-4">
                  <Col>
                    <Row>
                      <Col md="4">
                        <h6 className="color styleicon">
                          <FontAwesomeIcon icon={faBriefcase} />
                        </h6>
                      </Col>
                      <Col md="8" className="h6style">
                        <h6 className="hoverstyle">Experience</h6>
                        <h6 className="color mt-2">2-3 years</h6>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col md="4">
                        <h6 className="color styleicon">
                          <FontAwesomeIcon icon={faUser} />
                        </h6>
                      </Col>
                      <Col md="8" className="h6style">
                        <h6 className="hoverstyle">Job-Type</h6>
                        <h6 className="color mt-2">Full-Time</h6>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className="btn-style mt-4">
                <a
                  href="/job-description"
                  className="button d-flex align-items-center"
                >
                  Apply Now
                  <FontAwesomeIcon icon="arrow-right" className="btn-icon" />
                </a>
              </div>
            </div>

            <div className="card">
              <h4 className="text-center">Client Relationship Manager</h4>
              <h5 className="text-center mt-3">Riyadh, Saudi Arabia</h5>
              <div>
                <Row className="icon mt-4">
                  <Col>
                    <Row>
                      <Col md="4">
                        <h6 className="color styleicon">
                          <FontAwesomeIcon icon={faBriefcase} />
                        </h6>
                      </Col>
                      <Col md="8" className="h6style">
                        <h6 className="hoverstyle">Experience</h6>
                        <h6 className="color mt-2">2-3 years</h6>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col md="4">
                        <h6 className="color styleicon">
                          <FontAwesomeIcon icon={faUser} />
                        </h6>
                      </Col>
                      <Col md="8" className="h6style">
                        <h6 className="hoverstyle">Job-Type</h6>
                        <h6 className="color mt-2">Full-Time</h6>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className="btn-style mt-4">
                <a
                  href="/job-description"
                  className="button d-flex align-items-center"
                >
                  Apply Now
                  <FontAwesomeIcon icon="arrow-right" className="btn-icon" />
                </a>
              </div>
            </div>
          </Row>
        </Container>
      </Container>
    </Layout>
  );
};

export default careers;
