import React, { useState } from "react";
import Panel from "./panel"; // Importing CSS file for styling

function Panel6() {
  const [homeAddress, setHomeAddress] = useState("Home Address");
  const [homePhoneNumber, setHomePhoneNumber] = useState("Home Phone Number");
  const [homeEmailAddress, setHomeEmailAddress] =
    useState("Home Email Address");
  const [workAddress, setWorkAddress] = useState("Work Address");
  const [workPhoneNumber, setWorkPhoneNumber] = useState("Work Phone Number");
  const [workEmailAddress, setWorkEmailAddress] =
    useState("Work Email Address");
  const [emergencyContact, setEmergencyContact] = useState("Emergency Contact");

  return (
    <Panel>
      <h2>Contact</h2>
      <h3>Home Contact Information</h3>
      <h3>Addresses</h3>

      <div className="row">
        <div className="column">
          <h4>Address</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setHomeAddress(e.target.innerText)}
          >
            {homeAddress}
          </p>
        </div>
      </div>

      <h3>Phones</h3>

      <div className="row">
        <div className="column">
          <h4>Phone Number</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setHomePhoneNumber(e.target.innerText)}
          >
            {homePhoneNumber}
          </p>
        </div>
      </div>

      <h3>Email Address</h3>

      <div className="row">
        <div className="column">
          <h4>Email Address</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setHomeEmailAddress(e.target.innerText)}
          >
            {homeEmailAddress}
          </p>
        </div>
      </div>

      <h2>Work Contact Information</h2>
      <h3>Addresses</h3>

      <div className="row">
        <div className="column">
          <h4>Address</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setWorkAddress(e.target.innerText)}
          >
            {workAddress}
          </p>
        </div>
      </div>

      <h3>Phones</h3>

      <div className="row">
        <div className="column">
          <h4>Phone Number</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setWorkPhoneNumber(e.target.innerText)}
          >
            {workPhoneNumber}
          </p>
        </div>
      </div>

      <h3>Email Addresses</h3>

      <div className="row">
        <div className="column">
          <h4>Email Address</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setWorkEmailAddress(e.target.innerText)}
          >
            {workEmailAddress}
          </p>
        </div>
      </div>

      <h2>Emergency Contact</h2>

      <div className="row">
        <div className="column">
          <h4>Emergency Contact</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setEmergencyContact(e.target.innerText)}
          >
            {emergencyContact}
          </p>
        </div>
      </div>
    </Panel>
  );
}

export default Panel6;
