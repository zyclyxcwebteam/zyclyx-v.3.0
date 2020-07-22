/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import fetch from "isomorphic-fetch";
// import { useFormik } from "formik";
// import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout/Layout";
import HeroBanner from "../components/HeroBanner/HeroBanner";

import "../css/job-description.css";

const Requirement = props => {
  const { item } = props;
  return (
    <div className="d-flex align-items-center py-2">
      <span className="c-arrow-circle">
        <FontAwesomeIcon icon={faArrowRight} />
      </span>
      <p className="ml-3 m-0 c-point-text">{item}</p>
    </div>
  );
};

const Responsibility = props => {
  const { item } = props;
  return (
    <div className="d-flex align-items-center py-2">
      <span className="c-arrow-circle">
        <FontAwesomeIcon icon={faArrowRight} />
      </span>
      <p className="ml-3 m-0 c-point-text">{item}</p>
    </div>
  );
};
class jobDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showReq: true,
      showRes: false,
      showForm: false,
      btnState: true,
    };
    this.handleReqClick = this.handleReqClick.bind(this);
    this.handleResClick = this.handleResClick.bind(this);
    this.handleFormClick = this.handleFormClick.bind(this);
    this.handlechange = this.handlechange.bind(this);
    this.closebtnClick = this.closebtnClick.bind(this);
  }

  componentDidMount() {
    const { location } = this.props;
    const { id } = location.state;
    fetch(`https://agile-plateau-09650.herokuapp.com/jobopenings/${id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ jobData: data });
      });
  }

  handleReqClick() {
    this.setState({
      showReq: true,
      showRes: false,
      showForm: false,
      btnState: true,
    });
  }

  handleResClick() {
    this.setState({
      showRes: true,
      showReq: false,
      showForm: false,
      btnState: true,
    });
  }

  handleFormClick() {
    this.setState({
      showForm: true,
      showRes: false,
      showReq: false,
      btnState: false,
    });
  }

  handlechange() {
    this.setState({});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({});
  }

  closebtnClick() {
    this.setState({
      showForm: false,
      showRes: true,
      showReq: false,
      btnState: true,
    });
  }

  render() {
    const { btnState, showReq, showRes, showForm, jobData } = this.state;
    return (
      <Layout showBanner>
        <HeroBanner
          title={jobData && this.state.jobData.title}
          imageClass="job-description"
        />
        <Container fluid>
          <Row className="d-flex job-container">
            <Col md="3" className="p-0 d-flex flex-column align-items-center">
              <div className="d-flex flex-column side-menu-wrapper py-4 w-100">
                <div className={`px-5 ${showReq && "c-btn-active"}`}>
                  <button
                    type="button"
                    className="c-btn my-4"
                    onClick={this.handleReqClick}
                  >
                    Requirements
                  </button>
                </div>
                <div className={`px-5 ${showRes && "c-btn-active"}`}>
                  <button
                    type="button"
                    className="c-btn my-4"
                    onClick={this.handleResClick}
                  >
                    Responsibilities
                  </button>
                </div>
                {btnState ? (
                  <>
                    <div className="px-5">
                      <button
                        type="button"
                        className="button d-flex align-items-center btn-style my-4 req1"
                        onClick={this.handleFormClick}
                      >
                        Apply Now
                        <FontAwesomeIcon
                          icon="arrow-right"
                          className="btn-icon"
                        />
                      </button>
                    </div>
                  </>
                ) : (
                  <div className={`px-5 ${!btnState && "c-btn-active"}`}>
                    <button
                      type="button"
                      className="c-btn my-4"
                      onClick={this.handleResClick}
                    >
                      Application Form
                    </button>
                  </div>
                )}
              </div>
            </Col>
            <Col md="9" className="job-content-wrapper pl-md-5 pl-3">
              {showReq ? (
                <>
                  <div className="py-4">
                    {jobData &&
                      this.state.jobData.requirements.map(data => {
                        return <Requirement item={data} />;
                      })}
                  </div>
                </>
              ) : null}

              {showRes ? (
                <>
                  <div className="py-4">
                    {jobData &&
                      this.state.jobData.responsibilities.map(data => {
                        return <Responsibility item={data} />;
                      })}
                  </div>
                </>
              ) : null}

              {showForm ? (
                <>
                  <div className="app-form py-5">
                    <button
                      type="button"
                      className="form-close-btn"
                      onClick={this.closebtnClick}
                    >
                      <FontAwesomeIcon icon={faTimes} className="close-icon" />
                    </button>

                    <section className="appWrapper py-4">
                      <div className="container">
                        <h3 className="py-md-4 py-2 title-3 title-dark text-center">
                          Application Form
                        </h3>
                        <div className="row mx-auto d-flex justify-content-center">
                          <div className="col-md-6 col-12">
                            <form
                              id="jobApplication"
                              className="app-form"
                              noValidate
                            >
                              <div className="row d-flex justify-content-center">
                                <div className="col-md-6 col-12">
                                  <div className="form-group floating-label py-1">
                                    <input
                                      type="text"
                                      className="form-control py-4"
                                      name="firstname"
                                      pattern="[a-zA-Z\s]{2,30}"
                                      placeholder="Firstname"
                                      autoComplete="off"
                                      required
                                    />
                                    <label htmlFor="firstname">
                                      First Name
                                      <span className="required">*</span>
                                    </label>
                                  </div>
                                </div>

                                <div className="col-md-6 col-12">
                                  <div className="form-group floating-label py-1">
                                    <input
                                      type="text"
                                      className="form-control py-4"
                                      name="lastname"
                                      pattern="[a-zA-Z\s]{2,30}"
                                      placeholder="Lastname"
                                      autoComplete="off"
                                      required
                                    />
                                    <label htmlFor="lastname">
                                      Last Name
                                      <span className="required">*</span>
                                    </label>
                                  </div>
                                </div>

                                <div className="col-12">
                                  <div className="form-group floating-label py-1">
                                    <input
                                      type="email"
                                      className="form-control py-4"
                                      name="email"
                                      autoComplete="off"
                                      placeholder="email"
                                      pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                                      required
                                    />
                                    <label htmlFor="email">
                                      Email-ID
                                      <span className="required">*</span>
                                    </label>
                                  </div>
                                </div>

                                <div className="col-12">
                                  <div className="form-group floating-label py-1">
                                    <input
                                      type="text"
                                      className="form-control py-4"
                                      name="phone"
                                      placeholder="Phone"
                                      pattern="^[0-9]{3,12}$"
                                      required
                                    />
                                    <label>
                                      Phone
                                      <span className="required">*</span>
                                    </label>
                                  </div>
                                </div>

                                <div className="col-12">
                                  <div className="form-group py-1  py-md-5">
                                    <label
                                      htmlFor="resume"
                                      className="resume-label"
                                    >
                                      Resume
                                      <span className="required">*</span>
                                    </label>
                                    <input
                                      type="file"
                                      name="resume"
                                      id="resume"
                                      placeholder="resume"
                                      className="form-control-file"
                                      aria-describedby="inputGroupFileAddon01"
                                      accept=".doc,.docx,.pdf"
                                      required
                                    />

                                    <div className="invalid-feedback">
                                      Please upload your resume.
                                    </div>
                                  </div>
                                </div>

                                <div className="col-12">
                                  <div className="form-group floating-label py-1">
                                    <textarea
                                      className="form-control"
                                      name="message"
                                      id="message"
                                      placeholder="Message"
                                      required
                                    />
                                    <label htmlFor="message">
                                      Subject
                                      <span className="required">*</span>
                                    </label>
                                  </div>
                                </div>

                                <div className="col-12 order-md-1 order-sm-0 mx-auto d-flex justify-content-center">
                                  <button
                                    type="button"
                                    className="button d-flex align-items-center btn-style my-4 req1"
                                    onClick={this.handleFormClick}
                                  >
                                    Apply Now
                                    <FontAwesomeIcon
                                      icon="arrow-right"
                                      className="btn-icon"
                                    />
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </>
              ) : null}
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default jobDescription;
