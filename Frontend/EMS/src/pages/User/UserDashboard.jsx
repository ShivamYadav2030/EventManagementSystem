import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";
import GuestList from "./GuestList";
import OrderStatus from "./OrderStatus";
import "./UserDashboard.css";

function UserDashboard() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  }

  const categories = ["Catering", "Florist", "Decoration", "Lighting"];

  return (
    <div className="user-dashboard">
      <div className="user-sidebar">
        <div
          className="dropdown-header"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          Drop Down
        </div>
        {dropdownOpen && (
          <div className="dropdown-menu">
            {categories.map((cat) => (
              <div key={cat} className="dropdown-item">
                * {cat}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="user-main">
        <div className="user-header">WELCOME USER</div>

        <div className="user-actions">
          <button className="user-btn vendor-btn">Vendor</button>
          <Link to="cart" className="user-btn">
            Cart
          </Link>
          <Link to="guest" className="user-btn">
            Guest List
          </Link>
          <Link to="status" className="user-btn">
            Order Status
          </Link>
        </div>

        <div className="user-logout">
          <button className="user-btn logout-btn" onClick={handleLogout}>
            LogOut
          </button>
        </div>

        <Routes>
          <Route path="cart" element={<Cart />} />
          <Route path="guest" element={<GuestList />} />
          <Route path="status" element={<OrderStatus />} />
        </Routes>
      </div>
    </div>
  );
}

export default UserDashboard;
