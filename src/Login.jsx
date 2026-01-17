import { useState } from "react";
import "./login.css"; // or Login.css if you want separate file

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    agreeToTerms: false,
    newsletter: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const getPasswordStrength = (password) => {
    if (password.length === 0) return "";
    if (password.length < 6) return "Weak";
    if (password.length < 10) return "Medium";
    return "Strong";
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = () => {
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.country ||
      !formData.agreeToTerms
    ) {
      alert("Please fill in all required fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Account created successfully!");
    console.log("Form submitted:", formData);
  };

  return (
    <div className="login-container1">
      <div className="login-card">
        <h1 className="login-title">SKILL UP</h1>
        <p className="login-subtitle">
          Create your educational account and unlock endless possibilities
        </p>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          {/* Username */}
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />

          {/* Email */}
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          {/* Password */}
          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          {formData.password && (
            <p className={`password-strength`}>
              Strength: {getPasswordStrength(formData.password)}
            </p>
          )}

          {/* Confirm Password */}
          <label>Confirm Password</label>
          <div className="password-wrapper">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <button
              type="button"
              className="toggle-btn"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Country */}
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />

          {/* Checkboxes */}
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
            />
            I agree to the Terms of Service and Privacy Policy
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            Subscribe to our newsletter
          </label>

          {/* Submit Button */}
          <button className="submit-btn" onClick={handleSubmit}>
            Create Account
          </button>
        </form>

        {/* Social login */}
        <div className="social-login">
          <button onClick={() => alert("Google Sign-in")}>Google</button>
          <button onClick={() => alert("Github Sign-in")}>Github</button>
        </div>

        <p className="signin-link">
          Already have an account? <a href="#">Sign in</a>
        </p>
      </div>
    </div>
  );
}
