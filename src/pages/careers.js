import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import fetch from "isomorphic-fetch";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBriefcase,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Layout from "../components/Layout/Layout";
import Comejoin from "../../static/images/comejoin.svg";
import "../css/careers.css";

const JobCard = props => {
  const { active, title, location, id, experience } = props;
  return (
    <Col
      md="6"
      sm="12"
      className={`py-4 job-card ${active && "active"}`}
      key={id}
    >
      <h2 className="text-center job-title">{title}</h2>
      <h5 className="text-center job-location">{location}</h5>
      <div className="job-info d-flex justify-content-center py-3">
        <div className="d-flex align-items-center">
          <div className="job-icon mx-3">
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <div>
            <p className="m-0 info-title">Experience</p>
            <p className="m-0 info-text">{experience}</p>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="job-icon mx-3">
            <FontAwesomeIcon icon={faUserAlt} />
          </div>
          <div>
            <p className="m-0 info-title">Job Type</p>
            <p className="m-0 info-text">Full Time</p>
          </div>
        </div>
      </div>
      <p className="d-flex justify-content-center py-3 m-0">
        <Link
          to="/job-details/"
          state={{ id }}
          className="button d-flex align-items-center"
        >
          Apply Now
          <FontAwesomeIcon icon="arrow-right" className="btn-icon" />
        </Link>
      </p>
    </Col>
  );
};

const careers = () => {
  const [openings, setOpenings] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // fetch("https://agile-plateau-09650.herokuapp.com/jobopenings")
    fetch("https://admin-zyclyx.herokuapp.com/job-openings?Status=open")
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        setLoading(false);
        setOpenings(jsonData);
      });
  }, [openings]);

  return (
    <Layout
      showBanner
      active="career"
      title="Career Opportunities"
      description="In ZYCLYX, we empower employees to explore their talents
    and abilities in tandem with their careers"
    >
      <HeroBanner title="Build your future with us" imageClass="career" />
      <Container fluid className="c-overview-wrapper py-3 py-md-5">
        <Container>
          <h3 className="c-overview-text mb-0">
            If you have a desire to excel, we have the potential to help you
            prosper.
          </h3>
          <p className="text-content">
            In ZYCLYX, we empower employees to explore their talents and
            abilities in tandem with their careers.
          </p>
        </Container>
      </Container>

      <Container fluid className="join-us-wrapper py-md-5 py-3">
        <Container>
          <Row>
            <Col md="4" className="c-title-border">
              <div className="py-md-5 py-3">
                <h2 className="c-section-title">Come Join Us</h2>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <img src={Comejoin} alt="new age" className="mt-4 imgstyle" />
              </div>
            </Col>
            <Col
              md={8}
              sm={12}
              className="d-flex justify-content-center align-items-center"
            >
              <ul className="join-us-points">
                <li className="d-flex align-items-center">
                  <span className="arrow-wrapper d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrow-right"
                    />
                  </span>

                  <span className="ml-3 join-us-text">
                    As we believe a team of great minds will produce greater
                    results
                  </span>
                </li>

                <li className="d-flex align-items-center">
                  <span className="arrow-wrapper d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrow-right"
                    />
                  </span>

                  <span className="ml-3 join-us-text">
                    Explore numerous opportunities to grow and innovate
                  </span>
                </li>

                <li className="d-flex align-items-center">
                  <span className="arrow-wrapper d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrow-right"
                    />
                  </span>

                  <span className="ml-3 join-us-text">
                    Be a part of the team that encourages imaginative and out of
                    box thinking
                  </span>
                </li>
                <li className="d-flex align-items-center">
                  <span className="arrow-wrapper d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrow-right"
                    />
                  </span>

                  <span className="ml-3 join-us-text">
                    Excel in your career with our training and development
                    programmes
                  </span>
                </li>
                <li className="d-flex align-items-center">
                  <span className="arrow-wrapper d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrow-right"
                    />
                  </span>

                  <span className="ml-3 join-us-text">
                    If you’ve got a smarter way to get the job done.
                  </span>
                </li>
                <li className="d-flex align-items-center">
                  <span className="arrow-wrapper d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrow-right"
                    />
                  </span>

                  <span className="ml-3 join-us-text">
                    Experience working with a supportive and enthusiastic team
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid>
        <Container>
          <div className="py-5">
            <h2 className="c-section-title">Open Positions</h2>
          </div>
        </Container>
        <Container>
          {loading ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <Row className="">
              {openings.length !== 0 &&
                openings.map(opening => {
                  return (
                    <JobCard
                      title={opening.Title}
                      location={opening.Location}
                      id={opening.id}
                      key={opening.id}
                      experience={opening.Experience}
                    />
                  );
                })}
            </Row>
          )}
        </Container>
      </Container>
      {/* Spacer */}
      <Container fluid className="py-4" />
    </Layout>
  );
};

export default careers;
