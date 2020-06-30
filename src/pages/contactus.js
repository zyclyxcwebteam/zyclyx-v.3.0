/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from "react";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/Layout/Layout";
// import Username from "../components/FormComponents/username";
// import Emailaddress from "../components/FormComponents/emailAddress";
// import PhoneNumber from "../components/FormComponents/phoneNumber";
// import Subject from "../components/FormComponents/Subject";
// import Messege from "../components/FormComponents/TextMessage";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import ContactBanner from "../../static/images/contact.svg";
import "../styles/contactus.css";

class contactus extends Component {
  constructor() {
    // var messeges;
    super();
    this.state = {
      username: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };
    this.handlechange = this.handlechange.bind(this);
    this.handlechange1 = this.handlechange1.bind(this);
    this.handlechange2 = this.handlechange2.bind(this);
    this.handlechange3 = this.handlechange3.bind(this);
    this.handlechange4 = this.handlechange4.bind(this);
    // this.selectcounty = this.selectcounty.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // onchange function...................

  // validate function..............

  validate = () => {
    let emailerror = "";
    let usernameerror = "";
    let phoneerror = "";
    let messegeerror = "";
    let Subjecterror = "";
    const { username, email, phone, subject, message } = this.state;

    if (!username) {
      usernameerror = "Name cannot be blank";
    }

    if (!email.includes("@")) {
      emailerror = "invalid email";
    }
    if (!email) {
      emailerror = "Email cannot be blank";
    }
    const phoneno = /^\d{10}$/;
    if (!phone.match(phoneno)) {
      phoneerror = "Enter valid phone number";
    }
    if (!phone) {
      phoneerror = "Phone cannot be blank";
    }

    if (!subject) {
      Subjecterror = "Subject cannot be blank";
    }
    if (!message) {
      messegeerror = " Message cannot be blank";
    }
    if (
      emailerror ||
      usernameerror ||
      phoneerror ||
      messegeerror ||
      Subjecterror
    ) {
      this.setState({});
      return false;
    }
    return true;
  };

  handleClick() {
    const { showText } = this.state;
    this.setState({ showText: !showText });
  }

  handlechange(event) {
    this.setState({ username: event.target.value });
  }

  handlechange1(event) {
    this.setState({ email: event.target.value });
  }

  handlechange2(event) {
    this.setState({ phone: event.target.value });
  }

  handlechange4(event) {
    this.setState({ subject: event.target.value });
  }

  handlechange3(event) {
    this.setState({ message: event.target.value });
  }

  // Submition function................

  handleSubmit(event) {
    event.preventDefault();
    const isvalid = this.validate();

    if (isvalid) {
      this.setState({
        username: "",
        phone: "",
        email: "",
        message: "",
        subject: "",
      });
    }
  }

  render() {
    const { showText } = this.state;

    // const { google } = this.props;

    return (
      <Layout showBanner={false}>
        <HeroBanner
          title="We are happy to assist you with your queries"
          image={ContactBanner}
        />
        <div className="container-fluid">
          <div className="row">
            <div className=" col col-md-6 col-12 Formaddress">
              {!showText ? (
                <div className="mt-5">
                  <div className="row ">
                    <div className="col-7 mx-auto">
                      <div className="row">
                        <div className="col-3">
                          <p className="icons mt-4">
                            <FontAwesomeIcon
                              icon="map-marked-alt"
                              className="contact-icon"
                            />
                          </p>
                        </div>
                        <div className="col-9 ">
                          <h4 className="contact-title">OFFICE</h4>
                          <p className="contact-text">
                            3rd Floor, Pearl Enclave, Green Valley Road No-5,
                            Banjara Hills, Hyderabad, Telangana 500034
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-7 mx-auto">
                      <div className="row">
                        <div className="col-3">
                          <p className="icons">
                            <FontAwesomeIcon
                              icon="phone"
                              className="contact-icon"
                            />
                          </p>
                        </div>
                        <div className="col-9">
                          <h4 className="contact-title">CONTACT</h4>
                          <p className="ptagstyle">(+91) 40 2354 9363</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-7 mx-auto">
                      <div className="row p-10">
                        <div className="col-3">
                          <p className="icons">
                            <FontAwesomeIcon
                              icon="envelope"
                              className="contact-icon"
                            />
                          </p>
                        </div>
                        <div className="col-9">
                          <h4 className="contact-title">EMAIL</h4>
                          <p className="ptagstyle">info@zyclyx.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4 btnstyle">
                    <button
                      type="submit"
                      className=" button d-flex align-items-center"
                      id="contactBtn"
                      onClick={this.handleClick}
                    >
                      <span id="btnText" className="mr-3">
                        Message Us
                      </span>
                      <FontAwesomeIcon
                        icon="arrow-right"
                        className="btn-icon"
                      />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="">
                  <div className=" headstyle">
                    <h4 className="text-center">
                      We are happy to assist
                      <br />
                      you with your queries
                    </h4>
                  </div>

                  <button
                    type="submit"
                    className="btn form-close"
                    id="contactBtn"
                    onClick={this.handleClick}
                  >
                    <span id="btnText">
                      {" "}
                      <FontAwesomeIcon icon="times" />
                    </span>
                  </button>

                  <form
                    id="contactForm"
                    className="needs-validation"
                    noValidate
                  >
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
                        onClick={this.handleFormClick}
                      >
                        Submit
                        <FontAwesomeIcon
                          icon="arrow-right"
                          className="btn-icon"
                        />
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            <div className=" col col-md-6 col-12 mapstyle p-0">
              <div
                style={{
                  textDecoration: "none",
                  overflow: "hidden",
                  maxWidth: "100%",
                  width: "100%",
                  height: "530px",
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
            </div>
          </div>
        </div>
        {/* spacer */}
        <Container fluid className="py-4 spacer" />
      </Layout>
    );
  }
}

export default contactus;
