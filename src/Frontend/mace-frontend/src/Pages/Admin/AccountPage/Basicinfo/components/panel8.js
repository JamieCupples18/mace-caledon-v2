import React, { useState } from "react";
import Panel from "./panel"; // Importing CSS file for styling

function Panel8() {
  const [workerDocuments, setWorkerDocuments] = useState("Worker Documents");
  const [starterChecklist, setStarterChecklist] = useState("Starter Checklist");
  const [personalDetailsChangeCatalogue, setPersonalDetailsChangeCatalogue] =
    useState("Personal Details Change Catalogue EE Onboarding");

  return (
    <Panel>
      <h2>Documents</h2>
      <div className="row">
        <div className="column">
          <h4>Worker Documents</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setWorkerDocuments(e.target.innerText)}
          >
            {workerDocuments}
          </p>
        </div>
      </div>

      <h2>Reviewed Documents</h2>

      <h3>Standard Documents</h3>

      <div className="row">
        <div className="column">
          <h4>Starter Checklist</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) => setStarterChecklist(e.target.innerText)}
          >
            {starterChecklist}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <h4>Personal Details Change Catalogue EE Onboarding</h4>
        </div>
        <div className="column">
          <p
            contentEditable={true}
            onBlur={(e) =>
              setPersonalDetailsChangeCatalogue(e.target.innerText)
            }
          >
            {personalDetailsChangeCatalogue}
          </p>
        </div>
      </div>
    </Panel>
  );
}

export default Panel8;
