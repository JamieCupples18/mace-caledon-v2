import React, { useEffect, useState } from "react";
import Panel from "./panel";

function SessionStorage() {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(sessionStorage.getItem("email"));
  });

  const handleClick = () => {
    sessionStorage.setItem("data", "demo value");
  };
  const handleRemove = () => {
    sessionStorage.removeItem("data");
  };

  return (
    <Panel>
      <div>
        <h1>{value}</h1>
        <button onClick={handleClick}>set value</button>
        <button onClick={handleRemove}>Remove value</button>
      </div>
    </Panel>
  );
}
export default SessionStorage;
