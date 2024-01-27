import React, { useState, useEffect } from "react";
import "./addForm.css"; // Import your CSS file

const authenticateUser = async (userData) => {
  try {
    const response = await fetch("http://localhost:8080/addemployee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result); // Handle the response from the CORS server
      return true; // You might want to return something specific based on success
    } else {
      console.error("Error during submission:", response.statusText);
      return false; // Handle signup failure
    }
  } catch (error) {
    console.error("Error during submission:", error);
    return false; // Handle signup failure
  }
};

const logEmployeeData = (
  EmployeeID,
  FirstName,
  MiddleName,
  SecondName,
  DateOfBirth,
  NationalID,
  Gender,
  MaritalStatus,
  Address,
  PhoneNumber,
  Email,
  JobTitle,
  Department,
  DateOfHire,
  EmploymentStatus,
  WorkLocation,
  HourlyRate,
  PayFrequency,
  TaxWithholdingAllowances,
  TaxIdentificationNumber,
  HighestLevelOfEducation,
  EducationAttended,
  DegreesObtained,
  PreviousWorkExperience,
  EmergencyContactName,
  EmergencyContactNumber,
  EmergencyContactAddress,
  EmployeeHandbookAcknowledgement,
  CodeOfConductAgreement,
  NonDisclosureAgreement,
  TrainingNeedsRequest,
  Username,
  Password,
  Role,
  EquipmentProvided
) => {
  console.log(`
    EmployeeID: ${EmployeeID}
    FirstName: ${FirstName}
    MiddleName: ${MiddleName}
    SecondName: ${SecondName}
    DateOfBirth: ${DateOfBirth}
    NationalID: ${NationalID}
    Gender: ${Gender}
    MaritalStatus: ${MaritalStatus}
    Address: ${Address}
    PhoneNumber: ${PhoneNumber}
    Email: ${Email}
    JobTitle: ${JobTitle}
    Department: ${Department}
    DateOfHire: ${DateOfHire}
    EmploymentStatus: ${EmploymentStatus}
    WorkLocation: ${WorkLocation}
    HourlyRate: ${HourlyRate}
    PayFrequency: ${PayFrequency}
    TaxWithholdingAllowances: ${TaxWithholdingAllowances}
    TaxIdentificationNumber: ${TaxIdentificationNumber}
    HighestLevelOfEducation: ${HighestLevelOfEducation}
    EducationAttended: ${EducationAttended}
    DegreesObtained: ${DegreesObtained}
    PreviousWorkExperience: ${PreviousWorkExperience}
    EmergencyContactName: ${EmergencyContactName}
    EmergencyContactNumber: ${EmergencyContactNumber}
    EmergencyContactAddress: ${EmergencyContactAddress}
    EmployeeHandbookAcknowledgement: ${EmployeeHandbookAcknowledgement}
    CodeOfConductAgreement: ${CodeOfConductAgreement}
    NonDisclosureAgreement: ${NonDisclosureAgreement}
    TrainingNeedsRequest: ${TrainingNeedsRequest}
    Username: ${Username}
    Password: ${Password}
    Role: ${Role}
    EquipmentProvided: ${EquipmentProvided}
  `);
};

