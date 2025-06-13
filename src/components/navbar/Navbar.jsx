import React from "react";
import { Avatar, Dropdown, Menu } from "antd";
import { SettingOutlined, UserOutlined } from "@ant-design/icons";

const Navbar = ({ selectedItem }) => {
  return (
    <div className="w-full px-[24px] py-3 bg-white shadow flex items-center justify-between">
      {/* Left: Logo or Page Name */}
      <p className="text-[20px] font-[600] text-gray-800">{selectedItem}</p>

      {/* Right: Profile + Settings */}
      <div className="flex items-center gap-4">
        {/* Settings Icon */}
        <SettingOutlined className="text-[24px] cursor-pointer text-gray-600 hover:text-black" />

        {/* Profile Button */}
        <Avatar
          size="default"
          icon={<UserOutlined />}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
