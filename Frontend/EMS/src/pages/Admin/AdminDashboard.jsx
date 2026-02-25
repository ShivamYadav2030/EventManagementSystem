import { Link, Routes, Route } from "react-router-dom";
import MaintenanceMenu from "./MaintenanceMenu";

function AdminDashboard() {
  return (
    <div>
      <h2>Admin Panel</h2>

      <Link to="maintenance">Maintenance Menu</Link>

      <Routes>
        <Route path="maintenance/*" element={<MaintenanceMenu />} />
      </Routes>
    </div>
  );
}

export default AdminDashboard;