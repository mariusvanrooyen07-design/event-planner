import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

export default function ProtectedRoute() {
  // Get the current logged in user from AuthContext.
  const { currentUser } = useContext(AuthContext);
  
  // Currently logged in users are routed to the protected pages.
  // If there is not a logged in user the user is navigated to the login page.
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}