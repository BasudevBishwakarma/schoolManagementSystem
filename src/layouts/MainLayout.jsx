import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import LogoutModal from "../components/sidebar/LogoutModal";
import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const handleLogout = () => {
    setIsLogoutOpen(true);
  };

  return (
    <div className="flex">
      <Sidebar onLogout={handleLogout} setSelectedItem={setSelectedItem} />

      <div className="w-full bg-gray-100 min-h-screen ">
        <div className="w-full flex flex-col flex-1 h-screen overflow-y-auto">
          <Navbar selectedItem={selectedItem} />
          <div className="flex-1 p-4 min-h-[cal(100vh-64px)]">
            <Outlet />
          </div>
        </div>
      </div>

      <LogoutModal
        title="Confirm Logout"
        open={isLogoutOpen} // instead of visible={visible}
        onCancel={() => setIsLogoutOpen(false)}
      />
    </div>
  );
};

export default MainLayout;
