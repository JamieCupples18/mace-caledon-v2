import React from "react";
import "./header.css";

const Header = () => {
  const onClickLogo = (event) => {
    console.log("onClickLogo", event);
  };

  const onSearchClick = (event) => {
    console.log("onSearchClick", event);
  };

  const onMenuClick = (event) => {
    console.log("onMenuClick", event);
  };

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo-section" onclick={onClickLogo}>
        <span className="logo">RetailHubs |</span>
        <span className="label">Admin | Generate Rota</span>
      </div>

      {/* Search Section */}
      <div className="search" onClick={onSearchClick}>
        Search
      </div>

      {/* Menu and Avatar Section */}
      <div className="menu-avatar-section">
        <div className="menu" onclick={onMenuClick}>
          Menu
        </div>
        {/* Avatar Section you can insert an image or use text */}
        <div className="avatar">AB</div>
      </div>
    </header>
  );
};

export default Header;
