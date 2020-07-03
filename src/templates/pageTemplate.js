import React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col } from "reactstrap";
import Layout from "../components/Layout/Layout";
// import RPABannerImage from "../../static/images/rpa.svg";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import "../css/service.css";

const SolutionCard = ({ title, text }) => {
  return (
    <div className="py-3">
      <h3 className="py-2">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

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
    <Layout showBanner>
      <HeroBanner title={title} image={bannerImage} />
      {/* overview */}
      <Container fluid className="overview-wrapper py-5">
        <Container>
          <h3 className="overview-title text-center py-4">{caption}</h3>
          <p className="overview-text">{overview}</p>
        </Container>
      </Container>

      {/* solutions title */}
      <Container fluid className="py-5 solutions-title">
        <h3 className="solutions-title-text text-center">{solTitle}</h3>
      </Container>
      {/* solutions cards */}
      <Container fluid className="solutions-wrapper py-5">
        <Row>
          <Col
            sm="12"
            md="6"
            className="sol-image d-flex justify-content-center align-items-center"
          >
            <img src={solImage} alt="new age" />
          </Col>
          <Col
            sm="12"
            md="6"
            className="sol-cards d-flex align-items-center justify-content-center flex-column px-5"
          >
            {services.map(service => {
              return (
                <SolutionCard title={service.title} text={service.content} />
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
