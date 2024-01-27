import React, { useState } from "react";
import "./Signup.css"; // Import your CSS file

const authenticateUser = async (userData) => {
  try {
    const response = await fetch("http://localhost:8080/signup", {
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
      console.error("Error during signup:", response.statusText);
      return false; // Handle signup failure
    }
  } catch (error) {
    console.error("Error during signup:", error);
    return false; // Handle signup failure
  }
};

const getRedirectPath = (userRole) => {
  switch (userRole) {
    case "Admin":
      return "/admin";
    case "manager":
      return "/manager";
    case "supervisor":
      return "/supervisor";
    case "employee":
      return "/employee";
    default:
      // Handle unknown roles or redirect to a default page
      return "/default";
  }
};

const Signup = () => {
  const [email, setEmail] = useState("");
  const [repeatEmail, setRepeatEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if passwords and emails match, and other validations if needed
    if (password !== repeatPassword || email !== repeatEmail) {
      alert("Passwords or emails do not match");
      return;
    }

    // Send signup data to CORS server
    const signupSuccess = await authenticateUser({
      email,
      password,
      username,
      role,
    });

    if (signupSuccess) {
      // Redirect to the appropriate page based on the user role
      const redirectPath = getRedirectPath(role);
      window.location.href = redirectPath;
    } else {
      // Handle failed signup
      alert("Failed to signup. Please try again.");
    }
  };

  // Initialize WebSocket connection when the component mounts
  //   useEffect(() => {
  //     connectWebSocket();
  //   }, []);

  // Example of using state
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Username:", username);
  console.log("Role:", role);

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleLogin} className="form">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />

          <label>Repeat Email:</label>
          <input
            type="text"
            value={repeatEmail}
            onChange={(e) => setRepeatEmail(e.target.value)}
            className="input"
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />

          <label>Repeat Password:</label>
          <input
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            className="input"
          />

          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
          />

          <label>Role:</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="input"
          />

          <button type="submit" className="button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
