/* eslint-disable prettier/prettier */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prettier/prettier */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/contactus.css";
import FloatingLabelInput from "react-floating-label-input";

const messege = props => {
  return (
    <div className="row formrow">
      <FloatingLabelInput
        className="inputstyle"
        name="Name"
        component="textarea"
        id="message"
        label="Message"
        placeholder=""
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
};

export default messege;
