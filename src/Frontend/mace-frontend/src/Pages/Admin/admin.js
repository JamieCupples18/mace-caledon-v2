import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Panel from "./components/panel";
import "./Admin.css";

const Admin = () => {
  return (
    <div>
      <Header />
      <div className="container-main">
        <div className="left-column">
          <Sidebar />
        </div>
        <div className="right-column">
          <div className="row">
            <div className="left-column-a">
              <Panel>
                <h1>Account</h1>
              </Panel>
            </div>
            <div className="right-column-a">
              <Panel>
                <h1>Employees</h1>
              </Panel>
            </div>
          </div>

          <div className="row">
            <div className="middle-column-a">
              <Panel>
                <h1>Sales Report</h1>
              </Panel>
            </div>
          </div>
          <div className="row">
            <div className="left-column-a">
              <Panel>
                <h1>Inventory</h1>
              </Panel>
            </div>
            <div className="right-column-a">
              <Panel>
                <h1>Rota</h1>
              </Panel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
