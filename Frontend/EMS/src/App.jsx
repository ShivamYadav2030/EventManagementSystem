import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

import UserLogin from "./pages/UserLogin";
import VendorLogin from "./pages/VendorLogin";
import AdminLogin from "./pages/AdminLogin";

import AdminDashboard from "./pages/Admin/AdminDashboard";
import VendorMain from "./pages/Vendor/VendorMain";
import UserDashboard from "./pages/User/UserDashboard";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/login/vendor" element={<VendorLogin />} />
        <Route path="/login/user" element={<UserLogin />} />

        {/* ADMIN */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* VENDOR */}
        <Route
          path="/vendor/*"
          element={
            <ProtectedRoute role="vendor">
              <VendorMain />
            </ProtectedRoute>
          }
        />

        {/* USER */}
        <Route
          path="/user/*"
          element={
            <ProtectedRoute role="user">
              <UserDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
