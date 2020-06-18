/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable prettier/prettier */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prettier/prettier */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/contactus.css";
import FloatingLabelInput from "react-floating-label-input";

const phone = props => {
  return (
    <>
      <div className="row formrow">
        <FloatingLabelInput
          className="inputstyle"
          type="text"
          name="Name"
          id="phone"
          label="Phone"
          placeholder=""
          {...props}
        />
      </div>
    </>
  );
};

export default phone;
