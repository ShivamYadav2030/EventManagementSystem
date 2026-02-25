const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key_change_this";

// Mock user database (replace with MongoDB later)
const users = {
  admin: {
    id: 1,
    username: "admin",
    email: "admin@example.com",
    password: "$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWDeaVaS9sS86QhO", // "password" hashed
    role: "admin"
  },
  vendor: {
    id: 2,
    username: "vendor",
    email: "vendor@example.com",
    password: "$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWDeaVaS9sS86QhO", // "password" hashed
    role: "vendor"
  },
  user: {
    id: 3,
    username: "user",
    email: "user@example.com",
    password: "$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWDeaVaS9sS86QhO", // "password" hashed
    role: "user"
  }
};

// Login endpoint
app.post("/api/auth/login", async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // Validate input
    if (!username || !password || !role) {
      return res.status(400).json({ message: "Username, password, and role are required" });
    }

    // Find user
    const user = users[username];

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check role
    if (user.role !== role) {
      return res.status(401).json({ message: "Invalid role for this user" });
    }

    // Verify password (for demo: "password" generates the hashed value above)
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user.id,
        username: user.username,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Verify token endpoint
app.post("/api/auth/verify", (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ message: "Token is required" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    res.json({ success: true, user: decoded });
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("\nTest credentials (all with password 'password'):");
  console.log("- Admin: username 'admin', role 'admin'");
  console.log("- Vendor: username 'vendor', role 'vendor'");
  console.log("- User: username 'user', role 'user'");
});
