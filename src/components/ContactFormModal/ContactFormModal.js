/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import { Container, Modal, ModalHeader, ModalBody } from "reactstrap";
import { useForm } from "react-hook-form";
import fetch from "isomorphic-fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhoneInput, { formatPhoneNumberIntl } from "react-phone-number-input";
import "./ContactFormModal.css";
import "react-phone-number-input/style.css";
import "../../css/contactus.css";
import "../../css/form-floating-label.css";

const ContactFormModal = props => {
  const { modal, toggle } = props;
  const [success, setSuccess] = useState(false);
  const [submintForm, setSubmitForm] = useState(false);
  const [country, setCountry] = useState("");
  const [value, setValue] = useState();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.ipgeolocation.io/ipgeo?apiKey=16c06a48afce45e5a1c1427e1c4b628f"
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCountry(data.country_code2);
      });
  }, [success]);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, event) => {
    setSubmitForm(true);
    const payload = {
      Full_Name: data.fullname,
      Email: data.email,
      Phone: formatPhoneNumberIntl(value),
      Date: new Date(),
      Message: data.message,
      Website: "ZYCLYX",
      Company: data.company,
      Country: data.country,
      Interested: data.interest,
    };

    // fetch("http://localhost:1337/business-enquiries", {
    fetch("https://admin-zyclyx.herokuapp.com/business-enquiries", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        setSuccess(true);
        return res.json();
      })
      .then(() => {
        event.target.reset();
        setValue("");
        setHasError(false);
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
        setSubmitForm(false);
      })
      .catch(error => {
        if (error) {
          setSuccess(false);
          setSubmitForm(false);
          setHasError(true);
        }
      });
  };

  return (
    <div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="full-width-modal"
        contentClassName="full-width-modal"
      >
        <ModalHeader toggle={toggle} className="text-center">
          We are happy to assist you with your queries
        </ModalHeader>
        <ModalBody>
          <Container className="c-form-wrapper">
            {success && (
              <div className="success-msg">
                <h4 className="text-center">Thank you for contacting us!</h4>
                <p className="text-center">
                  We will get in touch with you soon
                </p>
              </div>
            )}
            {hasError && (
              <p className="text-center text-danger py-3">
                Something Went wrong, Please try after some time
              </p>
            )}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="floating-label-form c-form"
            >
              <div className="row py-md-2 d-flex justify-content-center">
                <div className="col-lg-10 col-12">
                  <div className="form-group floating-label py-1">
                    <input
                      type="text"
                      className="form-control"
                      name="fullname"
                      placeholder="Full Name"
                      ref={register({ required: true })}
                    />
                    {errors.fullname && (
                      <span className="err-msg">*Fullname is required</span>
                    )}
                    <label htmlFor="username">
                      Full Name
                      <span className="required">*</span>
                    </label>
                  </div>
                </div>
                <div className="col-lg-10 col-12">
                  <div className="form-group floating-label py-1">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      autoComplete="off"
                      placeholder="Email"
                      pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                      ref={register({ required: true })}
                    />
                    {errors.email && (
                      <span className="err-msg">*Email is required</span>
                    )}
                    <label htmlFor="email">
                      Email
                      <span className="required">*</span>
                    </label>
                  </div>
                </div>
                <div className="col-lg-10 col-12">
                  <PhoneInput
                    placeholder="Work Phone"
                    className="form-group floating-label py-1"
                    value={value}
                    onChange={setValue}
                    defaultCountry={country}
                    required
                  />
                </div>
                <div className="col-lg-10 col-12">
                  <div className="form-group floating-label py-1">
                    <input
                      type="text"
                      className="form-control"
                      name="company"
                      placeholder="Company"
                      ref={register({ required: true })}
                    />
                    {errors.company && (
                      <span className="err-msg">*Company name is required</span>
                    )}
                    <label htmlFor="company">
                      Company
                      <span className="required">*</span>
                    </label>
                  </div>
                </div>
                <div className="col-lg-10 col-12">
                  <div className="form-group floating-label py-1">
                    <input
                      type="text"
                      className="form-control"
                      name="country"
                      placeholder="Country"
                      ref={register({ required: true })}
                    />
                    {errors.country && (
                      <span className="err-msg">*Country is required</span>
                    )}
                    <label htmlFor="country">
                      Country
                      <span className="required">*</span>
                    </label>
                  </div>
                </div>
                <div className="col-lg-10 col-12">
                  <div className="form-group floating-label py-1">
                    <input
                      type="text"
                      className="form-control"
                      name="interest"
                      placeholder="Intrested In"
                      ref={register({ required: true })}
                    />
                    {errors.interest && (
                      <span className="err-msg">
                        *Interested In is required
                      </span>
                    )}
                    <label htmlFor="interest">
                      Interested In
                      <span className="required">*</span>
                    </label>
                  </div>
                </div>
                <div className="col-lg-10 col-12">
                  <div className="form-group floating-label py-1">
                    <textarea
                      className="form-control pt-3 pb-4"
                      name="message"
                      placeholder="Description"
                      ref={register({ required: true, max: 300 })}
                    />
                    {errors.message && (
                      <span className="err-msg">*Message is required</span>
                    )}
                    <label htmlFor="message">
                      Description
                      <span className="required">*</span>
                    </label>
                  </div>
                </div>
                <div className="col-12" />
                <button
                  type="submit"
                  className="button d-flex align-items-center btn-style my-4"
                  disabled={submintForm}
                >
                  {submintForm ? (
                    <>
                      Sending ..
                      <div
                        className="spinner-border spinner-border-sm ml-3 text-warning"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    </>
                  ) : (
                    "Message us"
                  )}
                  <FontAwesomeIcon icon="arrow-right" className="btn-icon" />
                </button>
              </div>
            </form>
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ContactFormModal;
