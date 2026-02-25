import { Link, Routes, Route, useNavigate } from "react-router-dom";
import YourItem from "./YourItem";
import AddNewItem from "./AddNewItem";
import Transaction from "./Transaction";
import "./VendorMain.css";

function VendorMain() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  }

  return (
    <div className="vendor-container">
      <div className="vendor-welcome">
        Welcome
        <br />
        Vendor
      </div>

      <div className="vendor-actions">
        <Link to="your-item" className="vendor-btn">
          Your Item
        </Link>
        <Link to="add-item" className="vendor-btn">
          Add New Item
        </Link>
        <Link to="transaction" className="vendor-btn">
          Transaction
        </Link>
        <button className="vendor-btn" onClick={handleLogout}>
          LogOut
        </button>
      </div>

      <Routes>
        <Route path="your-item" element={<YourItem />} />
        <Route path="add-item" element={<AddNewItem />} />
        <Route path="transaction" element={<Transaction />} />
      </Routes>
    </div>
  );
}

export default VendorMain;
