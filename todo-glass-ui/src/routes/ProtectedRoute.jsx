// src/routes/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// ✅ Reusable protected route wrapper
export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  // If not logged in, redirect to Login page
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // If user exists, render the child page (Dashboard, etc.)
  return children;
}
