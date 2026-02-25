import React, { useState } from "react";
import "./UserLogin.css"; // shared CSS (optional)

function UserLogin() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Demo credentials: username 'user', password 'password'
    setTimeout(() => {
      if (form.username === "user" && form.password === "password") {
        localStorage.setItem("token", "demo-token-user");
        localStorage.setItem("role", "user");
        window.location = "/user";
      } else {
        setError("Invalid demo credentials. Use user/password");
      }
      setLoading(false);
    }, 300);
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2>User Login</h2>
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

export default UserLogin;
