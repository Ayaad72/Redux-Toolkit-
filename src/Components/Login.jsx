import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setCredentials } from "../slices/authSlice";
import { BASE_URL, USERS_URL } from "../constants";
const Login = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${BASE_URL}${USERS_URL}`);
      const users = response.data;
      const user = users.find(
        (u) => u.email === email && u.username === username
      );
      if (user) {
        dispatch(setCredentials(user));
        window.location.href = "/home"; // Redirect to home page
      } else {
        alert("Invalid email or username");
      }
    } catch (error) {
      console.error("There was an error logging in!", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <h2>Login</h2>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
