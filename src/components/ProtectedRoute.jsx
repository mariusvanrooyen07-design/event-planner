import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

export default function ProtectedRoute() {
  const { currentUser } = useContext(AuthContext);
  
    return currentUser ? <Outlet /> : <Navigate to="/login" />;
}