import React, { useState } from "react";
import "./Signup.css"; // Import your CSS file

// Function to authenticate user by sending signup data to the server
const authenticateUser = async (userData) => {
  try {
    // Send a POST request to the signup endpoint with user data
    const response = await fetch("http://localhost:8080/signup/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    // Check if the response is successful (status code 2xx)
    if (response.ok) {
      // Parse the JSON response and log it (for debugging purposes)
      const result = await response.json();
      console.log(result); // Handle the response from the server
      return true; // Return true to indicate successful signup
    } else {
      // Log an error message if the response is not successful
      console.error("Error during signup:", response.statusText);
      return false; // Return false to indicate failed signup
    }
  } catch (error) {
    // Log an error message if an exception occurs during the signup process
    console.error("Error during signup:", error);
    return false; // Return false to indicate failed signup
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

// React functional component for the signup page
const Signup = () => {
  // State variables for form inputs using the useState hook
  const [email, setEmail] = useState("");
  const [repeatEmail, setRepeatEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  // Event handler for form submission (signup attempt)
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if passwords and emails match, and other validations if needed
    if (password !== repeatPassword || email !== repeatEmail) {
      alert("Passwords or emails do not match");
      return;
    }

    // Send signup data to the server and await the authentication result
    const signupSuccess = await authenticateUser({
      email,
      password,
      username,
      role,
    });

    // Check if the signup was successful
    if (signupSuccess) {
      // Redirect to the appropriate page based on the user's role
      const redirectPath = getRedirectPath(role);
      window.location.href = redirectPath; // Change the window location for redirection
    } else {
      // Handle failed signup (display an alert)
      alert("Failed to signup. Please try again.");
    }
  };

  const handleClick = () => {
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("role", role);
  };

  // Example of using state (console.log statements for debugging)
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Username:", username);
  console.log("Role:", role);

  // JSX structure for the signup form and UI
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleLogin} className="form">
          <label>Email:</label>
          {/* Input for email with controlled component using state */}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />

          <label>Repeat Email:</label>
          {/* Input for repeated email with controlled component using state */}
          <input
            type="text"
            value={repeatEmail}
            onChange={(e) => setRepeatEmail(e.target.value)}
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

          <label>Repeat Password:</label>
          {/* Input for repeated password with controlled component using state */}
          <input
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            className="input"
          />

          <label>Username:</label>
          {/* Input for username with controlled component using state */}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
          />

          <label>Role:</label>
          {/* Input for role with controlled component using state */}
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="input"
          />

          {/* Submit button for the signup form */}
          <button onClick={handleClick} type="submit" className="button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

// Export the Signup component as the default export of this module
export default Signup;
