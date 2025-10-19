import React, { useState } from "react";
import "../styles/signup.css";
import { Link, useNavigate } from "react-router-dom";
// ✅ Import both auth and db (Firestore instance)
import { auth, db } from "../firebase"; 
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// ✅ Import Firestore functions
import { doc, setDoc } from "firebase/firestore";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Toggle password visibility
  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirm = () => setShowConfirm((prev) => !prev);

  // Email validation
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(value === "" ? null : regex.test(value));
  };

  // ✅ Modified Firebase Signup Logic to store data in Firestore
  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");

    if (password !== confirm) {
      setMessage("❌ Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      // 1. Store email/password in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // 2. Set user's display name in Firebase Authentication
      await updateProfile(user, { displayName: fullName });

      // 3. Store additional user data in Cloud Firestore (NEW STEP)
      const userData = {
        uid: user.uid,
        fullName: fullName,
        email: email,
        createdAt: new Date(),
        // You can add more profile fields here, e.g., role: 'user'
      };

      // Create a document in the 'users' collection with the user's UID as the document ID
      await setDoc(doc(db, "users", user.uid), userData);
      
      // End of storage logic

      setMessage("✅ Signup successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 1500);

      // Reset fields
      setEmail("");
      setPassword("");
      setConfirm("");
      setFullName("");
    } catch (error) {
      // Clean up error message for display
      const errorMessage = error.message.replace("Firebase: ", "").replace(/\(auth.*\)/, "").trim();
      setMessage(`❌ ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-wrapper">
      <form className="signup-form-container" onSubmit={handleSignup}>
        <h2 className="signup-form-title">Create Account</h2>

        {/* Full Name */}
        <div className="signup-form-control">
          <input
            type="text"
            id="fullname"
            className="signup-input-field"
            placeholder=" "
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label htmlFor="fullname">Full Name</label>
        </div>

        {/* Email */}
        <div className="signup-form-control signup-email-control">
          <input
            type="email"
            id="email"
            className={`signup-input-field ${
              isEmailValid === false
                ? "signup-invalid"
                : isEmailValid === true
                ? "signup-valid"
                : ""
            }`}
            placeholder=" "
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label htmlFor="email">Email Address</label>

          {isEmailValid !== null && (
            <i
              className={`fa-solid ${
                isEmailValid
                  ? "fa-circle-check signup-success-icon"
                  : "fa-circle-xmark signup-error-icon"
              }`}
            ></i>
          )}
        </div>

        {/* Password */}
        <div className="signup-form-control signup-password-control">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="signup-input-field"
            placeholder=" "
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <i
            className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            onClick={togglePassword}
          ></i>
        </div>

        {/* Confirm Password */}
        <div className="signup-form-control signup-password-control">
          <input
            type={showConfirm ? "text" : "password"}
            id="confirm"
            className={`signup-input-field ${
              confirm && confirm !== password
                ? "signup-invalid"
                : confirm && confirm === password
                ? "signup-valid"
                : ""
            }`}
            placeholder=" "
            required
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          <label htmlFor="confirm">Confirm Password</label>
          <i
            className={`fa-solid ${showConfirm ? "fa-eye-slash" : "fa-eye"}`}
            onClick={toggleConfirm}
          ></i>

          {confirm && (
            <i
              className={`fa-solid ${
                confirm === password
                  ? "fa-circle-check signup-success-icon"
                  : "fa-circle-xmark signup-error-icon"
              }`}
            ></i>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="signup-btn" disabled={loading || !isEmailValid || password !== confirm || password.length < 6}>
          {loading ? "Creating Account..." : "Sign Up"}
        </button>

        {/* Feedback Message */}
        {message && <p className="signup-message">{message}</p>}

        {/* Footer */}
        <p className="signup-form-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}