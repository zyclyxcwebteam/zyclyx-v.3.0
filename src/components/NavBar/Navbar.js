import React, { useState } from "react";
import { Link } from "gatsby";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Row,
  Col,
} from "reactstrap";
import Logo from "../../Images/logo-white.png";
// import Logo from "../../images/nav-logo.png";
import "./Navbar.css";

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand href="/">
          <img src={Logo} alt="ZYCLYX" className="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/aboutus">About Us</Link>
            </NavItem>

            <UncontrolledDropdown nav inNavbar className="position-static">
              <DropdownToggle nav caret>
                Services
              </DropdownToggle>
              <DropdownMenu className="w-100 py-3 px-5 mt-0 service-dropdown">
                <Row>
                  <Col sm="12" md="3" className="service-menu">
                    <h4 className="menu-title">New Age Technologies</h4>
                    <ul>
                      <li>
                        <Link to="/robotic-process-automation">
                          Robotic Process Automation
                        </Link>
                      </li>
                      <li>
                        <Link to="/artificial-intelligence">
                          Artificial Intelligence
                        </Link>
                      </li>
                      <li>
                        <Link to="/optical-character-recognition">
                          Optical Character Recognition
                        </Link>
                      </li>
                      <li>
                        <Link to="/blockchain">Blockchain</Link>
                      </li>
                      <li>
                        <Link to="/internet-of-things">Internet of Things</Link>
                      </li>
                      <li>
                        <Link to="/bigdata">Big Data</Link>
                      </li>
                    </ul>
                  </Col>
                  <Col sm="12" md="3" className="service-menu">
                    <h4 className="menu-title">Security Services</h4>
                    <ul>
                      <li>
                        <Link to="/network-security">Network Security</Link>
                      </li>
                      <li>
                        <Link to="/cyber-security">Cyber Security</Link>
                      </li>
                      <li>
                        <Link to="/application-data-security">
                          Application & Data Security
                        </Link>
                      </li>
                      <li>
                        <Link to="/governance-and-compliance">
                          Governance & Compliance
                        </Link>
                      </li>
                      <li>
                        <Link to="/endpoint-mobile-security">
                          Endpoint & Mobile Security
                        </Link>
                      </li>
                      <li>
                        <Link to="/identity-access-management">
                          Identity & Access Management
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col sm="12" md="3" className="service-menu">
                    <h4 className="menu-title">Application Development</h4>
                    <ul>
                      <li>
                        <Link to="/software-development">
                          Software Development
                        </Link>
                      </li>
                      <li>
                        <Link to="/mobile-app-development">
                          Mobile App Development
                        </Link>
                      </li>
                      <li>
                        <Link to="/web-development">Web Development</Link>
                      </li>
                      <li>
                        <Link to="/digital-marketing">Digital Marketing</Link>
                      </li>
                    </ul>
                    <h4 className="menu-title">Management Services</h4>
                    <ul>
                      <li>
                        <Link to="/outsourcing-services">Outsourcing</Link>
                      </li>
                    </ul>
                  </Col>
                  <Col sm="12" md="3" className="service-menu">
                    <h4 className="menu-title">Infrastructure Services</h4>
                    <ul>
                      <li>
                        <Link to="/datacenter-services">
                          Data Center Services
                        </Link>
                      </li>
                      <li>
                        <Link to="/system-infrastructure">
                          System Infra Services
                        </Link>
                      </li>
                      <li>
                        <Link to="/end-user-computing">End User Computing</Link>
                      </li>
                    </ul>
                    <h4 className="menu-title">BI Solutions</h4>
                    <ul>
                      <li>
                        <Link to="/data-visualization">Data Visualization</Link>
                      </li>
                      <li>
                        <Link to="/predictive-analytics">
                          Predictive Analytics
                        </Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <Link to="/careers">Careers</Link>
            </NavItem>
            <NavItem>
              <Link to="/contactus">Contact Us</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
