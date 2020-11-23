import React, { useState } from "react";
import {
  Container,
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
  Row,
  Col,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fetch from "isomorphic-fetch";
import { useForm } from "react-hook-form";
import "./Footer.css";

const SocialMediaIcon = ({ hrefURL, title, icon }) => {
  return (
    <li className="list-inline-item mx-3 h4 mb-0">
      <a href={hrefURL} title={title} target="__blank" className="text-success">
        <FontAwesomeIcon icon={["fab", icon]} />
      </a>
    </li>
  );
};

const Footer = () => {
  const { register, handleSubmit, errors } = useForm();
  const [formSubmitting, setFormSubmitting] = useState(false);

  const SubmitEmailSubscription = (data, event) => {
    setFormSubmitting(true);
    // store form data in db
    const payload = {
      Subscriber_Email: data.Subscriber_Email,
      Subscription_Date: new Date(),
    };
    fetch("https://admin-zyclyx.herokuapp.com/email-subscriptions/", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        setFormSubmitting(false);
        event.target.reset();
        return response.json();
      })
      .then(resJSON => {
        console.log(resJSON);
      })
      .catch(error => {
        setFormSubmitting(false);
        console.log(error);
      });
  };
  return (
    <Container fluid className="px-0">
      <footer className="zyx-footer-module px-5">
        <Container fluid className="p-3">
          <Row>
            <Col lg={4}>
              <p className="h6 text-white">India Office</p>
              <address>
                3rd Floor, Pearl Enclave, Green Valley Road No-5, Banjara Hills,
                Hyderabad, Telangana 500034, India.
              </address>
              <div className="phone-wrapper">
                <p>
                  <span className="mr-2">
                    <FontAwesomeIcon
                      icon={["fas", "phone-square-alt"]}
                      className="text-success"
                    />
                  </span>
                  (+91) 40 2354 9363
                </p>
                <p className="mb-md-0">
                  <span className="mr-2">
                    <FontAwesomeIcon
                      icon={["fas", "mobile-alt"]}
                      className="text-success"
                    />
                  </span>
                  (+91) 733 755 7310
                </p>
              </div>
            </Col>
            <Col lg={4} className="mt-3 mt-lg-1">
              <p className="h6 text-white">USA Office</p>
              <address>
                2150 North First Street, 4th Floor, San Jose, California-95131,
                United States.
              </address>
              <p />
              <div className="phone-wrapper">
                <p>
                  <span className="mr-2">
                    <FontAwesomeIcon
                      icon={["fas", "phone-square-alt"]}
                      className="text-success"
                    />
                  </span>
                  (+1) 2134604609 (Ext: 103)
                </p>
              </div>
            </Col>
            <Col lg={4} className="d-flex align-items-center">
              <form onSubmit={handleSubmit(SubmitEmailSubscription)}>
                <InputGroup>
                  <Input
                    name="Subscriber_Email"
                    type="email"
                    placeholder="Your Email Address"
                    className="subscribe-input border border-success"
                    innerRef={register({ required: true })}
                  />
                  {errors.Subscriber_Email && (
                    <span className="err-msg">* Please enter your email</span>
                  )}
                  <InputGroupAddon addonType="append">
                    <Button type="submit" color="success">
                      {formSubmitting ? "Sending .. " : "subscribe"}
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </form>
            </Col>
          </Row>
        </Container>
        <Container fluid className="py-3 px-md-3 px-2 border-top footer-bottom">
          <Row>
            <Col lg={4} className="order-0">
              <p className="mb-0 text-success text-center text-lg-left py-1 py-lg-2">
                <span>
                  <FontAwesomeIcon
                    icon={["fas", "envelope"]}
                    className="text-success mr-2"
                  />
                </span>
                info@zyclyx.com
              </p>
            </Col>
            <Col lg={4} className="order-lg-2 order-3">
              <p className="text-success text-center mb-lg-0 py-2 py-lg-1">
                <small>©2020 ZYCLYX. All rights reserved</small>
              </p>
            </Col>
            <Col
              lg={4}
              className="d-flex justify-content-lg-end justify-content-center py-3 py-lg-1 order-lg-3 order-2"
            >
              <ul className="list-inline mb-0 d-flex align-items-lg-center">
                <SocialMediaIcon
                  hrefURL="https://www.facebook.com/Zyclyx.IT"
                  title="facebook"
                  icon="facebook"
                />
                <SocialMediaIcon
                  hrefURL="https://www.instagram.com/zyclyx_it"
                  title="instagram"
                  icon="instagram"
                />
                <SocialMediaIcon
                  hrefURL="https://twitter.com/Zyclyx_IT"
                  title="twitter"
                  icon="twitter"
                />
                <SocialMediaIcon
                  hrefURL="https://www.linkedin.com/company/zyclyx-consulting-pvt-ltd"
                  title="linkedin"
                  icon="linkedin"
                />
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </Container>
  );
};

export default Footer;
