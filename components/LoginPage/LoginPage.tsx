import React, { useState } from "react";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useSelector(state => state.auth.isLoggedIn);

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      username,
      password,
    };
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    };
    fetch("/api/auth/login", request)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setIsLoggedIn(true);
        } else {
          alert("Invalid username or password");
        }
      });
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
      {!isLoggedIn && <p>Please login to continue.</p>}
    </div>
  );
};

export default LoginPage;
