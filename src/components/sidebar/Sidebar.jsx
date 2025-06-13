import React from "react";
import {
  DashboardOutlined,
  TeamOutlined,
  ProfileOutlined,
  MoneyCollectOutlined,
  CarOutlined,
  UserOutlined,
  UserSwitchOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const mainItems = [
  {
    key: "/",
    icon: <DashboardOutlined />,
    label: "Dashboard",
  },
  {
    key: "/grade",
    icon: <ProfileOutlined />,
    label: "Grade",
  },
  {
    key: "/student",
    icon: <TeamOutlined />,
    label: "Student",
  },
  {
    key: "/fee-structure",
    icon: <MoneyCollectOutlined />,
    label: "Fee Structure",
  },
  {
    key: "/bus-route",
    icon: <CarOutlined />,
    label: "Bus Route",
  },
  {
    key: "/users",
    label: "User",
    icon: <UserSwitchOutlined />,
  },
];

const logoutItem = [
  {
    key: "logout",
    icon: <LogoutOutlined />,
    label: "Logout",
  },
];

const Sidebar = ({ onLogout, setSelectedItem }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClick = (e) => {
    if (e.key === "logout") {
      onLogout();
    } else {
      navigate(e.key);
    }
  };

  // Set default selected item from location
  useEffect(() => {
    const current = mainItems.find((item) => item.key === location.pathname);
    if (current) {
      setSelectedItem(current.label);
    }
  }, [location.pathname]);

  const selectedKeys = [location.pathname];
  const openKeys = location.pathname.startsWith("/users") ? ["users"] : [];

  return (
    <div className="flex flex-col h-screen w-[18vw] border-r border-gray-200 bg-[#00509d]">
      {/* Logo/Header */}
      <div className="flex items-center justify-center select-none gap-[20px] py-[14px] ">
        <img
          src="./../../../public/school.svg"
          alt="school-logo"
          className="size-[30px]"
        />
        <h1 className="font-[800] text-[36px] text-[#F0A500]">SCHOOL</h1>
      </div>

      {/* Main Menu */}
      <div className="flex-1 overflow-auto">
        <Menu
          onClick={onClick}
          mode="inline"
          selectedKeys={selectedKeys}
          defaultOpenKeys={openKeys}
          items={mainItems}
          className="custom-menu"
          style={{
            borderRight: "none",
            background: "#00509d",
            fontSize: "18px",
          }}
        />
      </div>

      {/* Logout Menu */}
      <div className="border-t border-gray-200">
        <Menu
          onClick={onClick}
          mode="inline"
          selectedKeys={[]}
          items={logoutItem}
          style={{ borderRight: "none", color: "red" }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
