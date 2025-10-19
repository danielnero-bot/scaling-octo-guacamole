import "../styles/login.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";// ✅ Correctly import auth and googleProvider from your config file
import { auth, googleProvider } from "../firebase"; 
import { signInWithEmailAndPassword, signInWithPopup, } from "firebase/auth";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Validate email format
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(value === "" ? null : emailRegex.test(value));
  };

  // ✅ Handle email/password login with Firebase
  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      // This is the core function for loggin IN
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("✅ Login successful!");
      console.log("User:", auth.currentUser);

      // Redirect after login
      setTimeout(() => navigate("/dashboard"), 1200);
    } catch (error) {
      // You can refine the error message here, e.g., error.code to display user-friendly messages
      setMessage(`❌ Login failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle Google login
  const handleGoogleLogin = async () => {
    setMessage("");
    try {
      // This is the core function for loggin IN with a popup
      await signInWithPopup(auth, googleProvider);
      setMessage("✅ Logged in with Google!");
      setTimeout(() => navigate("/dashboard"), 1200);
    } catch (error) {
      setMessage(`❌ Google login failed: ${error.message}`);
    }
  };

  return (
    <>
      <div className="background">
        <div className="overlay"></div>

        <div className="login-container">
          <header className="login-header">
            <div className="logo">
              <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                  fill="currentColor"
                ></path>
              </svg>
              <h2>Quick Plate</h2>
            </div>
            <p className="welcome">Welcome Back</p>
          </header>

          <main>
            <form className="form-container" onSubmit={handleLogin}>
              {/* Email Field */}
              <div className="form-control email-control">
                <input
                  type="email"
                  id="email"
                  className={`input-field ${
                    isEmailValid === false
                      ? "invalid"
                      : isEmailValid === true
                      ? "valid"
                      : ""
                  }`}
                  placeholder=" "
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
                <label htmlFor="email">Email</label>

                {isEmailValid !== null && (
                  <i
                    className={`fa-solid ${
                      isEmailValid
                        ? "fa-circle-check success-icon"
                        : "fa-circle-xmark error-icon"
                    }`}
                  ></i>
                )}
              </div>

              {/* Password Field */}
              <div className="form-control password-control">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="input-field"
                  placeholder=" "
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <i
                  className={`fa-solid ${
                    showPassword ? "fa-eye-slash" : "fa-eye"
                  }`}
                  onClick={togglePasswordVisibility}
                ></i>
              </div>

              <a href="#" className="forgot">
                Forgot Password?
              </a>

              <button
                className="login-btn"
                disabled={loading || !isEmailValid || password === ""}
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              {message && <p className="login-message">{message}</p>}

              <div className="divider">
                <hr />
                <p>Or log in with</p>
                <hr />
              </div>

              <div className="socials">
                <button type="button" onClick={handleGoogleLogin}>
                  <i class="fa-brands fa-google"></i> Google
                </button>
              </div>

              <p className="signup">
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </form>
          </main>
        </div>
      </div>
    </>
  );
}
