import React from "react";

function sectiontitle(props) {
  const { sectionStyles, title, text } = props;
  return (
    <div className={` ${sectionStyles} ml-5`}>
      <h2 className="">{title}</h2>
      <p className="m-0">{text}</p>
    </div>
  );
}
export default sectiontitle;
