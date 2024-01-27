import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import your CSS file

const API_BASE_URL = "https://localhost:8080";

const authenticateUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result); // Handle the response from the server
      return result;
    } else {
      console.error("Error during Login:", response.statusText);
      return false;
    }
  } catch (error) {
    console.error("Error during Login:", error);
    return false;
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Send login data to the server
    const response = await authenticateUser({ email, password });

    if (response) {
      // Redirect to the appropriate page based on the user role
      const userRole = response.role;
      const redirectPath = getRedirectPath(userRole);

      // Log the redirectUrl to the console
      console.log("Redirecting to:", redirectPath);

      // Use React Router's useHistory for controlled navigation
      navigate.push(redirectPath);
    } else {
      // Handle failed login
      alert("Failed to login. Please try again.");
    }
  };

  // Example of using state
  console.log("Email:", email);
  console.log("Password:", password);

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="form">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />

          <button type="submit" className="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
