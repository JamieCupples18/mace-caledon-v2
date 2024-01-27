import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import "./firstpage.css";

function Home() {
  return (
    <div className="home-container">
      <div className="signupcard">
        <Signup />
      </div>

      <div className="logincard">
        <Login />
      </div>
    </div>
  );
}

export default Home;
