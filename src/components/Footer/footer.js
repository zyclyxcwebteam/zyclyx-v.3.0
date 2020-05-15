import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const footer1 = () => {
  return (
    <footer className="container-fluid footer ">
      <div className="  row footerstyle  ">
        <div className="col-md-3 col-sm-12   zyclyx order order-sm-2  order-md-0   ">
          <h1> ZYCLYX © 2018 -2020</h1>
        </div>
        <div className="col-md-6 col-sm-12  order order-sm-0   order-md-1 pages p-0 ">
          <ul className="d-flex justify-content-center p-0 m-0 ">
            <li className="title mr-md-4">
              <a href="/">About Us</a>
            </li>
            <li className="title mr-md-4">
              <a href="/"> Careers</a>
            </li>
            <li className="title mr-md-4">
              <a href="/">Contact Us</a>
            </li>
            <li className="title mr-md-4">
              <a href="/">Terms</a>
            </li>
            <li className="title">
              <a href="/">Privacy</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-12  order order-sm-1 order-md-2    ">
          <ul className="d-flex  align-items-center justify-content-end   socialicons">
            <li className="mr-3">
              <a href="/">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="mr-3">
              <a href="/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="mr-3">
              <a href="/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default footer1;
