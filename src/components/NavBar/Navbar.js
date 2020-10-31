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
import Logo from "../../../static/images/logo-white.png";
import "./Navbar.css";

const Header = props => {
  const { active } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar expand="md">
      <NavbarBrand href="/">
        <img src={Logo} alt="ZYCLYX" className="logo" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link to="/" activeClassName="active">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/aboutus" activeClassName="active">
              About Us
            </Link>
          </NavItem>

          <UncontrolledDropdown nav inNavbar className="position-static">
            <DropdownToggle
              nav
              caret
              className={`${active === "service" && "active"}`}
            >
              Services
            </DropdownToggle>
            <DropdownMenu className="w-100 py-1 py-md-3 px-2 px-md-5 mt-0 service-dropdown">
              <Row>
                <Col sm="12" md="3" className="service-menu">
                  <h4 className="menu-title">New Age Technologies</h4>
                  <ul>
                    <li>
                      <Link to="services/robotic-process-automation">
                        Robotic Process Automation
                      </Link>
                    </li>
                    <li>
                      <Link to="services/artificial-intelligence">
                        Artificial Intelligence
                      </Link>
                    </li>
                    <li>
                      <Link to="services/optical-character-recognition">
                        Optical Character Recognition
                      </Link>
                    </li>
                    <li>
                      <Link to="services/blockchain">Blockchain</Link>
                    </li>
                    <li>
                      <Link to="services/internet-of-things">
                        Internet of Things
                      </Link>
                    </li>
                    <li>
                      <Link to="services/bigdata">Big Data</Link>
                    </li>
                  </ul>
                </Col>
                <Col sm="12" md="3" className="service-menu">
                  <h4 className="menu-title">Security Services</h4>
                  <ul>
                    <li>
                      <Link to="services/network-security">
                        Network Security
                      </Link>
                    </li>
                    <li>
                      <Link to="services/cyber-security">Cyber Security</Link>
                    </li>
                    <li>
                      <Link to="services/application-data-security">
                        Application & Data Security
                      </Link>
                    </li>
                    <li>
                      <Link to="services/governance-and-compliance">
                        Governance & Compliance
                      </Link>
                    </li>
                    <li>
                      <Link to="services/endpoint-mobile-security">
                        Endpoint & Mobile Security
                      </Link>
                    </li>
                    <li>
                      <Link to="services/identity-access-management">
                        Identity & Access Management
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col sm="12" md="3" className="service-menu">
                  <h4 className="menu-title">Application Development</h4>
                  <ul>
                    <li>
                      <Link to="services/software-development">
                        Software Development
                      </Link>
                    </li>
                    <li>
                      <Link to="services/mobile-app-development">
                        Mobile App Development
                      </Link>
                    </li>
                    <li>
                      <Link to="services/web-development">Web Development</Link>
                    </li>
                    <li>
                      <Link to="services/digital-marketing">
                        Digital Marketing
                      </Link>
                    </li>
                  </ul>
                  <h4 className="menu-title">Management Services</h4>
                  <ul>
                    <li>
                      <Link to="services/outsourcing-services">
                        Outsourcing
                      </Link>
                    </li>
                    <li>
                      <Link to="services/staffing-solutions">
                        Staffing Solutions
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col sm="12" md="3" className="service-menu">
                  <h4 className="menu-title">Infrastructure Services</h4>
                  <ul>
                    <li>
                      <Link to="services/datacenter-services">
                        Data Center Services
                      </Link>
                    </li>
                    <li>
                      <Link to="services/system-infrastructure">
                        System Infra Services
                      </Link>
                    </li>
                    <li>
                      <Link to="services/end-user-computing">
                        End User Computing
                      </Link>
                    </li>
                  </ul>
                  <h4 className="menu-title">BI Solutions</h4>
                  <ul>
                    <li>
                      <Link to="services/data-visualization">
                        Data Visualization
                      </Link>
                    </li>
                    <li>
                      <Link to="services/predictive-analytics">
                        Predictive Analytics
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </DropdownMenu>
          </UncontrolledDropdown>

          <NavItem>
            <Link to="/careers" activeClassName="active">
              Careers
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/contactus" activeClassName="active">
              Contact Us
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/blog"
              activeClassName="active"
              className={`${active === "blog" && "active"}`}
            >
              Blog
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
