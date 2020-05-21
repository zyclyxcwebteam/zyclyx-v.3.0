/* eslint-disable prettier/prettier */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prettier/prettier */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/contactus.css";
import FloatingLabelInput from "react-floating-label-input";

const emailaddress = props => {
  return (
    <div className="row formrow">
      <FloatingLabelInput
        className="inputstyle"
        type="email"
        name="Name"
        id="email"
        label="Email"
        placeholder=""
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
};

export default emailaddress;
