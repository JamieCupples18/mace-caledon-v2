// Frontend (React)

import React, { useState } from "react";
import Panel from "./panel"; // Importing CSS file for styling

function Panel2() {
  const [employeeId, setEmployeeId] = useState("000000000");
  const [location, setLocation] = useState("Co.Tyrone - Caledon");
  const [manager, setManager] = useState("Adam Jones");
  const [supervisor, setSupervisor] = useState("Adam Jones");
  const email = sessionStorage.getItem("email"); // Corrected key name

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = { email, manager, supervisor }; // Updated data structure

    fetch("http://localhost:8080/overviewinfouser/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error: ", error));
  };

  return (
    <Panel>
      <h2>Overview</h2>
      <div className="row">
        <div className="column">
          <h4>Employee ID</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setEmployeeId(e.target.innerText)}
          >
            {employeeId}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Location</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setLocation(e.target.innerText)}
          >
            {location}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Manager</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setManager(e.target.innerText)}
          >
            {manager}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Supervisor</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setSupervisor(e.target.innerText)}
          >
            {supervisor}
          </p>
        </div>
      </div>

      <button onClick={handleSubmit}>Save</button>
    </Panel>
  );
}

export default Panel2;
