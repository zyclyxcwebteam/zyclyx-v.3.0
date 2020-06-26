/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import fetch from "isomorphic-fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import FloatingLabelInput from "react-floating-label-input";
import Layout from "../components/Layout/Layout";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import JobBanner from "../../static/images/job-details.svg";

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
          image={JobBanner}
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
                ) : null}
              </div>
            </Col>
            <Col md="9" className="job-content-wrapper px-5">
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
                  <div className="formstyle1">
                    <button
                      type="button"
                      className="closebtn"
                      onClick={this.closebtnClick}
                    >
                      <FontAwesomeIcon icon={faTimes} className="close-icon" />
                    </button>

                    <form onSubmit={this.handleSubmit} className="">
                      <Row>
                        <Col className="inputalign">
                          <div className="row formrow">
                            <FloatingLabelInput
                              className="inputstyle1"
                              type="text"
                              name="Name"
                              id="First Name"
                              label="First Name"
                              placeholder=""
                            />
                          </div>
                        </Col>
                        <Col className="inputalign1">
                          {/* <Username
                            value={this.state.username}
                            onChange={this.handlechange}
                          /> */}
                          <div className="row formrow">
                            <FloatingLabelInput
                              className="inputstyle1"
                              type="text"
                              name="Name"
                              id="Last Name"
                              label="Last Name"
                              placeholder=""
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="inputalign">
                          <div className="row formrow">
                            <FloatingLabelInput
                              className="inputstyle1"
                              type="text"
                              name="Name"
                              id="username"
                              label="Email"
                              placeholder=""
                            />
                          </div>
                        </Col>
                        <Col className="inputalign1">
                          {/* <Username
                            value={this.state.username}
                            onChange={this.handlechange}
                          /> */}
                          <div className="row formrow">
                            <FloatingLabelInput
                              className="inputstyle1"
                              type="text"
                              name="Name"
                              id="Phone"
                              label="Phone"
                              placeholder=""
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="inputalign">
                          <div className="row formrow">
                            <FloatingLabelInput
                              className="inputstyle1"
                              type="text"
                              name="Name"
                              id="Resume"
                              label="Resume"
                              placeholder=""
                            />
                          </div>
                        </Col>
                        <Col className="inputalign1">
                          {/* <Username
                            value={this.state.username}
                            onChange={this.handlechange}
                          /> */}
                          <div className="row formrow">
                            <FloatingLabelInput
                              className="inputstyle1"
                              type="text"
                              name="Name"
                              id="Message"
                              label="Message"
                              placeholder=""
                            />
                          </div>
                        </Col>
                      </Row>
                      <div className="btn-style mt-2">
                        <button
                          type="submit"
                          className=" button sbtn d-flex align-items-center"
                          id="contactBtn"
                        >
                          <span id="btnText" className="mr-3">
                            Apply Now
                          </span>
                          <FontAwesomeIcon
                            icon="arrow-right"
                            className="btn-icon"
                          />
                        </button>
                      </div>
                    </form>
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
