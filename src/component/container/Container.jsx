import React from "react";

const Container = ({ children, classname }) => {
  return <div className={`${classname}`}>{children}</div>;
};
export default Container;
