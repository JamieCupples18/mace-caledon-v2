// Panel7.js
import React, { useState } from "react";
import Panel from "./panel"; // Importing CSS file for styling

function Panel7() {
  const [employeeId, setEmployeeId] = useState("Employee ID");
  const [nationalId, setNationalId] = useState("National ID");
  const [partyId, setPartyId] = useState("Party ID");
  const [gbrStaffNumber, setGbrStaffNumber] = useState("GBR Staff Number");
  const [gbrPeopleSoftId, setGbrPeopleSoftId] = useState("GBR PeopleSoft ID");
  const [pwcGuid, setPwcGuid] = useState("PwC GUID");
  const [ppi, setPpi] = useState("PPI");

  return (
    <Panel>
      <h2>IDs</h2>

      <h3>Employee ID</h3>

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

      <h3>National IDs</h3>

      <div className="row">
        <div className="column">
          <h4>National ID</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setNationalId(e.target.innerText)}
          >
            {nationalId}
          </p>
        </div>
      </div>

      <h3>Other IDs</h3>

      <div className="row">
        <div className="column">
          <h4>Party ID</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setPartyId(e.target.innerText)}
          >
            {partyId}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>GBR Staff Number</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setGbrStaffNumber(e.target.innerText)}
          >
            {gbrStaffNumber}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>GBR PeopleSoft ID</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setGbrPeopleSoftId(e.target.innerText)}
          >
            {gbrPeopleSoftId}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>PwC GUID</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setPwcGuid(e.target.innerText)}
          >
            {pwcGuid}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>PPI</h4>
        </div>
        <div className="column">
          <p contentEditable={true} onBlur={(e) => setPpi(e.target.innerText)}>
            {ppi}
          </p>
        </div>
      </div>
    </Panel>
  );
}

export default Panel7;
