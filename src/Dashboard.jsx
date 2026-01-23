import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const LOGIN_API = "http://localhost:8083/api/auth/login";
  const SIGNUP_API = "http://localhost:8083/api/users/save";

  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // ✅ Auto redirect if user already logged in
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/home");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // ================= LOGIN =================
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Email and password required");
      return;
    }

    try {
      const response = await fetch(LOGIN_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          emailOrUsername: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // ✅ Save user to localStorage
      localStorage.setItem("user", JSON.stringify(data));

      alert("Login successful ✅");
      navigate("/home");
    } catch (error) {
      alert(error.message || "Invalid credentials ❌");
    }
  };

  // ================= SIGNUP =================
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
      alert("Please fill all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!formData.agreeTerms) {
      alert("Please agree to terms");
      return;
    }

    const userData = {
      name: formData.username,
      email: formData.email,
      password: formData.password,
      phoneNumber: formData.phone,
      gender: formData.gender,
    };

    try {
      const response = await fetch(SIGNUP_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const savedUser = await response.json();

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      // ✅ Save user to localStorage
      localStorage.setItem("user", JSON.stringify(savedUser));

      alert("Account created 🎉");
      navigate("/home");
    } catch (error) {
      alert("Signup error ❌");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>SKILL UP</h2>

        <div style={styles.toggle}>
          <button
            onClick={() => setIsLogin(true)}
            style={isLogin ? styles.activeBtn : styles.btn}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            style={!isLogin ? styles.activeBtn : styles.btn}
          >
            Sign Up
          </button>
        </div>

        {isLogin ? (
          <form onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />

            <div style={styles.passwordBox}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                style={styles.input}
              />
              <span onClick={() => setShowPassword(!showPassword)}>👁️</span>
            </div>

            <button type="submit" style={styles.submit}>
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignup}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              style={styles.input}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
            />

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={styles.input}
            />

            <label>
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
              />{" "}
              I agree to terms
            </label>

            <button type="submit" style={styles.submit}>
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
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f8",
  },
  card: {
    width: "420px",
    background: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  title: { textAlign: "center", marginBottom: "1rem" },
  toggle: { display: "flex", marginBottom: "1rem" },
  btn: { flex: 1, padding: "10px", border: "none", cursor: "pointer" },
  activeBtn: {
    flex: 1,
    padding: "10px",
    borderBottom: "3px solid #3b9ef5",
    color: "#3b9ef5",
    cursor: "pointer",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  submit: {
    width: "100%",
    padding: "10px",
    background: "#3b9ef5",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  passwordBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
};

export default Dashboard;
