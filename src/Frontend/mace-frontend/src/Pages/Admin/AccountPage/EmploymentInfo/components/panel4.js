import React, { useState } from "react";
import Panel from "../../Basicinfo/components/panel"; // Importing CSS file for styling

function Panel4() {
  const [employeeId, setEmployeeId] = useState("000000000");
  const [job, setJob] = useState("Job");
  const [businessTitle, setBusinessTitle] = useState("Business Title");
  const [jobProfile, setJobProfile] = useState("Job Profile");
  const [employmentType, setEmploymentType] = useState("Employment Type");
  const [managementLevel, setManagementLevel] = useState("Management Level");
  const [timeType, setTimeType] = useState("Time Type");
  const [fte, setFte] = useState("FTE");
  const [location, setLocation] = useState("Location");
  const [hireDate, setHireDate] = useState("Hire Date");
  const [originalHireDate, setOriginalHireDate] =
    useState("Original Hire Date");
  const [continuousServiceDate, setContinuousServiceDate] = useState(
    "Continuous Service Date"
  );
  const [endEmploymentDate, setEndEmploymentDate] = useState(
    "End Employment Date"
  );
  const [contractEndDate, setContractEndDate] = useState("Contract End Date");
  const [lengthOfService, setLengthOfService] = useState("Length Of Service");
  const [timeInPosition, setTimeInPosition] = useState("Time in Position");
  const [timeInJobProfile, setTimeInJobProfile] = useState(
    "Time in Job Profile"
  );
  const [phone, setPhone] = useState("Phone");
  const [email, setEmail] = useState("Email");
  const [address, setAddress] = useState("Address");

  return (
    <Panel>
      <h2>Job Details</h2>
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
          <h4>Job</h4>
        </div>

        <div className="column">
          <p contentEditable={true} onBlur={(e) => setJob(e.target.innerText)}>
            {job}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Business Title</h4>
        </div>

        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setBusinessTitle(e.target.innerText)}
          >
            {businessTitle}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Job Profile</h4>
        </div>

        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setJobProfile(e.target.innerText)}
          >
            {jobProfile}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Employment Type</h4>
        </div>

        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setEmploymentType(e.target.innerText)}
          >
            {employmentType}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Management Level</h4>
        </div>

        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setManagementLevel(e.target.innerText)}
          >
            {managementLevel}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Time Type</h4>
        </div>

        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setTimeType(e.target.innerText)}
          >
            {timeType}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>FTE</h4>
        </div>

        <div className="column">
          <p contentEditable={true} onBlur={(e) => setFte(e.target.innerText)}>
            {fte}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h2>Location</h2>
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
          <h4>Hire Date</h4>
        </div>

        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setHireDate(e.target.innerText)}
          >
            {hireDate}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Original Hire Date</h4>
        </div>

        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setOriginalHireDate(e.target.innerText)}
          >
            {originalHireDate}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Continuous Service Date</h4>
        </div>

        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setContinuousServiceDate(e.target.innerText)}
          >
            {continuousServiceDate}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>End Employment Date</h4>
        </div>

        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setEndEmploymentDate(e.target.innerText)}
          >
            {endEmploymentDate}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Contract End Date</h4>
        </div>

        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setContractEndDate(e.target.innerText)}
          >
            {contractEndDate}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Length Of Service</h4>
        </div>

        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setLengthOfService(e.target.innerText)}
          >
            {lengthOfService}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Time in Position</h4>
        </div>

        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setTimeInPosition(e.target.innerText)}
          >
            {timeInPosition}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Time in Job Profile</h4>
        </div>

        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setTimeInJobProfile(e.target.innerText)}
          >
            {timeInJobProfile}
          </p>
        </div>
      </div>

      <h2>Contact Information - Public</h2>

      <div className="row">
        <div className="column">
          <h4>Phone</h4>
        </div>

        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setPhone(e.target.innerText)}
          >
            {phone}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Email</h4>
        </div>

        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setEmail(e.target.innerText)}
          >
            {email}
          </p>
        </div>
      </div>

      <h2>Work Address</h2>

      <div className="row">
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setAddress(e.target.innerText)}
          >
            {address}
          </p>
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
    </Panel>
  );
}

export default Panel4;
