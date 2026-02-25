import { Link, Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import GuestList from "./GuestList";
import OrderStatus from "./OrderStatus";

function UserDashboard() {
  return (
    <div>
      <h2>User Dashboard</h2>

      <Link to="cart">Cart</Link><br />
      <Link to="guest">Guest List</Link><br />
      <Link to="status">Order Status</Link>

      <Routes>
        <Route path="cart" element={<Cart />} />
        <Route path="guest" element={<GuestList />} />
        <Route path="status" element={<OrderStatus />} />
      </Routes>
    </div>
  );
}

export default UserDashboard;