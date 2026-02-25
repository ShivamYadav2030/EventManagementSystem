import { Link } from "react-router-dom";
import "../App.css";

function Index() {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="title">Event Management System</h1>
        <p className="subtitle">
          Plan, Organize and Manage Events Easily
        </p>

        <Link to="/login/vendor" className="login-btn">
          Vendor Login
        </Link>
        <Link to="/login/admin" className="login-btn">
          Admin Login
        </Link>
        <Link to="/login/user" className="login-btn">
          User Login
        </Link>
      </div>
    </div>
  );
}

export default Index;