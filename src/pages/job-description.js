/* eslint-disable react/no-unused-state */
/* eslint-disable react/button-has-type */
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
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
import FloatingLabelInput from "react-floating-label-input";
import Layout from "../components/Layout/Layout";
import HeroBanner from "../components/HeroBanner/HeroBanner";
// import Button from "../components/Button/Button";

import "../css/job-description.css";

const Requirement = props => {
  return (
    <div className="d-flex">
      <span className="res-icon">
        <FontAwesomeIcon icon={faArrowRight} className="" />
      </span>
      <p className="ml-4 data">{props.item}</p>
    </div>
  );
};

const Responsibility = props => {
  return (
    <div className="d-flex mt-3">
      <span className="res-icon">
        <FontAwesomeIcon icon={faArrowRight} className="" />
      </span>
      <p className="ml-4 data">{props.item}</p>
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
      closebtn: true,
      loading: true,
    };
    this.handleReqClick = this.handleReqClick.bind(this);
    this.handleResClick = this.handleResClick.bind(this);
    this.handleFormClick = this.handleFormClick.bind(this);
    this.handlechange = this.handlechange.bind(this);
    this.handlechange = this.handlechange.bind(this);

    this.closebtnClick = this.closebtnClick.bind(this);
  }

  componentDidMount() {
    console.log(this.props.location.state.id);
    fetch(
      `https://agile-plateau-09650.herokuapp.com/jobopenings/${this.props.location.state.id}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ jobData: data, loading: false });
      });
  }

  handleReqClick() {
    console.log("Req");
    this.setState({
      showReq: true,
      showRes: false,
      showForm: false,
      btnState: true,
      username: "",
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

  handlechange(event) {
    this.setState({ username: event.target.value });
    console.log(this.state.username);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("inside submit function");
  }

  closebtnClick() {
    console.log("inside close btn");
    this.setState({
      showForm: false,
      showRes: true,
      showReq: false,
      btnState: true,
    });
  }

  render() {
    console.log(this.state);
    return (
      <Layout showBanner>
        <HeroBanner />
        <Container fluid>
          <Row className="py-5">
            <Col md="3" className="p-0 d-flex flex-column align-items-center ">
              <div className="bgc">
                <div className="">
                  <div
                    className="btn pl-0 req mb-5 mt-5 req"
                    onClick={this.handleReqClick}
                  >
                    Requirement
                    <span className="span" />
                  </div>
                  <div
                    className="btn pl-0 res mb-5   req "
                    onClick={this.handleResClick}
                  >
                    Responsibilities
                    <span className="span" />
                  </div>
                  {this.state.btnState ? (
                    <>
                      <div
                        className="button d-flex align-items-center btn-style mt-4 req1  "
                        onClick={this.handleFormClick}
                      >
                        Apply Now
                        <FontAwesomeIcon
                          icon="arrow-right"
                          className="btn-icon"
                        />
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </Col>
            <Col md="8" className="ml-5 ">
              {this.state.showReq ? (
                <>
                  <div className="mt-5">
                    {this.state.jobData.requirements &&
                      this.state.jobData.requirements.map(data => {
                        return <Requirement item={data} />;
                      })}
                  </div>
                </>
              ) : null}

              {this.state.showRes ? (
                <>
                  <div className="mt-5">
                    {this.state.jobData.responsibilities &&
                      this.state.jobData.responsibilities.map(data => {
                        return <Responsibility item={data} />;
                      })}
                  </div>
                </>
              ) : null}

              {this.state.showForm ? (
                <>
                  <div className="formstyle1">
                    <button className="closebtn" onClick={this.closebtnClick}>
                      <FontAwesomeIcon icon={faTimes} className="svgicon" />
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
                            Submit
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
