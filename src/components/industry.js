import React from "react";
import "../styles/Industry.css";

function industry(props) {
  const { number, title, text } = props;
  return (
    <div className="industry d-sm-flex text-md-center justify-content-center align-items-center bg-light">
      <div className="d-sm-flex flex-sm-column justify-content-center align-items-center industry-sm">
        <h1 className="display-4 py-md-4 pr-sm-4  p-md-0">{number}</h1>
        <div className=" industry-text text-md-center ml-sm-4 ml-xs-2 ml-md-0">
          <h2 className="">{title}</h2>
          <p className="m-0">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default industry;
