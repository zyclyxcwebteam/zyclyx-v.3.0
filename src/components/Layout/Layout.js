import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faRocketchat } from "@fortawesome/free-brands-svg-icons";
import {
  faAt,
  faPhoneAlt,
  faMapMarkerAlt,
  faArrowRight,
  faArrowLeft,
  faTimes,
  faMapMarkedAlt,
  faPhone,
  faEnvelope,
  faPaperPlane,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import SEO from "../SEO/seo";
import Navbar from "../NavBar/Navbar";
import ContactBanner from "../ContactBanner/ContactBanner";
import Footer from "../Footer/Footer";

import ContactFormModal from "../ContactFormModal/ContactFormModal";
// import ChatBot from "../ChatBot/ChatBot";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Layout.css";

library.add(
  fab,
  faAt,
  faPhoneAlt,
  faMapMarkerAlt,
  faArrowRight,
  faArrowLeft,
  faTimes,
  faMapMarkedAlt,
  faPhone,
  faEnvelope,
  faRocketchat,
  faPaperPlane,
  faAngleRight
);

const layout = props => {
  const {
    children,
    showBanner,
    title,
    description,
    keywords,
    image,
    url,
    active,
    modal,
    toggle,
  } = props;

  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        image={image}
        url={url}
      />
      <Navbar active={active} />
      {children}
      {showBanner && <ContactBanner toggle={toggle} />}
      <Footer />
      <ContactFormModal
        buttonLabel="Enquire Now"
        modal={modal}
        toggle={toggle}
      />
      {/* <ChatBot /> */}
    </>
  );
};

export default layout;
