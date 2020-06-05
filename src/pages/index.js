import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
import Layout from "../components/Layout/Layout";
// import ImageCarousel from "../components/Homepage/ImageCarousel";
// import Industries from "../components/Homepage/Industries";
// import OurServices from "../components/Homepage/OurServices";
import "../styles/Industry.css";
import "../css/home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export default ({ data }) => {
  return (
    <>
      <Layout>
        {/* <ImageCarousel /> */}
        <Container fluid className="overview py-5">
          <Container>
            <Row>
              <Col
                md="3"
                sm="12"
                className="d-flex align-items-center text-center"
              >
                <div>
                  <h5 className="welcome-text">Welcome to</h5>
                  <h2 className="brand">ZYCLYX</h2>
                </div>
              </Col>
              <Col md="9" sm="12">
                <p className="text-justify">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  typesetting industry. Lorem Ipsum has been the industry&apos;
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid />
        {/* Company stats */}
        <Container fluid className="stats-wrapper py-5 mt-5">
          <Container className="py-5">
            <Row>
              <Col>
                <div>
                  <h3 className="stat-title text-center">20 +</h3>
                  <p className="stat-caption text-center">Clients Served</p>
                </div>
              </Col>
              <Col>
                <h3 className="stat-title text-center">40 +</h3>
                <p className="stat-caption text-center">Projects Delivered</p>
              </Col>
              <Col>
                <h3 className="stat-title text-center">350 +</h3>
                <p className="stat-caption text-center">Processess Automated</p>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className="py-5 poc-wrapper">
          <Container>
            <h2 className="text-center poc-title">
              Fostering your trust in us with
              <br />
              <span className="poc-title-bg">Free Proof of Concept</span>
            </h2>
            <p className="text-center py-4">
              With Proof of Concept, we offer you value added service in terms
              of advanced prototype creation which help in demonstrating our
              work potential.
              <br />
              It also assists you to checkout its feasibility in your business
              process, hence optimizing the experience.
            </p>
            <Row>
              <Col sm="12" className="mx-auto">
                <Row className="py-4 mx-auto proof-row">
                  <Col md="4" sm="4" className="p-0 d-flex">
                    <Row className="mx-auto">
                      <Col sm="3" className="p-0">
                        <h2 className="poc-letter">F</h2>
                      </Col>
                      <Col sm="8" className="poc-content p-0">
                        <h3>Forecast</h3>
                        <p>
                          Act as a tool to forecast the feasibility of projects.
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="4" sm="4" className="p-0">
                    <Row className="mx-auto">
                      <Col sm="3" className="p-0">
                        <h1 className="poc-letter">R</h1>
                      </Col>
                      <Col sm="8" className="poc-content p-0">
                        <h3>Report</h3>
                        <p>Provides a complete report on project evaluation</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="4" sm="4" className="p-0">
                    <Row>
                      <Col sm="3" className="p-0">
                        <h1 className="poc-letter">C</h1>
                      </Col>
                      <Col sm="8" className="p-0 poc-content">
                        <h3>Cost Effective</h3>
                        <p>Saves your businesses time and money</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container className="clients">
          {/*  eslint-disable-next-line react/jsx-props-no-spreading */}
          <Slider {...settings}>
            {data.allFile.edges.map(node => {
              return (
                <div>
                  <Img fixed={node.node.childImageSharp.fixed} />
                </div>
              );
            })}
          </Slider>
        </Container>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "clients" } }) {
      edges {
        node {
          childImageSharp {
            fixed(height: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
