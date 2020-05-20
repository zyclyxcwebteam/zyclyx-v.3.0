/* eslint-disable prettier/prettier */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prettier/prettier */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/contactus.css";
import FloatingLabelInput from "react-floating-label-input";

const subject = props => {
  return (
    // <div className="form-group">
    //   <input type="text" className="form-control" {...props} />
    // </div>

    <div className="row formrow">
      <FloatingLabelInput
        className=""
        type="textarea"
        name="Name"
        id="subject"
        label="Subject"
        placeholder=""
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
};

export default subject;
