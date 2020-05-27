import React from "react";
import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Button = ({ btntext }) => {
  return (
    <button type="button" className="button d-flex align-items-center">
      {btntext}
      <FontAwesomeIcon icon={faArrowRight} className="btn-icon" />
    </button>
  );
};

export default Button;
