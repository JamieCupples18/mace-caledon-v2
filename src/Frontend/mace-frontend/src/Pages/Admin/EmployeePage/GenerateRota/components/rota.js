import React, { useState } from "react";

const Rota = () => {
  const [employee, setEmployee] = useState("");
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [openingHours, setOpeningHours] = useState({
    Monday: "",
    Tuesday: "",
    Wednesday: "",
    Thursday: "",
    Friday: "",
    Saturday: "",
    Sunday: "",
  });

  const handleEmployeeChange = (e) => {
    setEmployee(e.target.value);
  };

  const handleDaysChange = (e) => {
    setDays(e.target.value);
  };

  const handleHoursChange = (e) => {
    setHours(e.target.value);
  };

  const handleOpeningHoursChange = (day, value) => {
    setOpeningHours((prevOpeningHours) => ({
      ...prevOpeningHours,
      [day]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the submission logic here
    console.log("Employee:", employee);
    console.log("Days:", days);
    console.log("Hours:", hours);
    console.log("Opening Hours:", openingHours);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Employee:
          <input type="text" value={employee} onChange={handleEmployeeChange} />
        </label>
      </div>
      <div>
        <label>
          Days:
          <input type="text" value={days} onChange={handleDaysChange} />
        </label>
      </div>
      <div>
        <label>
          Hours:
          <input type="text" value={hours} onChange={handleHoursChange} />
        </label>
      </div>
      <div>
        <label>Opening Hours:</label>
        {Object.keys(openingHours).map((day) => (
          <div key={day}>
            <span>{day}:</span>
            <input
              type="text"
              value={openingHours[day]}
              onChange={(e) => handleOpeningHoursChange(day, e.target.value)}
            />
          </div>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Rota;
