import React from "react";

const Container = ({ children, bg }) => {
  return (
    <div className={`px-5 md:px-[10vw] bg-${bg} md:h-[100vh] overflow-hidden`}>
      {children}
    </div>
  );
};

export default Container;
