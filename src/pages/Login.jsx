
import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    alert("Login successful!");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-box">
          <h1>Login</h1>
          <p className="subtitle">
            Enter your account details
          </p>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span
                className="eye-icon"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "🙈" : "👁"}
              </span>
            </div>

            <p className="forgot">
              Forgot Password?
            </p>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <div className="signup-section">
            <span>Don't have an account?</span>
            <button className="signup-btn">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <div className="login-right">
        <div className="welcome-content">
          <h1>
            Welcome to
            <br />
            <span>ExamPass</span>
          </h1>

          <p>Your smart examination hall ticket portal</p>

          <div className="welcome-icon">
            🎓
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
