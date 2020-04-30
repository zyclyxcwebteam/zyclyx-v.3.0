import React from "react";
import Navbar from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const layout = props => {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default layout;
