import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ title }) => {
  return (
    <div className="py-5">
      <h2 className="section-title">{title}</h2>
    </div>
  );
};

export default SectionTitle;
