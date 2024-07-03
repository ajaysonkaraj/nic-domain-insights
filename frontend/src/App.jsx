import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "layouts/admin";
// import AuthLayout from "layouts/auth";
import HomeLayout from "layouts/home";
import Signup from "views/auth/Signup";
import Login from "views/auth/Login";
import { PrivateRoute } from "views/auth/PrivateRoute";

const App = () => {
  return (
    <Routes>
      <Route path="auth/sign-up" element={<Signup />} />
      <Route path="auth/login" element={<Login />} />
      <Route
        path="admin/*"
        element={
          <PrivateRoute>
            <AdminLayout />
          </PrivateRoute>
        }
      />
      <Route path="home/*" element={<HomeLayout />} />

      <Route path="/" element={<Navigate to="/home/home" replace />} />
    </Routes>
  );
};

export default App;
