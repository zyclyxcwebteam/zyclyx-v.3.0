import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faAt,
  faPhoneAlt,
  faMapMarkerAlt,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../NavBar/Navbar";
import ContactBanner from "../ContactBanner/ContactBanner";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Layout.css";

library.add(fab, faAt, faPhoneAlt, faMapMarkerAlt, faArrowRight, faArrowLeft);

const layout = props => {
  const { children, showBanner } = props;
  return (
    <>
      <Navbar />
      {children}
      {showBanner && <ContactBanner />}
      <Footer />
    </>
  );
};

export default layout;
