import React from "react";
import "./Panel.css"; // Importing CSS file for styling

const Panel = ({ children }) => {
  return <div className="panel">{children}</div>;
};

export default Panel;
