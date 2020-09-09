import React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col } from "reactstrap";
import { Controller, Scene } from "react-scrollmagic";
import Layout from "../components/Layout/Layout";
import "../css/service.css";

const PageTemplate = props => {
  const { data } = props;
  const { dataJson } = data;
  const {
    title,
    caption,
    overview,
    solTitle,
    services,
    bannerImage,
    solImage,
    scroll,
    duration,
  } = dataJson;
  return (
    <Layout showBanner title={title} description={caption} active="service">
      <Container fluid className="hero-banner">
        <Row className="h-100">
          <Col
            sm="12"
            md="6"
            className="title-box d-flex flex-column justify-content-center align-items-center"
          >
            <h2 className="banner-title">{title}</h2>
          </Col>
          <Col
            sm="12"
            md="6"
            className="img-box d-flex justify-content-center align-items-md-center  p-3"
          >
            <div className={`banner-img ${bannerImage}`} />
          </Col>
        </Row>
      </Container>
      {/* overview */}
      <Container fluid className="overview-wrapper py-2 py-md-5">
        <Container>
          <h3 className="overview-title text-center py-2 py-md-4">{caption}</h3>
          <p className="overview-text">{overview}</p>
        </Container>
      </Container>
      {/* ADDITIONAL SECTION FOR STAFFING SOLUTIONS */}
      {title === "Staffing Solutions" && (
        <Container className="py-4">
          <h2 className="text-center py-3">Contract Staffing Modals</h2>
          <p className="text-center">
            We have designed different models to cater to your varied staffing
            needs. Go ahead and pick what suits you the best!
          </p>
          <Row className="py-5">
            <Col sm="12" md="4">
              <h4>Contract Staffing</h4>
              <p className="mt-3">
                Opt for this model to build your staff strength with ease,
                depending on your workload or projects, and reduce
                employee-related costs. Pick from our vast talent pool of
                skilled and experienced professionals
              </p>
            </Col>
            <Col sm="12" md="4">
              <h4>Contract to Hire</h4>
              <p className="mt-3">
                This model offers the best and risk-free way to hire the right
                talent for your organization. It allows you to assess the
                temporary employees and gives room to evaluate their skills on
                the job before you hire them permanently.
              </p>
            </Col>
            <Col sm="12" md="4">
              <h4>Direct Hire</h4>
              <p className="mt-3">
                Our experienced team of recruiters work to streamline the hiring
                process. They search for the right candidate and screen them for
                you, allowing you to pick from the best.
              </p>
            </Col>
          </Row>
        </Container>
      )}

      {/* solutions title */}
      <Container fluid className="py-2 py-md-5 solutions-title">
        <h3 className="solutions-title-text text-center">{solTitle}</h3>
      </Container>
      {/* solutions cards */}

      <Container fluid className="solutions-wrapper py-3 py-md-5">
        {scroll ? (
          <Row className="px-3 pl-md-5 scroll">
            <Controller>
              <Scene
                duration={`${duration}%`}
                triggerElement=".solutions-wrapper"
                triggerHook="0"
                pin
              >
                <div
                  className={`scroll-title d-flex justify-content-center sol-img ${solImage}`}
                />
              </Scene>
              <Col
                sm="12"
                md="6"
                className="scroll-pages sol-cards d-flex align-items-center justify-content-center flex-column px-2 px-md-5"
              >
                {services.map(service => {
                  return (
                    <div className="py-3" key={service.title}>
                      <h3 className="py-2">{service.title}</h3>
                      <p>{service.content}</p>
                    </div>
                  );
                })}
              </Col>
            </Controller>
          </Row>
        ) : (
          <Row className="px-3 pl-md-5">
            <Col
              sm="12"
              md="6"
              className={`d-flex justify-content-center sol-img ${solImage}`}
            />
            <Col
              sm="12"
              md="6"
              className="sol-cards d-flex align-items-center justify-content-center flex-column px-2 px-md-5"
            >
              {services.map(service => {
                return (
                  <div className="py-3" key={service.title}>
                    <h3 className="py-2">{service.title}</h3>
                    <p>{service.content}</p>
                  </div>
                );
              })}
            </Col>
          </Row>
        )}
      </Container>
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    dataJson(path: { eq: $slug }) {
      path
      title
      id
      caption
      overview
      solTitle
      bannerImage
      solImage
      scroll
      duration
      services {
        content
        title
      }
    }
  }
`;
