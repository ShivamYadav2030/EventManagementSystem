import { Link, Routes, Route } from "react-router-dom";
import YourItem from "./YourItem";
import AddNewItem from "./AddNewItem";
import Transaction from "./Transaction";

function VendorMain() {
  return (
    <div>
      <h2>Vendor Main Page</h2>

      <Link to="your-item">Your Item</Link><br />
      <Link to="add-item">Add New Item</Link><br />
      <Link to="transaction">Transaction</Link>

      <Routes>
        <Route path="your-item" element={<YourItem />} />
        <Route path="add-item" element={<AddNewItem />} />
        <Route path="transaction" element={<Transaction />} />
      </Routes>
    </div>
  );
}

export default VendorMain;