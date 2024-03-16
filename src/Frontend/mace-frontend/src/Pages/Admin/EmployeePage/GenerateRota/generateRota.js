import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Panel2 from "./components/panel2";
import Panel3 from "./components/panel3";
import "./generaterota.css";
function GenerateRota() {
  return (
    <div>
      <Header />
      <div className="container-main">
        <div className="left-column">
          <Sidebar />
        </div>
        <div className="right-column">
          <div className="row">
            <div className="middle-column-rota">
              <Panel2 />
            </div>
            <div className="row">
              <div className="middle-column-rota">
                <Panel3 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GenerateRota;
