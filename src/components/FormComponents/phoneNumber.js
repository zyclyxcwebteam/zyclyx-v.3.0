/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable prettier/prettier */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prettier/prettier */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/contactus.css";
import FloatingLabelInput from "react-floating-label-input";
import IntlTelInput from "react-intl-tel-input";

const phone = props => {
  return (
    <>
      <div className="row formrow">
        <IntlTelInput
          containerClassName="intl-tel-input"
          inputClassName=""
          // value={this.state.country}
          // onChange={this.selectcounty}
          // selectcounty={onChange()}
          {...props}
        />
      </div>
      <div className="row formrow">
        <FloatingLabelInput
          className=""
          type="text"
          name="Name"
          id="phone"
          label="Phone"
          placeholder=""
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        />
      </div>
    </>
  );
};

export default phone;
