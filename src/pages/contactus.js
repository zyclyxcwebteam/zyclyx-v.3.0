/* eslint-disable no-unused-vars */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/sort-comp */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/contactus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faBriefcase,
  faPhone,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import Layout from "../components/Layout/Layout";
import Username from "../components/FormComponents/username";
import Emailaddress from "../components/FormComponents/emailAddress";
import PhoneNumber from "../components/FormComponents/phoneNumber";
import Subject from "../components/FormComponents/Subject";
import Messege from "../components/FormComponents/TextMessage";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import ContactBanner from "../../static/images/contact.svg";

class contactus extends Component {
  constructor() {
    // var messeges;
    super();
    this.state = {
      username: "",
      email: "",
      phone: "",
      subject: "",
      messege: "",
      usernameerror: "",
      emailerror: "",
      phoneerror: "",
      messegeerror: "",
      Subjecterror: "",
      country: "",
      showForm: false,
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

  handleClick(event) {
    this.setState({ showText: !this.state.showText });
  }

  handlechange(event) {
    this.setState({ username: event.target.value });
    console.log(this.state.username);
  }

  handlechange1(event) {
    this.setState({ email: event.target.value });
    console.log(this.state.email);
  }

  handlechange2(event) {
    this.setState({ phone: event.target.value });
    console.log(this.state.phone);
  }

  handlechange4(event) {
    this.setState({ subject: event.target.value });
    console.log(this.state.subject);
  }

  handlechange3(event) {
    this.setState({ messege: event.target.value });
    console.log(this.state.messege);
  }

  selectCountry(val) {
    this.setState({ country: val });
    console.log(`${val}valueis`);
    console.log(`${this.state.country}is`);
    console.log(this.state);
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  // validate function..............

  validate = () => {
    let emailerror = "";
    let usernameerror = "";
    let phoneerror = "";
    let messegeerror = "";
    let Subjecterror = "";

    if (!this.state.username) {
      usernameerror = "Name cannot be blank";
      console.log(`${usernameerror}usernameerror`);
    }

    if (!this.state.email.includes("@")) {
      emailerror = "invalid email";
    }
    if (!this.state.email) {
      emailerror = "Email Cannot be blank";
    }
    const phoneno = /^\d{10}$/;
    if (this.state.phone.match(phoneno)) {
      console.log("inside if phone error");
    } else {
      phoneerror = "Enter Valid phone Number";
    }
    if (!this.state.phone) {
      phoneerror = "Phone Cannot be blank";
    }

    if (!this.state.subject) {
      Subjecterror = "Subject cannot be blank";
    }
    if (!this.state.messege) {
      messegeerror = "Cannot be blank";
    }
    if (
      emailerror ||
      usernameerror ||
      phoneerror ||
      messegeerror ||
      Subjecterror
    ) {
      this.setState({
        emailerror,
        usernameerror,
        phoneerror,
        messegeerror,
        Subjecterror,
      });
      return false;
    }
    return true;
  };

  // Submition function................

  handleSubmit(event) {
    event.preventDefault();

    console.log(`${this.state.username}username is`);

    const isvalid = this.validate();

    if (isvalid) {
      console.log(this.state);
      this.setState({
        username: "",
        phone: "",
        email: "",
        messege: "",
        subject: "",
        usernameerror: "",
        emailerror: "",
        phoneerror: "",
        messegeerror: "",
        Subjecterror: "",
      });
      console.log(this.state.messege, this.state.email);
    } else {
      console.log("inside else");
      console.log(`${this.state.phoneerror}phoneerror`);
    }
  }

  render() {
    return (
      <Layout showBanner={false}>
        <HeroBanner
          title="For better help and business development"
          image={ContactBanner}
        />
        <div className="container-fluid">
          <div className="row">
            <div className=" col col-md-6 col-12 Formaddress">
              {!this.state.showText ? (
                <div className="mt-5">
                  <div className="row ">
                    <div className="col-7 mx-auto">
                      <div className="row">
                        <div className="col-3">
                          <p className="icons">
                            <FontAwesomeIcon
                              icon={faBriefcase}
                              className="fonticon"
                            />
                          </p>
                        </div>
                        <div className="col-9 ">
                          <h4 className="iconscolor">OFFICE</h4>
                          <p className="ptagstyle">
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
                            <FontAwesomeIcon icon={faPhone} />
                          </p>
                        </div>
                        <div className="col-9">
                          <h4 className="iconscolor">CONTACT</h4>
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
                            <FontAwesomeIcon icon={faEnvelope} />
                          </p>
                        </div>
                        <div className="col-9">
                          <h4 className="iconscolor">EMAIL</h4>
                          <p className="ptagstyle">info@zyclyx.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-3">
                    <button
                      type="submit"
                      className="btn  btncolor text-center"
                      id="contactBtn"
                      onClick={this.handleClick}
                    >
                      <span id="btnText" className="mr-3">
                        Messege Us
                      </span>
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="container">
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
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                  </button>

                  <form onSubmit={this.handleSubmit}>
                    <div className="main">
                      <div>
                        <Username
                          value={this.state.username}
                          onChange={this.handlechange}
                        />
                        {this.state.usernameerror ? (
                          <div style={{ color: "red" }}>
                            {this.state.usernameerror}
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <Emailaddress
                          value={this.state.email}
                          onChange={this.handlechange1}
                        />
                        {this.state.emailerror ? (
                          <div style={{ color: "red" }}>
                            {this.state.emailerror}
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <PhoneNumber
                          value={this.state.phone}
                          onChange={this.handlechange2}
                        />
                        {this.state.phoneerror ? (
                          <div style={{ color: "red" }}>
                            {this.state.phoneerror}
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <Subject
                          value={this.state.subject}
                          onChange={this.handlechange4}
                        />
                        {this.state.Subjecterror ? (
                          <div style={{ color: "red" }}>
                            {this.state.Subjecterror}
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <Messege
                          value={this.state.messege}
                          onChange={this.handlechange3}
                        />
                        {this.state.messegeerror ? (
                          <div style={{ color: "red" }}>
                            {this.state.messegeerror}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="btn-style mt-2">
                      <button
                        type="submit"
                        className="btn btncolor text-center"
                        id="contactBtn"
                      >
                        <span id="btnText" className="mr-3">
                          Submit
                        </span>
                        <span>
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            <div className=" col col-md-6 col-12 mapstyle p-0">
              <Map google={this.props.google} zoom={14}>
                <Marker onClick={this.onMarkerClick} name="Current location" />
              </Map>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBLPVg4nj6V7yUtCkCDrt0OwG_CGIGSsHA",
})(contactus);
