import React, { useState } from "react";
import Panel from "./panel"; // Importing CSS file for styling

function Panel5() {
  const [legalFirstName, setLegalFirstName] = useState("Legal First Name");
  const [legalSurname, setLegalSurname] = useState("Legal Surname");
  const [preferredName, setPreferredName] = useState("Preferred Name");
  const [dateOfBirth, setDateOfBirth] = useState("Date Of Birth");
  const [gender, setGender] = useState("Gender");
  const [address, setAddress] = useState("Address");
  const [phoneNumber, setPhoneNumber] = useState("Phone Number");
  const [nationalInsuranceNumber, setNationalInsuranceNumber] = useState(
    "National Insurance Number"
  );
  const [age, setAge] = useState("Age");
  const [countryOfBirth, setCountryOfBirth] = useState(
    "Country / Territory of Birth"
  );
  const [raceEthnicity, setRaceEthnicity] = useState("Race/Ethnicity");
  const [citizenshipStatus, setCitizenshipStatus] =
    useState("Citizenship Status");
  const [primaryNationality, setPrimaryNationality] = useState(
    "Primary Nationality"
  );
  const [genderIdentity, setGenderIdentity] = useState("Gender Identity");
  const [pronoun, setPronoun] = useState("Pronoun");
  const [disabilityStatus, setDisabilityStatus] = useState("Disability Status");

  return (
    <Panel>
      <h2>Personal Details</h2>

      <div className="row">
        <div className="column">
          <h4>Legal First Name</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setLegalFirstName(e.target.innerText)}
          >
            {legalFirstName}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Legal Surname</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setLegalSurname(e.target.innerText)}
          >
            {legalSurname}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Preferred Name</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setPreferredName(e.target.innerText)}
          >
            {preferredName}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Date Of Birth</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setDateOfBirth(e.target.innerText)}
          >
            {dateOfBirth}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Gender</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setGender(e.target.innerText)}
          >
            {gender}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Address</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setAddress(e.target.innerText)}
          >
            {address}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Phone Number</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setPhoneNumber(e.target.innerText)}
          >
            {phoneNumber}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>National Insurance Number</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setNationalInsuranceNumber(e.target.innerText)}
          >
            {nationalInsuranceNumber}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Age</h4>
        </div>
        <div className="column">
          <p contentEditable={true} onBlur={(e) => setAge(e.target.innerText)}>
            {age}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Country / Territory of Birth</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setCountryOfBirth(e.target.innerText)}
          >
            {countryOfBirth}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Race/Ethnicity</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setRaceEthnicity(e.target.innerText)}
          >
            {raceEthnicity}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Citizenship Status</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setCitizenshipStatus(e.target.innerText)}
          >
            {citizenshipStatus}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Primary Nationality</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setPrimaryNationality(e.target.innerText)}
          >
            {primaryNationality}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Gender Identity</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setGenderIdentity(e.target.innerText)}
          >
            {genderIdentity}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Pronoun</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setPronoun(e.target.innerText)}
          >
            {pronoun}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Disability Status</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setDisabilityStatus(e.target.innerText)}
          >
            {disabilityStatus}
          </p>
        </div>
      </div>
    </Panel>
  );
}

export default Panel5;
