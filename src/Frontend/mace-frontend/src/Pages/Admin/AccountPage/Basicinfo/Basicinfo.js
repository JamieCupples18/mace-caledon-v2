import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Panel5 from "./components/panel5";
import Panel6 from "./components/panel6";
import Panel7 from "./components/panel7";
import Panel8 from "./components/panel8";
import "./basicinfo.css";

function basicInfo() {
  return (
    <div>
      <Header />
      <div className="container-main">
        <div className="left-column">
          <Sidebar />
        </div>
        <div className="right-column">
          <div className="row">
            <div className="left-column-b">
              <Panel5 />
              <Panel8 />
            </div>

            <div className="right-column-b">
              <Panel7 />
              <Panel6 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default basicInfo;
