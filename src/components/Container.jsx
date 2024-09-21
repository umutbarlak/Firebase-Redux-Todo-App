import React from "react";

const Container = ({ children, bg }) => {
  return <div className={`px-5 md:px-[10vw] bg-${bg}`}>{children}</div>;
};

export default Container;
