import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    // If user logged in, redirect from login to dashboard (/)
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;
