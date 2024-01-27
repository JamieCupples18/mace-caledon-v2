import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h2 style={headingStyle}>Admin Dashboard</h2>
      <p style={subHeadingStyle}></p>
    </header>
  );
}

const headerStyle = {
  background: "#000000",
  padding: "20px",
  color: "#61dafb",
  textAlign: "center",
};

const headingStyle = {
  fontSize: "2em",
  margin: "0",
};

const subHeadingStyle = {
  fontSize: "1.2em",
  margin: "10px 0 0",
};

export default Header;
