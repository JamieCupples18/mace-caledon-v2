import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import your CSS file

// Define the base URL for API requests
const API_BASE_URL = "https://localhost:8080";

// Function to authenticate user by sending login data to the server
const authenticateUser = async (userData) => {
  try {
    // Send a POST request to the login endpoint with user data
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userData),
    });

    // Check if the response is successful (status code 2xx)
    if (response.ok) {
      // Parse the JSON response and log it (for debugging purposes)
      const result = await response.json();
      console.log(result); // Handle the response from the server
      return result; // Return the parsed result
    } else {
      // Log an error message if the response is not successful
      console.error("Error during Login:", response.statusText);
      return false; // Return false to indicate a failed authentication
    }
  } catch (error) {
    // Log an error message if an exception occurs during the authentication process
    console.error("Error during Login:", error);
    return false; // Return false to indicate a failed authentication
  }
};

// Function to get the redirect path based on the user's role
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

// React functional component for the login page
const Login = () => {
  // State variables for email and password using the useState hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // React Router's useNavigate hook for controlled navigation
  const navigate = useNavigate();

  // Event handler for form submission (login attempt)
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Validate form inputs
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Send login data to the server and await the authentication result
    const response = await authenticateUser({ email, password });

    // Check if the authentication was successful
    if (response) {
      // Redirect to the appropriate page based on the user's role
      const userRole = response.role;
      const redirectPath = getRedirectPath(userRole);

      // Log the redirectUrl to the console (for debugging purposes)
      console.log("Redirecting to:", redirectPath);

      // Use React Router's useNavigate for controlled navigation
      navigate(redirectPath);
    } else {
      // Handle failed login (display an alert)
      alert("Failed to login. Please try again.");
    }
  };

  // Example of using state (console.log statements for debugging)
  console.log("Email:", email);
  console.log("Password:", password);

  // JSX structure for the login form and UI
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="form">
          <label>Email:</label>
          {/* Input for email with controlled component using state */}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />

          <label>Password:</label>
          {/* Input for password with controlled component using state */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />

          {/* Submit button for the login form */}
          <button type="submit" className="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

// Export the Login component as the default export of this module
export default Login;
