import React from "react";

const Proof = props => {
  const { title, text } = props;
  return (
    <div className="proof-1 mx-auto bg-light text-center p-4">
      <h4 className="pb-2">{title}</h4>
      <p className="">{text}</p>
    </div>
  );
};
export default Proof;
