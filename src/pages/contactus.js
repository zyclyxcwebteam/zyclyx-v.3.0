/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/Layout/Layout";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import ContactBanner from "../../static/images/contact.svg";
import "../styles/contactus.css";

const Contact = () => {
  const [showContactInfo, setShowContactInfo] = useState(true);

  return (
    <Layout showBanner={false}>
      <HeroBanner
        title="We are happy to assist you with your queries"
        image={ContactBanner}
      />

      <Container fluid>
        <Row>
          <Col
            md="6"
            sm="12"
            className="c-wrapper-left address-wrapper d-flex align-items-center"
          >
            {showContactInfo ? (
              <Container className="c-info-wrapper py-4">
                <Row className="d-flex justify-content-center align-items-center py-3">
                  <Col md="7" sm="12">
                    <Row>
                      <Col sm="3">
                        <p className="icons mt-4">
                          <FontAwesomeIcon
                            icon="map-marked-alt"
                            className="contact-icon"
                          />
                        </p>
                      </Col>
                      <Col sm="9">
                        <h4 className="contact-title">OFFICE</h4>
                        <p className="contact-text">
                          3rd Floor, Pearl Enclave, Green Valley Road No-5,
                          Banjara Hills, Hyderabad, Telangana 500034
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="d-flex justify-content-center align-items-center py-3">
                  <Col sm="12" md="7">
                    <Row>
                      <Col sm="3">
                        <p className="icons">
                          <FontAwesomeIcon
                            icon="phone"
                            className="contact-icon"
                          />
                        </p>
                      </Col>
                      <Col sm="9">
                        <h4 className="contact-title">CONTACT</h4>
                        <p className="contact-text">(+91) 40 2354 9363</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="d-flex justify-content-center align-items-center py-3">
                  <Col sm="12" md="7">
                    <Row>
                      <Col sm="3">
                        <p className="icons">
                          <FontAwesomeIcon
                            icon="envelope"
                            className="contact-icon"
                          />
                        </p>
                      </Col>
                      <Col sm="9">
                        <h4 className="contact-title">EMAIL</h4>
                        <p className="contact-text">info@zyclyx.com</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <div className="d-flex justify-content-center py-4">
                  <button
                    type="submit"
                    className=" button d-flex align-items-center"
                    id="contactBtn"
                    onClick={() => {
                      return setShowContactInfo(!showContactInfo);
                    }}
                  >
                    <span id="btnText" className="mr-3">
                      Message Us
                    </span>
                    <FontAwesomeIcon icon="arrow-right" className="btn-icon" />
                  </button>
                </div>
              </Container>
            ) : (
              <Container className="c-form-wrapper">
                <div className="py-4">
                  <h4 className="text-center c-info-title mt-4 mb-0">
                    We are happy to assist
                    <br />
                    you with your queries
                  </h4>
                </div>

                <button
                  type="submit"
                  className="btn form-close"
                  id="contactBtn"
                  onClick={() => {
                    return setShowContactInfo(true);
                  }}
                >
                  <span id="btnText">
                    <FontAwesomeIcon icon="times" />
                  </span>
                </button>

                <form id="contactForm" className="needs-validation" noValidate>
                  <div className="row py-md-2 d-flex justify-content-center">
                    <div className="col-md-7 col-12">
                      <div className="form-group floating-label">
                        <input
                          type="text"
                          className="form-control"
                          name="firstname"
                          id="username"
                          pattern="[a-zA-Z\s]{2,30}"
                          maxLength="30"
                          placeholder="Full Name"
                          autoComplete="off"
                          required
                        />
                        <label htmlFor="username">
                          Full Name
                          <span className="required">*</span>
                        </label>
                        <div className="invalid-feedback">
                          Please enter valid name
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 col-12">
                      <div className="form-group floating-label">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          autoComplete="off"
                          placeholder="Email"
                          id="email"
                          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                          required
                        />
                        <label htmlFor="email">
                          Email
                          <span className="required">*</span>
                        </label>
                        <div className="invalid-feedback">
                          Please enter valid email
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 col-12">
                      <div className="form-group floating-label">
                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          id="phone"
                          pattern="^[0-9]{3,12}$"
                          maxLength="16"
                          autoComplete="off"
                          required
                          placeholder="Phone"
                        />
                        <label htmlFor="phone" id="phoneLabel">
                          Phone
                          <span className="required">*</span>
                        </label>
                        <div className="invalid-feedback" id="phoneInvalid">
                          Please enter valid phone number
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 col-12">
                      <div className="form-group floating-label">
                        <textarea
                          className="form-control pt-3 pb-4"
                          name="message"
                          id="message"
                          maxLength="300"
                          placeholder="Message"
                          required
                        />
                        <label htmlFor="message">
                          Message
                          <span className="required">*</span>
                        </label>
                        <div className="invalid-feedback">
                          Please write a message
                        </div>
                      </div>
                    </div>
                    <div className="col-12" />
                    <button
                      type="button"
                      className="button d-flex align-items-center btn-style my-4 req1"
                    >
                      Send Message
                      <FontAwesomeIcon
                        icon="arrow-right"
                        className="btn-icon"
                      />
                    </button>
                  </div>
                </form>
              </Container>
            )}
          </Col>

          <Col
            sm="12"
            md="6"
            className="c-wrapper-right google-map-wrapper p-0"
          >
            <div
              style={{
                textDecoration: "none",
                overflow: "hidden",
                maxWidth: "100%",
                width: "100%",
                height: "70vh",
              }}
            >
              <div
                id="mymap-display"
                style={{ height: "100%", width: "100%", maxWidth: "100%" }}
              >
                <iframe
                  style={{ height: "100%", width: "100%", border: 0 }}
                  title="zyclyx"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed/v1/place?q=zyclyx+&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                />
              </div>
              <a
                className="googlemaps-code"
                rel="nofollow"
                href="https://www.embed-map.com"
                id="grabmap-authorization"
              >
                https://www.embed-map.com
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      {/* spacer */}
      <Container fluid className="py-4 spacer" />
    </Layout>
  );
};

export default Contact;
