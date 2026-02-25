import React, { useState } from "react";
import "../AdminLogin.css"; // import the CSS file (optional)

function AdminLogin() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Demo credentials: username 'admin', password 'password'
    setTimeout(() => {
      if (form.username === "admin" && form.password === "password") {
        // create a fake token for frontend-only flows
        localStorage.setItem("token", "demo-token-admin");
        localStorage.setItem("role", "admin");
        window.location = "/admin";
      } else {
        setError("Invalid demo credentials. Use admin/password");
      }
      setLoading(false);
    }, 300);
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2>Admin Login</h2>
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

export default AdminLogin;
