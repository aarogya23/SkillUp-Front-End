import React, { useState } from "react";

import { useNavigate } from "react-router-dom";


function Dashboard() {

  const navigate = useNavigate();

  const LOGIN_API = "http://localhost:8083/api/auth/login";

  const API_URL = "http://localhost:8083/api/users/save";

  const [isLogin, setIsLogin] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    newsletter: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

 const handleLogin = async (e) => {
  e.preventDefault();

  if (!formData.email || !formData.password) {
    alert("Please enter email/username and password");
    return;
  }

  try {
    const response = await fetch(LOGIN_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailOrUsername: formData.email,
        password: formData.password,
      }),
    });

    const data = await response.json(); // ✅ ALWAYS parse JSON

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    console.log("Logged in user:", data);

    alert("Login successful ✅");

    // Save logged-in user
    localStorage.setItem("user", JSON.stringify(data));

    navigate("/home");

  } catch (error) {
    console.error(error);
    alert(error.message || "Invalid login credentials ❌");
  }
};



  const handleSignup = async (e) => {
  e.preventDefault();

  if (
    !formData.username ||
    !formData.email ||
    !formData.phone ||
    !formData.gender ||
    !formData.password ||
    !formData.confirmPassword
  ) {
    alert("Please fill all required fields");
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  if (!formData.agreeTerms) {
    alert("Please agree to the Terms of Service and Privacy Policy");
    return;
  }

  // 👇 Map frontend data to backend User entity
  const userData = {
    name: formData.username,
    email: formData.email,
    password: formData.password,
    phoneNumber: formData.phone,
    gender: formData.gender,
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Signup failed");
    }

    const savedUser = await response.json();
    console.log("User saved:", savedUser);

    alert("Account created successfully 🎉");

    navigate("/home");

    // Optional: clear form
    setFormData({
      username: "",
      email: "",
      phone: "",
      gender: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
      newsletter: false,
    });

  } catch (error) {
    console.error(error);
    alert("Error creating account ❌");
  }
};

  return (
    <div style={styles.dashboard}>
      <div style={styles.formCard}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>SKILL UP</h1>
          <p style={styles.subtitle}>
            Create your educational account and unlock endless possibilities
          </p>
        </div>

        {/* Toggle */}
        <div style={styles.formToggle}>
          <button
            onClick={() => setIsLogin(true)}
            style={{ ...styles.toggleBtn, ...(isLogin && styles.toggleBtnActive) }}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            style={{
              ...styles.toggleBtn,
              ...(!isLogin && styles.toggleBtnActive),
            }}
          >
            Sign Up
          </button>
        </div>

        {/* Login */}
        {isLogin ? (
          <form style={styles.form} onSubmit={handleLogin}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Password</label>
              <div style={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  style={styles.input}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={styles.eyeButton}
                >
                  👁️
                </button>
              </div>
            </div>

            <button type="submit" style={styles.submitBtn}>
              Login
            </button>
          </form>
        ) : (
          /* Signup */
          <form style={styles.form} onSubmit={handleSignup}>

            <div style={styles.formGroup}>
              <label style={styles.label}>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={styles.input}
                placeholder="98XXXXXXXX"
              />
            </div>

            {/* Gender */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Gender</label>
              <div style={styles.genderGroup}>
                {["Male", "Female", "Other"].map((g) => (
                  <label key={g} style={styles.genderLabel}>
                    <input
                      type="radio"
                      name="gender"
                      value={g}
                      checked={formData.gender === g}
                      onChange={handleChange}
                    />
                    {g}
                  </label>
                ))}
              </div>
            </div>

            {/* Password */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Password</label>
              <div style={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  style={styles.input}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={styles.eyeButton}
                >
                  👁️
                </button>
              </div>
            </div>

            {/* Confirm */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Confirm Password</label>
              <div style={styles.passwordWrapper}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  style={styles.input}
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  style={styles.eyeButton}
                >
                  👁️
                </button>
              </div>
            </div>

            {/* Checkboxes */}
            <div style={styles.checkboxGroup}>
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
              />
              <span>
                I agree to the Terms of Service and Privacy Policy
              </span>
            </div>

            <div style={styles.checkboxGroup}>
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
              />
              <span>Subscribe to newsletter</span>
            </div>

            <button type="submit" style={styles.submitBtn}>
              Create Account
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  dashboard: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f8f9fa",
  },
  formCard: {
    width: "100%",
    maxWidth: "520px",
    background: "#fff",
    padding: "2.5rem",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  header: { textAlign: "center", marginBottom: "2rem" },
  title: { fontSize: "1.8rem", fontWeight: "700" },
  subtitle: { color: "#666" },
  formToggle: { display: "flex", marginBottom: "1.5rem" },
  toggleBtn: {
    flex: 1,
    padding: "0.75rem",
    border: "none",
    background: "transparent",
    cursor: "pointer",
  },
  toggleBtnActive: {
    borderBottom: "3px solid #3b9ef5",
    color: "#3b9ef5",
  },
  formGroup: { marginBottom: "1rem" },
  label: { display: "block", marginBottom: "0.4rem" },
  input: {
    width: "100%",
    padding: "0.7rem",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  passwordWrapper: { position: "relative" },
  eyeButton: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    border: "none",
    background: "none",
    cursor: "pointer",
  },
  checkboxGroup: { display: "flex", gap: "0.5rem", marginBottom: "0.8rem" },
  submitBtn: {
    width: "100%",
    padding: "0.9rem",
    background: "#3b9ef5",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  genderGroup: { display: "flex", gap: "1rem" },
  genderLabel: { display: "flex", gap: "0.3rem" },
};

export default Dashboard;
