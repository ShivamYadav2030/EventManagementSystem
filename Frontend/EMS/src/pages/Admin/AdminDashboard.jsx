import { Link, Routes, Route, useNavigate } from "react-router-dom";
import MaintenanceMenu from "./MaintenanceMenu";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <Link to="/" className="btn small">
          Home
        </Link>
        <button className="btn small right" onClick={handleLogout}>
          LogOut
        </button>
      </div>

      <div className="admin-welcome">Welcome Admin</div>

      <div className="admin-actions">
        <Link to="maintenance" className="btn action">
          Maintain User
        </Link>
        <Link to="maintenance" className="btn action">
          Maintain Vendor
        </Link>
      </div>

      <Routes>
        <Route path="maintenance/*" element={<MaintenanceMenu />} />
      </Routes>
    </div>
  );
}

export default AdminDashboard;
