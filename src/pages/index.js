import React, { useState } from "react";
import { Link } from "gatsby";
import {
  Container,
  Col,
  Row,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
import Layout from "../components/Layout/Layout";
import Industries from "../components/Homepage/Industries";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import "../styles/Industry.css";
import Footer from "../components/Footer/footer";
import "../css/home.css";
import NewAgeBG from "../Images/new-age.jpg";
import NetworkBG from "../Images/security.jpg";
import RPABG from "../Images/rpa.jpg";
import OCRBG from "../Images/ocr.jpg";

const items = [
  {
    src: NewAgeBG,
    serviceText:
      "Artificial intelligence is a branch that allows creating smart machines based on the principle of human intelligence. Our team of AI experts works on machines to help them mimic and execute tasks, from the simplest to complex. It aims to include learning, reasoning, and perception.",
    captionOne: "Building future with",
    captionTwo: "Artificial Intelligence",
    imgLeft: true,
    key: 1,
    linkTo: "/artificial-intelligence",
  },
  {
    src: RPABG,
    serviceText:
      "Artificial intelligence is a branch that allows creating smart machines based on the principle of human intelligence. Our team of AI experts works on machines to help them mimic and execute tasks, from the simplest to complex. It aims to include learning, reasoning, and perception.",
    captionOne: "Building future with",
    captionTwo: "Robotic Process Automation",
    imgLeft: false,
    key: 2,
    linkTo: "/robotic-process-automation",
  },
  {
    src: OCRBG,
    serviceText:
      "Artificial intelligence is a branch that allows creating smart machines based on the principle of human intelligence. Our team of AI experts works on machines to help them mimic and execute tasks, from the simplest to complex. It aims to include learning, reasoning, and perception.",
    captionOne: "Building future with",
    captionTwo: "Optical Character Recognition",
    imgLeft: true,
    key: 3,
    linkTo: "/optical-character-recognition",
  },
  {
    src: NetworkBG,
    serviceText:
      "Artificial intelligence is a branch that allows creating smart machines based on the principle of human intelligence. Our team of AI experts works on machines to help them mimic and execute tasks, from the simplest to complex. It aims to include learning, reasoning, and perception.",
    captionOne: "Building future with",
    captionTwo: "Network Security",
    imgLeft: false,
    key: 4,
    linkTo: "/network-security",
  },
];

export default () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        className="service-item"
      >
        <Row>
          {item.imgLeft && (
            <Col className="service-img">
              <img src={item.src} alt="new age" />
            </Col>
          )}
          <Col className="p-5">
            <div className="py-5">
              <h2 className="service-title text-center">
                <span>{item.captionOne}</span>
                <br />
                {item.captionTwo}
              </h2>
              <p className="px-5">{item.serviceText}</p>
              <p className="text-center">
                <Link to={item.linkTo} className="text-center">
                  Read More
                </Link>
              </p>
            </div>
          </Col>
          {!item.imgLeft && (
            <Col className="service-img">
              <img src={item.src} alt="new age" />
            </Col>
          )}
        </Row>
      </CarouselItem>
    );
  });
  return (
    <>
      <Layout>
        <Container className="home-banner">
          <h1>
            Real world solutions
            <br />
            for sustainable performance
          </h1>
        </Container>

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
        <Container fluid className="service-slider">
          <SectionTitle title="Core Services" />
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
          </Carousel>
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
        <Industries />
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
                        <h3>forecast</h3>
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
<<<<<<< HEAD
        <Footer />
=======
        <Container className="clients">
          <p />
        </Container>
>>>>>>> 2b8cca2206b748b8250b3a4e2f3589e51d7c13bc
      </Layout>
    </>
  );
};
