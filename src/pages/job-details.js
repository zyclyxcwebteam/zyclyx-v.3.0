/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col } from "reactstrap";
import fetch from "isomorphic-fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Layout from "../components/Layout/Layout";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import "../css/job-description.css";
import "../css/form-floating-label.css";

// Job Requirement/Responsibility point

const Requirement = props => {
  const { item } = props;
  return (
    <div className="d-flex align-items-center py-2">
      <span className="c-arrow-circle">
        <FontAwesomeIcon icon="arrow-right" />
      </span>
      <p className="ml-3 m-0 c-point-text">{item}</p>
    </div>
  );
};

const jobDescription = props => {
  const [jobDetails, setJobDetails] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submintForm, setSubmitForm] = useState(false);
  const [display, setDisplay] = useState({
    showReq: true,
    showRes: false,
    showForm: false,
    formBtn: true,
  });
  const [phone, setPhone] = useState(null);

  const handleOnChange = (_value, _data) => {
    setPhone({
      phone: _value.slice(_data.dialCode.length),
      code: _data.dialCode,
    });
  };
  const handleFileUpload = event => {
    setResumeFile(event.target.files[0]);
  };
  // get job details from DB and store it in state
  useEffect(() => {
    const { location } = props;
    const { id } = location.state;
    fetch(`https://agile-plateau-09650.herokuapp.com/jobopenings/${id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setJobDetails(data);
      });
  }, [jobDetails]);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, event) => {
    setSubmitForm(true);
    const payload = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      phone: phone.phone,
      subject: data.message,
      position: jobDetails.title,
      website: "zyclyx",
      country_code: phone.code,
      date: new Date(),
    };

    // store form data in db
    fetch("https://zyclyx-backend-api.herokuapp.com/job-applications/", {
      method: "post",
      body: JSON.stringify(payload),
    })
      .then(response => {
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        }, 4000);
        setSubmitForm(false);
        event.target.reset();
        return response.json();
      })
      .then(jsondata => {
        // upload file
        // eslint-disable-next-line no-undef
        const fileData = new FormData();
        fileData.append("files", resumeFile);
        fileData.append("refId", jsondata.id);
        fileData.append("field", "resume");
        fileData.append("ref", "job-applications");

        fetch("https://zyclyx-backend-api.herokuapp.com/upload/", {
          method: "post",
          body: fileData,
        }).then(res => {
          return res;
        });
      })
      .catch(() => {});
  };

  return (
    <Layout
      showBanner
      active="career"
      title="Job Opportunities with ZYCLYX"
      description={(jobDetails && jobDetails.title) || "job openings in Zyclyx"}
    >
      <HeroBanner
        title={jobDetails && jobDetails.title}
        imageClass="job-description"
      />
      <Container fluid>
        <Row className="d-flex job-container">
          {/* Side menu to switch tabs - requirements, responsibilities, application form */}
          <Col md="3" className="p-0 d-flex flex-column align-items-center">
            <div className="d-flex flex-column side-menu-wrapper py-4 w-100">
              <div className={`px-5 ${display.showReq && "c-btn-active"}`}>
                <button
                  type="button"
                  className="c-btn my-4"
                  onClick={() => {
                    return setDisplay({
                      showReq: true,
                      showRes: false,
                      showForm: false,
                      formBtn: true,
                    });
                  }}
                >
                  Requirements
                </button>
              </div>

              <div className={`px-5 ${display.showRes && "c-btn-active"}`}>
                <button
                  type="button"
                  className="c-btn my-4"
                  onClick={() => {
                    return setDisplay({
                      showReq: false,
                      showRes: true,
                      showForm: false,
                      formBtn: true,
                    });
                  }}
                >
                  Responsibilities
                </button>
              </div>

              {display.formBtn ? (
                <>
                  <div className="px-5">
                    <button
                      type="button"
                      className="button d-flex align-items-center btn-style my-4"
                      onClick={() => {
                        return setDisplay({
                          showReq: false,
                          showRes: false,
                          showForm: true,
                          formBtn: false,
                        });
                      }}
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
                <div className={`px-5 ${display.showForm && "c-btn-active"}`}>
                  <button type="button" className="c-btn my-4">
                    Application Form
                  </button>
                </div>
              )}
            </div>
          </Col>

          <Col md="9" className="job-content-wrapper pl-md-5 pl-3">
            {display.showReq ? (
              <>
                <div className="py-4">
                  <h3 className="py-3">Requirements</h3>
                  {jobDetails &&
                    jobDetails.requirements.map(data => {
                      return <Requirement item={data} key={data.slice(0.5)} />;
                    })}
                </div>
              </>
            ) : null}

            {display.showRes ? (
              <>
                <div className="py-4">
                  <h3 className="py-3">Responsibilities</h3>
                  {jobDetails &&
                    jobDetails.responsibilities.map(data => {
                      return <Requirement item={data} key={data.slice(0.5)} />;
                    })}
                </div>
              </>
            ) : null}

            {display.showForm ? (
              <>
                <div className="z-form py-5">
                  <button
                    type="button"
                    className="form-close-btn"
                    onClick={() => {
                      return setDisplay({
                        showReq: true,
                        showRes: false,
                        showForm: false,
                        formBtn: true,
                      });
                    }}
                  >
                    <FontAwesomeIcon icon="times" className="close-icon" />
                  </button>

                  <section className="appWrapper py-4">
                    <div className="container">
                      <h3 className="py-md-4 py-2 title-3 title-dark text-center">
                        Application Form
                      </h3>
                      <div className="row mx-auto d-flex justify-content-center">
                        <div className="col-xl-6 col-lg-10 col-md-8 col-12">
                          <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="floating-label-form"
                          >
                            <div className="row d-flex justify-content-center">
                              <div className="col-md-6 col-12">
                                <div className="form-group floating-label py-1">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="firstname"
                                    pattern="[a-zA-Z\s]{2,30}"
                                    placeholder="Firstname"
                                    autoComplete="off"
                                    ref={register({ required: true })}
                                  />
                                  {errors.firstname && (
                                    <span className="err-msg">
                                      *Please enter firstname
                                    </span>
                                  )}
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
                                    className="form-control"
                                    name="lastname"
                                    pattern="[a-zA-Z\s]{2,30}"
                                    placeholder="Lastname"
                                    autoComplete="off"
                                    ref={register({ required: true })}
                                  />
                                  {errors.lastname && (
                                    <span className="err-msg">
                                      *Please enter lastname
                                    </span>
                                  )}
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
                                    className="form-control"
                                    name="email"
                                    autoComplete="off"
                                    placeholder="Email"
                                    pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                                    ref={register({ required: true })}
                                  />
                                  {errors.email && (
                                    <span className="err-msg">
                                      *Please enter email
                                    </span>
                                  )}
                                  <label htmlFor="email">
                                    Email-ID
                                    <span className="required">*</span>
                                  </label>
                                </div>
                              </div>
                              <div className="col-12">
                                {/* <div className="form-group floating-label py-1"> */}
                                <PhoneInput
                                  inputProps={{
                                    name: "phone",
                                    required: true,
                                    autoFocus: true,
                                  }}
                                  inputClass="form-control"
                                  containerClass="form-group floating-label"
                                  country="in"
                                  onChange={handleOnChange}
                                  placeholder="Phone"
                                />
                              </div>
                              {/* <div className="col-12">
                                <div className="form-group floating-label py-1">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    placeholder="Phone"
                                    pattern="^[0-9]{3,12}$"
                                    ref={register({ required: true })}
                                  />
                                  {errors.phone && (
                                    <span className="err-msg">
                                      *Please enter phone
                                    </span>
                                  )}
                                  <label>
                                    Phone
                                    <span className="required">*</span>
                                  </label>
                                </div>
                              </div> */}

                              <div className="col-12">
                                <div className="form-group py-1  py-md-2">
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
                                    placeholder="resume"
                                    className="form-control-file"
                                    aria-describedby="inputGroupFileAddon01"
                                    accept=".doc,.docx,.pdf"
                                    ref={register({ required: true })}
                                    onChange={handleFileUpload}
                                  />

                                  {errors.resume && (
                                    <span className="err-msg">
                                      *Please upload resume
                                    </span>
                                  )}
                                </div>
                              </div>

                              <div className="col-12">
                                <div className="form-group floating-label py-1">
                                  <textarea
                                    className="form-control"
                                    name="message"
                                    placeholder="Message"
                                    ref={register({
                                      required: false,
                                      max: 300,
                                    })}
                                  />
                                  {/* {errors.message && (
                                    <span className="err-msg">
                                      *Please enter message
                                    </span>
                                  )} */}
                                  <label htmlFor="message">
                                    Message
                                    {/* <span className="required">*</span> */}
                                  </label>
                                </div>
                              </div>

                              <div className="col-12 order-md-1 order-sm-0 mx-auto d-flex justify-content-center">
                                <button
                                  type="submit"
                                  className="button d-flex align-items-center btn-style my-4 req1"
                                  disabled={submintForm}
                                >
                                  {submintForm ? (
                                    <>
                                      Loading
                                      <div
                                        className="spinner-border spinner-border-sm ml-3 text-warning"
                                        role="status"
                                      >
                                        <span className="sr-only">
                                          Loading...
                                        </span>
                                      </div>
                                    </>
                                  ) : (
                                    "Apply Now"
                                  )}

                                  <FontAwesomeIcon
                                    icon="arrow-right"
                                    className="btn-icon"
                                  />
                                </button>
                              </div>
                            </div>
                          </form>
                          {showSuccess ? (
                            <div className="success-wrapper py-2 my-2 d-flex flex-column align-items-center">
                              <h3>Application received successfully</h3>
                              <p> We will contact you with next steps</p>
                            </div>
                          ) : null}
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
};

export default jobDescription;