const AddEmployee = () => {
  const [EmployeeID, setEmployeeID] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [MiddleName, setMiddleName] = useState("");
  const [SecondName, setSecondName] = useState("");
  const [DateOfBirth, setDateOfBirth] = useState("");
  const [NationalID, setNationalID] = useState("");
  const [Gender, setGender] = useState("");
  const [MaritalStatus, setMaritalStatus] = useState("");
  const [Address, setAddress] = useState("");
  const [PhoneNumber, SetPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [JobTitle, setJobTitle] = useState("");
  const [Department, SetDepartment] = useState("");
  const [DateOfHire, SetDateOfHire] = useState("");
  const [EmploymentStatus, setEmploymentStatus] = useState("");
  const [WorkLocation, setWorkLocation] = useState("");
  const [HourlyRate, setHourlyRate] = useState("");
  const [PayFrequency, setPayFrequency] = useState("");
  const [TaxWithholdingAllowances, setTaxWithholdingAllowances] = useState("");
  const [TaxIdentificationNumber, setTaxIdentificationNumber] = useState("");
  const [HighestLevelOfEducation, setHighestLevelOfEducation] = useState("");
  const [EducationAttended, setEducationAttended] = useState("");
  const [DegreesObtained, setDegreesObtained] = useState("");
  const [PreviousWorkExperience, setPreviousWorkExperience] = useState("");
  const [EmergencyContactName, setEmergencyContactName] = useState("");
  const [EmergencyContactNumber, setEmergencyContactNumber] = useState("");
  const [EmergencyContactAddress, setEmergencyContactAddress] = useState("");
  const [EmployeeHandbookAcknowledgement, setEmployeeHandbookAcknowledgement] =
    useState("");
  const [CodeOfConductAgreement, setCodeOfConductAgreement] = useState("");
  const [NonDisclosureAgreement, setNonDisclosureAgreement] = useState("");
  const [TrainingNeedsRequest, setTrainingNeedsRequest] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Role, setRole] = useState("");
  const [EquipmentProvided, setEquipmentProvided] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Send signup data to CORS server
    const addemployeesubmission = await authenticateUser({
      EmployeeID,
      FirstName,
      MiddleName,
      SecondName,
      DateOfBirth,
      NationalID,
      Gender,
      MaritalStatus,
      Address,
      PhoneNumber,
      Email,
      JobTitle,
      Department,
      DateOfHire,
      EmploymentStatus,
      WorkLocation,
      HourlyRate,
      PayFrequency,
      TaxWithholdingAllowances,
      TaxIdentificationNumber,
      HighestLevelOfEducation,
      EducationAttended,
      DegreesObtained,
      PreviousWorkExperience,
      EmergencyContactName,
      EmergencyContactNumber,
      EmergencyContactAddress,
      EmployeeHandbookAcknowledgement,
      CodeOfConductAgreement,
      NonDisclosureAgreement,
      TrainingNeedsRequest,
      Username,
      Password,
      Role,
      EquipmentProvided,
    });

    // Log the employee data to the console
    logEmployeeData(
      EmployeeID,
      FirstName,
      MiddleName,
      SecondName,
      DateOfBirth,
      NationalID,
      Gender,
      MaritalStatus,
      Address,
      PhoneNumber,
      Email,
      JobTitle,
      Department,
      DateOfHire,
      EmploymentStatus,
      WorkLocation,
      HourlyRate,
      PayFrequency,
      TaxWithholdingAllowances,
      TaxIdentificationNumber,
      HighestLevelOfEducation,
      EducationAttended,
      DegreesObtained,
      PreviousWorkExperience,
      EmergencyContactName,
      EmergencyContactNumber,
      EmergencyContactAddress,
      EmployeeHandbookAcknowledgement,
      CodeOfConductAgreement,
      NonDisclosureAgreement,
      TrainingNeedsRequest,
      Username,
      Password,
      Role,
      EquipmentProvided
    );
  };

  const [currentPage, setCurrentPage] = useState(0);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const goToNextPage = () => {
    // Add logic to prevent going beyond the total number of pages
    // For example, if you have three sections, you can use setCurrentPage(2) as the maximum value
    setCurrentPage((prevPage) => Math.min(prevPage + 1, 8));
  };

  return (
    <div className="container">
      <div className="signup-container">
        <div className="signup-card">
          <h2>Employee Information</h2>
          <form onSubmit={handleLogin} className="form">
            {/* Section 1: Personal Information */}
            {currentPage === 0 && (
              <div className="form-section">
                <div className="form-column">
                  <label>Employee ID:</label>
                  <input
                    type="text"
                    value={EmployeeID}
                    onChange={(e) => setEmployeeID(e.target.value)}
                    className="input"
                  />
                  <label>First Name:</label>
                  <input
                    type="text"
                    value={FirstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="input"
                  />
                  <label>Date of Birth:</label>
                  <input
                    type="text"
                    value={DateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className="input"
                  />
                  {/* ... (Other fields in Section 1) */}
                </div>
                <div className="form-column">
                  <label>Middle Name:</label>
                  <input
                    type="text"
                    value={MiddleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                    className="input"
                  />
                  <label>Second Name:</label>
                  <input
                    type="text"
                    value={SecondName}
                    onChange={(e) => setSecondName(e.target.value)}
                    className="input"
                  />
                  <label>Date of Birth:</label>
                  <input
                    type="text"
                    value={DateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className="input"
                  />
                  {/* ... (Other fields in Section 1) */}
                </div>
              </div>
            )}

            {/* Section 2: Personal Information (continued) */}
            {currentPage === 1 && (
              <div className="form-section">
                <div className="form-column">
                  <label>Address:</label>
                  <input
                    type="text"
                    value={Address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="input"
                  />
                  <label>Marital Status:</label>
                  <input
                    type="text"
                    value={MaritalStatus}
                    onChange={(e) => setMaritalStatus(e.target.value)}
                    className="input"
                  />
                  <label>Email Address:</label>
                  <input
                    type="text"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                  />
                  {/* ... (Fields in Section 2) */}
                </div>
                <div className="form-column">
                  <label>Phone Number:</label>
                  <input
                    type="text"
                    value={PhoneNumber}
                    onChange={(e) => SetPhoneNumber(e.target.value)}
                    className="input"
                  />
                  <label>National ID:</label>
                  <input
                    type="text"
                    value={NationalID}
                    onChange={(e) => setNationalID(e.target.value)}
                    className="input"
                  />
                  {/* ... (Fields in Section 2) */}
                </div>
              </div>
            )}

            {/* Section 3: Job Information */}
            {currentPage === 2 && (
              <div className="form-section">
                <div className="form-column">
                  <label>Job Title:</label>
                  <input
                    type="text"
                    value={JobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    className="input"
                  />
                  <label>Date of Hire:</label>
                  <input
                    type="text"
                    value={DateOfHire}
                    onChange={(e) => SetDateOfHire(e.target.value)}
                    className="input"
                  />
                  <label>Work Location:</label>
                  <input
                    type="text"
                    value={WorkLocation}
                    onChange={(e) => setWorkLocation(e.target.value)}
                    className="input"
                  />
                  {/* ... (Fields in Section 3) */}
                </div>
                <div className="form-column">
                  <label>Department:</label>
                  <input
                    type="text"
                    value={Department}
                    onChange={(e) => SetDepartment(e.target.value)}
                    className="input"
                  />
                  <label>Employment Status:</label>
                  <input
                    type="text"
                    value={EmploymentStatus}
                    onChange={(e) => setEmploymentStatus(e.target.value)}
                    className="input"
                  />
                  {/* ... (Fields in Section 3) */}
                </div>
              </div>
            )}

            {/* Section 4: Employment Information */}
            {currentPage === 3 && (
              <div className="form-section">
                <div className="form-column">
                  <label>Hourly Rate:</label>
                  <input
                    type="text"
                    value={HourlyRate}
                    onChange={(e) => setHourlyRate(e.target.value)}
                    className="input"
                  />
                  <label>Tax Withholding Allowances:</label>
                  <input
                    type="text"
                    value={TaxWithholdingAllowances}
                    onChange={(e) =>
                      setTaxWithholdingAllowances(e.target.value)
                    }
                    className="input"
                  />
                  {/* ... (Fields in Section 4) */}
                </div>
                <div className="form-column">
                  <label>Pay Frequency:</label>
                  <input
                    type="text"
                    value={PayFrequency}
                    onChange={(e) => setPayFrequency(e.target.value)}
                    className="input"
                  />
                  <label>Tax Identification Number:</label>
                  <input
                    type="text"
                    value={TaxIdentificationNumber}
                    onChange={(e) => setTaxIdentificationNumber(e.target.value)}
                    className="input"
                  />
                  {/* ... (Fields in Section 4) */}
                </div>
              </div>
            )}

            {/* Section 5: Employment Information */}
            {currentPage === 4 && (
              <div className="form-section">
                <div className="form-column">
                  <label>Highest Level of Education:</label>
                  <input
                    type="text"
                    value={HighestLevelOfEducation}
                    onChange={(e) => setHighestLevelOfEducation(e.target.value)}
                    className="input"
                  />
                  <label>Degrees Obtained:</label>
                  <input
                    type="text"
                    value={DegreesObtained}
                    onChange={(e) => setDegreesObtained(e.target.value)}
                    className="input"
                  />
                  {/* ... (Fields in Section 5) */}
                </div>
                <div className="form-column">
                  <label>Schools Attended:</label>
                  <input
                    type="text"
                    value={EducationAttended}
                    onChange={(e) => setEducationAttended(e.target.value)}
                    className="input"
                  />
                  <label>Previous Work Experience:</label>
                  <input
                    type="text"
                    value={PreviousWorkExperience}
                    onChange={(e) => setPreviousWorkExperience(e.target.value)}
                    className="input"
                  />
                  {/* ... (Fields in Section 5) */}
                </div>
              </div>
            )}

            {/* Section 6: Employment Information */}
            {currentPage === 5 && (
              <div className="form-section">
                <div className="form-column">
                  <label>Emergency Contact Name:</label>
                  <input
                    type="text"
                    value={EmergencyContactName}
                    onChange={(e) => setEmergencyContactName(e.target.value)}
                    className="input"
                  />
                  <label>Emergency Contact Address:</label>
                  <input
                    type="text"
                    value={EmergencyContactAddress}
                    onChange={(e) => setEmergencyContactAddress(e.target.value)}
                    className="input"
                  />
                  {/* ... (Fields in Section 6) */}
                </div>
                <div className="form-column">
                  <label>Emergency Contact Number:</label>
                  <input
                    type="text"
                    value={EmergencyContactNumber}
                    onChange={(e) => setEmergencyContactNumber(e.target.value)}
                    className="input"
                  />
                  {/* ... (Fields in Section 6) */}
                </div>
              </div>
            )}

            {/* Section 7: Employment Information */}
            {currentPage === 6 && (
              <div className="form-section">
                <div className="form-column">
                  <label>Employee Handbook Acknowledgment:</label>
                  <input
                    type="text"
                    value={EmployeeHandbookAcknowledgement}
                    onChange={(e) =>
                      setEmployeeHandbookAcknowledgement(e.target.value)
                    }
                    className="input"
                  />
                  <label>Non-Disclosure Agreement:</label>
                  <input
                    type="text"
                    value={NonDisclosureAgreement}
                    onChange={(e) => setNonDisclosureAgreement(e.target.value)}
                    className="input"
                  />
                  {/* ... (Fields in Section 7) */}
                </div>
                <div className="form-column">
                  <label>Code of Conduct Agreement:</label>
                  <input
                    type="text"
                    value={CodeOfConductAgreement}
                    onChange={(e) => setCodeOfConductAgreement(e.target.value)}
                    className="input"
                  />
                  {/* ... (Fields in Section 7) */}
                </div>
              </div>
            )}

            {/* Section 8: Employment Information */}
            {currentPage === 7 && (
              <div className="form-section">
                <div className="form-column">
                  <label>Training Needs or Requests:</label>
                  <input
                    type="text"
                    value={TrainingNeedsRequest}
                    onChange={(e) => setTrainingNeedsRequest(e.target.value)}
                    className="input"
                  />
                  {/* ... (Fields in Section 8) */}
                </div>
                <div className="form-column">
                  {/* ... (Fields in Section 8) */}
                </div>
              </div>
            )}

            {/* Section 9: Employment Information */}
            {currentPage === 8 && (
              <div className="form-section">
                <div className="form-column">
                  <label>Username for System Authentication:</label>
                  <input
                    type="text"
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="input"
                  />
                  <label>Role Access Details:</label>
                  <input
                    type="text"
                    value={Role}
                    onChange={(e) => setRole(e.target.value)}
                    className="input"
                  />
                  {/* ... (Fields in Section 9) */}
                </div>
                <div className="form-column">
                  <label>Password for System Authentication:</label>
                  <input
                    type="password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                  />
                  <label>Issued Uniforms or Equipment Details:</label>
                  <input
                    type="text"
                    value={EquipmentProvided}
                    onChange={(e) => setEquipmentProvided(e.target.value)}
                    className="input"
                  />
                  {/* ... (Fields in Section 9) */}
                </div>
              </div>
            )}

            {/* Section 9: Employment Information */}
            {currentPage === 8 && (
              <div className="form-section">
                <div className="form-column">
                  {/* Submit Button */}
                  <button type="submit" className="button">
                    Add Employee
                  </button>
                  {/* ... (Fields in Section 9) */}
                </div>
              </div>
            )}

            {/* Pagination Buttons */}
            <div className="pagination-buttons">
              <button
                type="button"
                className="button"
                onClick={goToPreviousPage}
                disabled={currentPage === 0}
              >
                Previous
              </button>
              <button
                type="button"
                className="button"
                onClick={goToNextPage}
                disabled={currentPage === 8} // Update based on the number of sections
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
