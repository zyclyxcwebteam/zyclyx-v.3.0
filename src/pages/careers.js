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

const careers = () => {
  return (
    <Layout>
      <HeroBanner
        title="Get your future started with us"
        image={CareerBanner}
      />
      <Container fluid className="Text-style">
        <p>
          ZYCLYX recruits, trains and assigns the best candidates in the field
          of IT
          <br />
          <span className="">
            to work on some of our biggest projects in the Middle East
          </span>
        </p>
      </Container>
      <Container fluid className="core-values">
        <Row>
          <Col md="3" className="join-us">
            <div>
              <h4>Come</h4>
              <h4 className="joinus">JOIN US</h4>
              <span className="span" />
            </div>
          </Col>
          <Col md="" className="icon-style">
            <ul>
              <li className="">
                <a href className="">
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>

                <span className="ml-5">
                  As we believe a team of great minds will produce greater
                  results
                </span>
              </li>

              <li className="mt-3">
                <a href>
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>

                <span className="ml-5">
                  We are a growing firm with enormous challenges and
                  opportunities to grow
                </span>
              </li>

              <li className="mt-3">
                <a href>
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>

                <span className="ml-5">
                  To explore new challenges in VIRTECH, and learn new things
                </span>
              </li>
              <li className="mt-3">
                <a href>
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>

                <span className="ml-5">
                  To be a part of a place where imagination and out of the box
                  thinking is all you need
                </span>
              </li>
              <li className="mt-3">
                <a href>
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>

                <span className="ml-5">
                  If you’ve got a smarter way to get the job done
                </span>
              </li>
              <li className="mt-3">
                <a href>
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>

                <span className="ml-5">
                  To be a part of a great enthusiastic team
                </span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container fluid className="postions">
        <h4 className="mt-3 ml-5">Opened Opsition</h4>
        <span className="span mt-3 ml-5" />
        <Container className="container1">
          <Row className="card-row">
            <div className="card">
              <h4 className="text-center">Business Development Manager</h4>
              <h5 className="text-center mt-3">Riyadh, Saudi Arabia</h5>
              <div>
                <Row className="icon mt-4">
                  <Col>
                    <Row>
                      <Col>
                        <h6 className="color">
                          <FontAwesomeIcon icon={faBriefcase} />
                        </h6>
                      </Col>
                      <Col className="h6style">
                        <h6>Experience</h6>
                        <h6 className="color">2-3 years</h6>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col>
                        <h6 className="color">
                          <FontAwesomeIcon icon={faUser} />
                        </h6>
                      </Col>
                      <Col className="h6style">
                        <h6>Job-Type</h6>
                        <h6 className="color">Full-Time</h6>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className="btn-style mt-4">
                <button
                  type="submit"
                  className="btn btncolor text-center"
                  id="contactBtn"
                >
                  <span id="btnText" className="mr-3">
                    Apply Now
                  </span>
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </button>
              </div>
            </div>

            <div className="card">
              <h4 className="text-center">RPA Developer</h4>
              <h5 className="text-center mt-3">Riyadh, Saudi Arabia</h5>
              <div>
                <Row className="icon mt-4">
                  <Col>
                    <Row>
                      <Col>
                        <h6 className="color">
                          <FontAwesomeIcon icon={faBriefcase} />
                        </h6>
                      </Col>
                      <Col className="h6style">
                        <h6>Experience</h6>
                        <h6 className="color">2-3 years</h6>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col>
                        <h6 className="color">
                          <FontAwesomeIcon icon={faUser} />
                        </h6>
                      </Col>
                      <Col className="h6style">
                        <h6>Job-Type</h6>
                        <h6 className="color">Full-Time</h6>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className="btn-style mt-4">
                <button
                  type="submit"
                  className="btn btncolor text-center"
                  id="contactBtn"
                >
                  <span id="btnText" className="mr-3">
                    Apply Now
                  </span>
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </button>
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
                      <Col>
                        <h6 className="color">
                          <FontAwesomeIcon icon={faBriefcase} />
                        </h6>
                      </Col>
                      <Col className="h6style">
                        <h6>Experience</h6>
                        <h6 className="color">2-3 years</h6>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col>
                        <h6 className="color">
                          <FontAwesomeIcon icon={faUser} />
                        </h6>
                      </Col>
                      <Col className="h6style">
                        <h6>Job-Type</h6>
                        <h6 className="color">Full-Time</h6>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className="btn-style mt-4">
                <button
                  type="submit"
                  className="btn btncolor text-center"
                  id="contactBtn"
                >
                  <span id="btnText" className="mr-3">
                    Apply Now
                  </span>
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </button>
              </div>
            </div>

            <div className="card">
              <h4 className="text-center">Client Relationship Manager</h4>
              <h5 className="text-center mt-3">Riyadh, Saudi Arabia</h5>
              <div>
                <Row className="icon mt-4">
                  <Col>
                    <Row>
                      <Col>
                        <h6 className="color">
                          <FontAwesomeIcon icon={faBriefcase} />
                        </h6>
                      </Col>
                      <Col className="h6style">
                        <h6>Experience</h6>
                        <h6 className="color">2-3 years</h6>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col>
                        <h6 className="color">
                          <FontAwesomeIcon icon={faUser} />
                        </h6>
                      </Col>
                      <Col className="h6style">
                        <h6>Job-Type</h6>
                        <h6 className="color">Full-Time</h6>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className="btn-style mt-4">
                <button
                  type="submit"
                  className="btn btncolor text-center"
                  id="contactBtn"
                >
                  <span id="btnText" className="mr-3">
                    Apply Now
                  </span>
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </button>
              </div>
            </div>
          </Row>
        </Container>
      </Container>
    </Layout>
  );
};

export default careers;
