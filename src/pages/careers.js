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

const careers = () => {
  return (
    <>
      <Container fluid className="Banner-image">
        <h1 className="text-center">Banner image</h1>
      </Container>
      <Container fluid className="Text-style">
        <p className="pstyle">
          ZYCLYX recruits, trains and assigns the best candidates in the field
          of IT
          <br />
          <span className="spanstyle">
            to work on some of our biggest projects in the Middle East
          </span>
        </p>
      </Container>
      <Container fluid className="core-values">
        <Row className="rowclass">
          <Col md="3" className="join-us">
            <div className="comejoin ">
              <h4 className="mt-5 ">Come JOIN US</h4>
              {/* <h4 className="joinus"></h4> */}
              <span className="span" />
            </div>
          </Col>
          <Col md="" className="icon-style">
            <ul>
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
                  To explore new challenges in VIRTECH, and learn new things
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
        <h4 className="mt-3 opend">Opened Postions</h4>
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
                        <h6 className="color">2-3 years</h6>
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
                        <h6 className="color">Full-Time</h6>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className="btn-style mt-4">
                <button
                  type="submit"
                  className="btn btnbg text-center"
                  id="contactBtn"
                >
                  <span id="btnText" className="mr-3">
                    Apply Now
                  </span>
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrowcolor"
                    />
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
                      <Col md="4">
                        <h6 className="color styleicon">
                          <FontAwesomeIcon icon={faBriefcase} />
                        </h6>
                      </Col>
                      <Col md="8" className="h6style">
                        <h6 className="hoverstyle">Experience</h6>
                        <h6 className="color">2-3 years</h6>
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
                        <h6 className="color">Full-Time</h6>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className="btn-style mt-4">
                <button
                  type="submit"
                  className="btn btnbg text-center"
                  id="contactBtn"
                >
                  <span id="btnText" className="mr-3">
                    Apply Now
                  </span>
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrowcolor"
                    />
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
                      <Col md="4">
                        <h6 className="color styleicon">
                          <FontAwesomeIcon icon={faBriefcase} />
                        </h6>
                      </Col>
                      <Col md="8" className="h6style">
                        <h6 className="hoverstyle">Experience</h6>
                        <h6 className="color">2-3 years</h6>
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
                        <h6 className="color">Full-Time</h6>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className="btn-style mt-4">
                <button
                  type="submit"
                  className="btn btnbg text-center"
                  id="contactBtn"
                >
                  <span id="btnText" className="mr-3">
                    Apply Now
                  </span>
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrowcolor"
                    />
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
                      <Col md="4">
                        <h6 className="color styleicon">
                          <FontAwesomeIcon icon={faBriefcase} />
                        </h6>
                      </Col>
                      <Col md="8" className="h6style">
                        <h6 className="hoverstyle">Experience</h6>
                        <h6 className="color">2-3 years</h6>
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
                        <h6 className="color">Full-Time</h6>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className="btn-style mt-4">
                <button
                  type="submit"
                  className="btn btnbg text-center"
                  id="contactBtn"
                >
                  <span id="btnText" className="mr-3">
                    Apply Now
                  </span>
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrowcolor"
                    />
                  </span>
                </button>
              </div>
            </div>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default careers;
