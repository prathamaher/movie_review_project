import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("token"); // or your auth logic

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
}
