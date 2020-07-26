import React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col } from "reactstrap";
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
  } = dataJson;
  return (
    <Layout showBanner title={title} description={caption}>
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

      {/* solutions title */}
      <Container fluid className="py-2 py-md-5 solutions-title">
        <h3 className="solutions-title-text text-center">{solTitle}</h3>
      </Container>
      {/* solutions cards */}
      <Container fluid className="solutions-wrapper py-3 py-md-5">
        <Row className="px-3 pl-md-5">
          <Col
            sm="12"
            md="6"
            className={`d-flex justify-content-center align-items-center sol-img ${solImage}`}
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
      services {
        content
        title
      }
    }
  }
`;
