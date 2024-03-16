import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Panel2 from "./components/panel2";
import Panel3 from "./components/panel3";
import Panel4 from "./components/panel4";
import SessionStorage from "./components/testsessionstorage";

function EmploymentInformation() {
  return (
    <div>
      <Header />
      <div className="container-main">
        <div className="left-column">
          <Sidebar />
        </div>
        <div className="right-column">
          <div className="row">
            <div className="left-column-b">
              <Panel4 />
            </div>

            <div className="right-column-b">
              <Panel2 />
              <Panel3 />
              <SessionStorage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmploymentInformation;
