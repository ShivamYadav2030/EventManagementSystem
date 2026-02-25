import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

function ProtectedRoute({ children, role }) {
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");
      const userRole = localStorage.getItem("role");

      if (!token || !userRole) {
        setIsAuthorized(false);
        return;
      }

      if (userRole !== role) {
        setIsAuthorized(false);
        return;
      }

      // Optionally verify token with backend
      try {
        const response = await fetch("http://localhost:5000/api/auth/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });

        if (response.ok) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
        }
      } catch (error) {
        // If backend is unreachable, allow based on localStorage
        setIsAuthorized(userRole === role);
      }
    };

    verifyToken();
  }, [role]);

  if (isAuthorized === null) return <div>Loading...</div>;
  if (isAuthorized === false) return <Navigate to="/login/admin" />;

  return children;
}

export default ProtectedRoute;
