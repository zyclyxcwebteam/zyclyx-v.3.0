/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/contactus.css";
import FloatingLabelInput from "react-floating-label-input";

const TextInput = props => {
  return (
    // <div className="form-group">
    //   <input type="text" className="form-control" {...props} />
    // </div>
    <div className="row formrow">
      <FloatingLabelInput
        className=""
        type="text"
        name="Name"
        id="username"
        label="User Name"
        placeholder=""
        {...props}
      />
    </div>
  );
};

export default TextInput;
