import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Industries.css";

const IndustryCard = ({ title }) => {
  return (
    <div>
      <h3 className="text-center">{title}</h3>
    </div>
  );
};
const Industries = () => {
  return (
    <Container fluid className="py-2 px-0 industry-wrapper">
      {/* title */}
      <Container>
        <h2>Industries</h2>
      </Container>
      {/* industry text */}
      <Container>
        <p>Some text here</p>
      </Container>
      {/* Industry Cards */}
      <Container className="ind-cards">
        <Row>
          <Col>
            <IndustryCard title="Banking" />
          </Col>
          <Col>
            <IndustryCard title="Telecom" />
          </Col>
          <Col>
            <IndustryCard title="Retail" />
          </Col>
          <Col>
            <IndustryCard title="Healthcare" />
          </Col>
          <Col>
            <IndustryCard title="Logistics" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Industries;
