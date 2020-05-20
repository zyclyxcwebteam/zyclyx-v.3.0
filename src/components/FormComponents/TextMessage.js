/* eslint-disable prettier/prettier */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prettier/prettier */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/contactus.css";
import FloatingLabelInput from "react-floating-label-input";

const messege = props => {
  return (
    // <div className="form-group">
    //   <input type="text" className="form-control" {...props} />
    // </div>

    <div className="row formrow">
      <FloatingLabelInput
        className=""
        component="textarea"
        name="Name"
        id="messege"
        label="Messege"
        type="text"
        placeholder=""
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
};

export default messege;
