import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../consts";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { email, password };
    try {
      const response = await axios.post(`${API_URL}/auth/login/`, formData);
      const data = response.data;
      localStorage.setItem("token", data.token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      setIsLoggedIn(true);
      window.location.href = "/games";
    } catch (err) {
      const errorResponse = err.response;
      if (errorResponse) {
        setError(errorResponse.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
      console.log(err);
    }
  };

  return (
    <div className="page login-page">
      {isLoggedIn ? (
        <div>
          <h2>You are logged in</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          {error && <p className="error">{error}</p>}
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Login</button>
          <div className="registerButton">
            <p>Don't have an account?</p>
            <button>
              <Link to="/register">Register</Link>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default LoginPage;
