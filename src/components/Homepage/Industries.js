import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectioTitle from "../SectionTitle/SectionTitle";
import "./Industries.css";

const IndustryCard = ({ title }) => {
  return (
    <div className="i-card">
      <h3 className="text-center">{title}</h3>
    </div>
  );
};
const Industries = () => {
  return (
    <Container fluid className="py-2 px-0 industry-wrapper">
      {/* title */}
      <Container>
        <SectioTitle title="Industry Expertise" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </Container>
      {/* industry text */}

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
