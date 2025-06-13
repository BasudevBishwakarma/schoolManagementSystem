import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layouts/MainLayout";
import Grade from "./pages/Grade";
import Student from "./pages/Student";
import FeeStructure from "./pages/FeeStructure";
import BusRoute from "./pages/BusRoute";
import Login from "./pages/Login";

import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import Users from "./pages/Users/Users";

import React from "react";
import { ConfigProvider, message } from "antd";

function App() {
  const [messageApi, contextHolder] = message.useMessage();

  // Optional: You could use React Context to provide messageApi globally

  return (
    <ConfigProvider>
      {contextHolder} {/* Ant Design messages will now have correct context */}
      <BrowserRouter>
        <Routes>
          {/* Public route - Login */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login messageApi={messageApi} />
              </PublicRoute>
            }
          />

          {/* Protected routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="grade" element={<Grade />} />
            <Route path="student" element={<Student />} />
            <Route path="fee-structure" element={<FeeStructure />} />
            <Route path="bus-route" element={<BusRoute />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
