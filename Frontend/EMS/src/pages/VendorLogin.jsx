import React, { useState } from "react";
import "./VendorLogin.css"; // shared CSS file (optional)

function VendorLogin() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Demo credentials: username 'vendor', password 'password'
    setTimeout(() => {
      if (form.username === "vendor" && form.password === "password") {
        localStorage.setItem("token", "demo-token-vendor");
        localStorage.setItem("role", "vendor");
        window.location = "/vendor";
      } else {
        setError("Invalid demo credentials. Use vendor/password");
      }
      setLoading(false);
    }, 300);
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2>Vendor Login</h2>
      {error && <div className="error-message">{error}</div>}

      <input
        type="text"
        required
        placeholder="Username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        disabled={loading}
      />

      <input
        type="password"
        required
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        disabled={loading}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}

export default VendorLogin;
