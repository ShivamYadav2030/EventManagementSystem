import { Link, Routes, Route } from "react-router-dom";
import AddMembership from "./AddMembership";
import UpdateMembership from "./UpdateMembership";

function MaintenanceMenu() {
  return (
    <div>
      <h3>Maintenance Menu (Admin Only)</h3>

      <Link to="add">Add Membership</Link><br />
      <Link to="update">Update Membership</Link>

      <Routes>
        <Route path="add" element={<AddMembership />} />
        <Route path="update" element={<UpdateMembership />} />
      </Routes>
    </div>
  );
}

export default MaintenanceMenu;