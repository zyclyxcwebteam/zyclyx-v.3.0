/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Layout from "../components/Layout/Layout";
import HomeBanner from "../components/Homepage/HomeBanner/HomeBanner";
import CompanyIntro from "../components/Homepage/CompanyIntro/CompanyIntro";
import OurServices from "../components/Homepage/CoreServices/OurServices";
import Industries from "../components/Homepage/Industries/Industries";
import CompanyStats from "../components/Homepage/CompanyStats/CompanyStats";
import ProofOfConcept from "../components/Homepage/ProofOfConcept/ProofOfConcept";
import Clients from "../components/Homepage/Clients";
import Partners from "../components/Homepage/Partners";

import "../components/Homepage/Clients.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/*
 * @components/Homepage/
 */
const HomePage = () => {
  const [showClients, setShowClients] = useState(true);
  return (
    <>
      <Layout
        showBanner
        active="home"
        title="Providing IT Services in India & USA"
        description="ZYCLYX is a purpose-driven organization that promises phenomenal Artificial Intelligence, Robotic Process Automation, Staffing Solutions, Web App Development, Digital Marketing Services and IT services in India and USA"
        keywords="Zyclyx, Zyclyx services, AI Services, RPA Services, IT Services, Staffing Solutions, Digital Marketing, Web App Development, India, USA"
      >
        <HomeBanner />
        <CompanyIntro />
        <OurServices />
        <Industries />
        <CompanyStats />
        <ProofOfConcept />
        {/* our clients */}
        <Container className="clients">
          <div className="title-buttons d-flex justify-content-center align-items-center pb-5">
            <button
              type="button"
              className={`t-btn section-title-sm btn-left ${
                !showClients && "t-btn-active"
              }`}
              onClick={() => setShowClients(!showClients)}
              disabled={!showClients}
            >
              Our Clients
            </button>
            <button
              type="button"
              className={`t-btn section-title-sm ${
                showClients && "t-btn-active"
              }`}
              disabled={showClients}
              onClick={() => setShowClients(!showClients)}
            >
              Technology Partners
            </button>
          </div>
          {showClients ? <Partners /> : <Clients />}
        </Container>
      </Layout>
    </>
  );
};
export default HomePage;
