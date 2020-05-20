/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/sort-comp */
/* eslint-disable no-dupe-class-members */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/contactus.css";
import FloatingLabel from "floating-label-react";
import FloatingLabelInput from "react-floating-label-input";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import PhoneInput from "react-phone-number-input";
import "react-telephone-input/css/default.css";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import Username from "../components/FormComponents/username";
import Emailaddress from "../components/FormComponents/emailAddress";
import PhoneNumber from "../components/FormComponents/phoneNumber";
import Subject from "../components/FormComponents/Subject";
import Messege from "../components/FormComponents/TextMessage";
import Textinput from "../components/FormComponents/username1";

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
    };
    this.handlechange = this.handlechange.bind(this);
    this.handlechange1 = this.handlechange1.bind(this);
    this.handlechange2 = this.handlechange2.bind(this);
    this.handlechange3 = this.handlechange3.bind(this);
    this.handlechange4 = this.handlechange4.bind(this);
    this.selectcounty = this.selectcounty.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // onchange function...................

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

  selectcounty(event) {
    console.log(event.target.value);
    // this.setState({ country: event.target.value });
    // console.log(this.state.country);
    console.log("inside country");
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
      phoneerror = "phone Cannot be blank";
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
      <>
        <div className="container">
          <form className="form" onSubmit={this.handleSubmit}>
            {/* <div className="row formrow">
              <FloatingLabelInput
                className=""
                type="text"
                name="Name"
                id="username"
                label="User Name"
                value={this.state.username}
                onChange={this.handlechange}
                placeholder=""
              />
              {this.state.usernameerror ? (
                <div style={{ color: "red" }}>{this.state.usernameerror}</div>
              ) : null}
            </div>
            <div className="row formrow">
              <FloatingLabelInput
                className=""
                name="Name"
                id="Email"
                label="Email Address"
                value={this.state.email}
                onChange={this.handlechange1}
                placeholder=""
              />
              {this.state.emailerror ? (
                <div style={{ color: "red" }}>{this.state.emailerror}</div>
              ) : null}
            </div>
            <div className="row formrow">
              <IntlTelInput
                containerClassName="intl-tel-input"
                // inputClassName=""
                // value={this.state.country}
                // onChange={this.selectcounty}
                // selectcounty={onChange()}
                value={this.state.country}
                onChange={val => this.selectCountry(val)}
              />

              <FloatingLabelInput
                className=""
                name="Name"
                id="phone"
                label="Phone Number"
                value={this.state.phone}
                onChange={this.handlechange2}
                placeholder=""
              />

              {this.state.phoneerror ? (
                <div style={{ color: "red" }}>{this.state.phoneerror}</div>
              ) : null}
            </div>
            <div className="row formrow">
              <FloatingLabelInput
                className=""
                name="Name"
                id="subject"
                label="Subject"
                value={this.state.subject}
                onChange={this.handlechange4}
                placeholder=""
              />
              {this.state.Subjecterror ? (
                <div style={{ color: "red" }}>{this.state.Subjecterror}</div>
              ) : null}
            </div>
            <div className="row formrow">
              <FloatingLabelInput
                className=""
                name="Message"
                id="message"
                label="Text"
                value={this.state.messege}
                onChange={this.handlechange3}
                rows="4"
                placeholder=""
              />
              {this.state.messegeerror ? (
                <div style={{ color: "red" }}>{this.state.messegeerror}</div>
              ) : null}
            </div> */}
            {/* <div>
              <Username />
            </div>

           
           
            <div>
              <Subject />
            </div>
            }
            {/* <div>
              <Messege />
            </div> */}
            <div>
              <Username
                value={this.state.username}
                onChange={this.handlechange}
              />
              {this.state.usernameerror ? (
                <div style={{ color: "red" }}>{this.state.usernameerror}</div>
              ) : null}
            </div>
            <div>
              <Emailaddress
                value={this.state.email}
                onChange={this.handlechange1}
              />
              {this.state.emailerror ? (
                <div style={{ color: "red" }}>{this.state.emailerror}</div>
              ) : null}
            </div>
            <div>
              <PhoneNumber
                value={this.state.phone}
                onChange={this.handlechange2}
              />
              {this.state.phoneerror ? (
                <div style={{ color: "red" }}>{this.state.phoneerror}</div>
              ) : null}
            </div>
            <div>
              <Subject
                value={this.state.subject}
                onChange={this.handlechange4}
              />
              {this.state.Subjecterror ? (
                <div style={{ color: "red" }}>{this.state.Subjecterror}</div>
              ) : null}
            </div>
            <div>
              <Messege
                value={this.state.messege}
                onChange={this.handlechange3}
              />
              {this.state.messegeerror ? (
                <div style={{ color: "red" }}>{this.state.messegeerror}</div>
              ) : null}
            </div>
            <div className="text-center mt-3">
              <button
                type="submit"
                className="btn btn-primary btn-shadow-primary text-center"
                id="contactBtn"
              >
                <span id="btnText">Send message</span>
              </button>
            </div>
            ;
          </form>
        </div>
      </>
    );
  }
}

export default contactus;
