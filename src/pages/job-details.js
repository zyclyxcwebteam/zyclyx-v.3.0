/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col } from "reactstrap";
import fetch from "isomorphic-fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhoneInput, {
  formatPhoneNumberIntl,
  parsePhoneNumber,
} from "react-phone-number-input";
import Layout from "../components/Layout/Layout";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import "../css/job-description.css";
import "../css/form-floating-label.css";
import "react-phone-number-input/style.css";

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
  const [formHasSuccess, setFormHasSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formHasError, setFormHasError] = useState(false);
  const [reRender] = useState(false);
  const [display, setDisplay] = useState({
    showReq: true,
    showRes: false,
    showForm: false,
    formBtn: true,
  });
  const [value, setValue] = useState();
  const [country, setCountry] = useState("");
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    fetch(
      "https://api.ipgeolocation.io/ipgeo?apiKey=16c06a48afce45e5a1c1427e1c4b628f"
    )
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        setCountry(data.country_code2);
      });
  }, [reRender]);

  const handleFileUpload = event => {
    setResumeFile(event.target.files[0]);
  };
  // get job details from DB and store it in state
  useEffect(() => {
    const { location } = props;
    const { id } = location.state;
    fetch(`https://admin-zyclyx.herokuapp.com/job-openings/${id}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setJobDetails(data);
      })
      .catch(() => {});
  }, [reRender]);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, event) => {
    setIsLoading(true);
    const payload = {
      Firstname: data.firstname,
      Lastname: data.lastname,
      Email: data.email,
      Phone: formatPhoneNumberIntl(value),
      Message: data.message,
      Position: jobDetails.Title,
      Website: "zyclyx",
      Country_Code: parsePhoneNumber(value)
        ? parsePhoneNumber(value).country
        : "",
      Date: new Date(),
    };

    // eslint-disable-next-line no-undef
    const formData = new FormData();
    formData.append("files.Resume", resumeFile, resumeFile.name);
    formData.append("data", JSON.stringify(payload));
    // store form data in db
    fetch("https://admin-zyclyx.herokuapp.com/job-applications/", {
      method: "post",
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(() => {
        setFormHasSuccess(true);
        setTimeout(() => {
          setFormHasSuccess(false);
        }, 4000);
        setFormHasError(false);
        setIsLoading(false);
        event.target.reset();
        setValue("");
      })
      .catch(error => {
        if (error) {
          setIsLoading(false);
          setFormHasError(true);
          setTimeout(() => {
            setFormHasError(false);
          }, 3000);
        }
      });
  };

  return (
    <Layout
      showBanner
      active="career"
      title="Job Opportunities with ZYCLYX"
      description={(jobDetails && jobDetails.Title) || "job openings in Zyclyx"}
      modal={modal}
      toggle={toggle}
    >
      <HeroBanner
        title={jobDetails && jobDetails.Title}
        imageClass="job-description"
        toggle={toggle}
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
                    jobDetails.Requirements &&
                    jobDetails.Requirements.length !== 0 &&
                    jobDetails.Requirements.split("\n").map(data => {
                      return (
                        data !== "" && (
                          <Requirement item={data} key={data.slice(0.5)} />
                        )
                      );
                    })}
                </div>
              </>
            ) : null}

            {display.showRes ? (
              <>
                <div className="py-4">
                  <h3 className="py-3">Responsibilities</h3>
                  {jobDetails &&
                    jobDetails.Responsibilities &&
                    jobDetails.Responsibilities.length !== 0 &&
                    jobDetails.Responsibilities.split("\n").map(data => {
                      return (
                        data !== "" && (
                          <Requirement item={data} key={data.slice(0.5)} />
                        )
                      );
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
                                <PhoneInput
                                  placeholder="Phone"
                                  className="form-group floating-label py-1"
                                  value={value}
                                  onChange={setValue}
                                  defaultCountry={country}
                                  required
                                />
                              </div>

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
                              {formHasError && (
                                <p className="text-center text-danger py-3">
                                  Something Went wrong, Please try after some
                                  time
                                </p>
                              )}
                              <div className="col-12 order-md-1 order-sm-0 mx-auto d-flex justify-content-center">
                                <button
                                  type="submit"
                                  className="button d-flex align-items-center btn-style my-4 req1"
                                  disabled={isLoading}
                                >
                                  {isLoading ? (
                                    <>
                                      Sending ...
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
                          {formHasSuccess ? (
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
