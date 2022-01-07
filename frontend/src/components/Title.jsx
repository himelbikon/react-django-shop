import React from "react";

const Title = ({ title }) => {
  return (
    <div>
      <h1 className="text-center text-underline">
        <u>{title}</u>
      </h1>
    </div>
  );
};

export default Title;
